Sonet.am.widgets.RoboArmBlocklyPlugin = Class.extend({
   defCustomBlocks: false,
   saveData: {},

   init: function(props) {
      this.gInterpreterSpeed = 5;
      this.workspaceResetCount = 0;

      // only do this once as it is operating on the static Blockly instance. 
      // Could change to not use globaly blockly instance?
      if ( !Sonet.am.widgets.RoboArmBlocklyPlugin.defCustomBlocks ) {
         this.defineCustomBlocks();     
         Sonet.am.widgets.RoboArmBlocklyPlugin.defCustomBlocks = true; 
      }
      
      this.initBlockly(props);
   },

   initBlockly: function(props) {
      let me = this, 
      rtl = $('.g-viewmode').attr('dir') =='rtl' ? true : false;
      me.workspaceData = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="when_run" x="20" y="20"></block></xml>';

      if(props.blocklyElem){
         me.blocklyElem = props.blocklyElem;
      }else{
         me.blocklyElem = 'blocklyDiv';
      }
      //Blockly.HSV_SATURATION = 0.99;
      //Blockly.HSV_VALUE = 0.70;

      $.extend(me, props);  

      // load any saved data. Element must have data-id attribute
      let saveId = $('#'+me.blocklyElem).data('id');
      if (saveId != null ) {
         let scormApi = Sonet.am.scorm.ScormWrapper;
         loadContent = scormApi.getInteraction(saveId, true);
         if (loadContent) {
            try {
               me.saveData = JSON.parse(loadContent);
               // do we want to replace everything or just selected elements
               $.extend(me, me.saveData); 
            } catch (e) {}
         }
      }

      let settings = $.extend({
         sounds: false,
         rtl:rtl
      }, props.workspaceSettings);
      settings['toolbox'] = me.toolboxData;
      $('#'+me.blocklyElem).data('obj', me);
      $('#'+me.blocklyElem).empty();
      let replacing = $('#'+me.blocklyElem).data('replace');

      if ( replacing != null ) {
         $('#'+me.blocklyElem).css({width: $(replacing).width(), 
            height: $(replacing).height(), position: 'absolute',
            left: $(replacing).position().left, top: $(replacing).position().top+4})
      }
      me.executionFinished = false;
      me.blocklyWorkspace = Blockly.inject(me.blocklyElem, settings);
      
      //load the workspace
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(me.workspaceData), me.blocklyWorkspace);
      
      if ( settings['readOnly'] != true ) {
         me.blocklyWorkspace.addChangeListener(Blockly.Events.disableOrphans);
      }

      // dont update the block count on read-only ones, otherwise resources etc interfere with the main window
      if ( settings['readOnly'] != true || settings['blockCount'] != null ) {
         me.blocklyWorkspace.fireChangeListener(
            me.blocklyWorkspace.addChangeListener(function(ev) {
               //for input change, dropdown change
               if (ev.type == Blockly.Events.BLOCK_CHANGE && ev.newValue!=true && ev.newValue!=false) {
                  data={"event_type":'input',
                        "event_location":ev.name,
                        "event_prev":ev.oldValue,
                        "event_result":ev.newValue};
                  me.saveEvents(data);
              }
              //for drag and drop
               if (ev.type == Blockly.Events.BLOCK_DRAG) {
                     data={"event_type":(ev.isStart?'drag':'drop'),
                           "event_location":ev.name,
                           "event_prev":null,
                           "event_result":(ev.isStart?ev.blocks.toString():$('#blocklyDiv').data('obj').toXML())};
                     me.saveEvents(data);
               }
               //for trashcan open/close
               if (ev.type == Blockly.Events.TRASHCAN_OPEN) {
                  data={"event_type":'trashcan',
                        "event_location":null,
                        "event_prev":null,
                        "event_result":(ev.isOpen?'open':'close')};
                  me.saveEvents(data);
               }

               var blocksCount = (me.blocklyWorkspace.getAllBlocks().length);
               blocksCount = blocksCount < 0 ? '' : blocksCount;
               $(settings['blockCount'] ? settings['blockCount'] : '#blocksCount').html("" + blocksCount + "");
            })
         );
      }

      // fix a bug in blockly that causes highlight block not to work properly in RTL so we make it the same for LTR as well
      $('#'+me.blocklyElem).find('[id^=blocklyEmbossFilter]').empty().html(`
      <feComponentTransfer>
         <feFuncR type="linear" slope="0"/>
         <feFuncG type="linear" slope="0"/>
         <feFuncB type="linear" slope="0"/>
      </feComponentTransfer>
      `);

      // add a class to identify the filler so we can use css to hide it - hack to set the min width of the toolbox
      if ( me.blocklyWorkspace.flyout_ ) {
         let blocks = me.blocklyWorkspace.flyout_.getWorkspace().getAllBlocks();
         for (let i = 0; i < blocks.length; i++) {
            if ( blocks[i].type == 'robotarm_toolboxfiller') {
               $('g[data-id="'+blocks[i].id+'"]').addClass('g-blockly-filler');
            }
         }
      }

      //hide the context menu (this is a workaround to replace show function since blockly doesn't have an option to disable it)
      Blockly.ContextMenu.show = function () {};
   },

   resetWorkspace: function(resetToXml = null) {
      let me = this;
      me.workspaceResetCount++;
      me.blocklyWorkspace.clear();
      resetToXml = resetToXml != null ? resetToXml : me.workspaceData;
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(resetToXml), me.blocklyWorkspace);

      // for some reason the clear refresh straight away, need to cause a 1ms pause so we
      // can interact with the toolbox etc safely. Otherwise things like disbaling wont work
      return new Promise(resolve => setTimeout(resolve, 1));
   },

   initApi: function(interpreter, scope, target , quickRun=false) {
      let me = this;
      
      // Add an API function for highlighting blocks.
      interpreter.setProperty(scope, 'highlightBlock',
         interpreter.createNativeFunction(function (id) {
            return  me.highlightBlock(id);
         })
      );

      interpreter.setProperty(scope, 'moveArm',
         interpreter.createNativeFunction(function (dir) {
            let promise = target.performAction(dir,null,quickRun);
            // if execution error'd then top, could handle errors better
            if (promise == null) {me.stopExecution()}
            return promise;
         })
      );

      interpreter.setProperty(scope, 'pickupPlace',
         interpreter.createNativeFunction(function (pickup) {
            let promise = target.performAction((pickup ? target.ACTION_PICKUP : target.ACTION_PLACE),null,quickRun);
            // if execution error'd then top, could handle errors better
            if (promise == null) {me.stopExecution()}
            return promise;
         })
      );

      interpreter.setProperty(scope, 'isArmHolding',
         interpreter.createNativeFunction(function (obj) {
            return target.isArmHolding(obj);
         })
      );

      interpreter.setProperty(scope, 'movePod',
         interpreter.createNativeFunction(function () {
            let promise = target.performAction('move');
            // if execution error'd then top, could handle errors better
            if (promise == null) {me.stopExecution()}
            return promise;
         })
      );

      interpreter.setProperty(scope, 'turnPod',
         interpreter.createNativeFunction(function (dir) {
            let promise = target.performAction(dir);
            // if execution error'd then top, could handle errors better
            if (promise == null) {me.stopExecution()}
            return promise;
         })
      );

      interpreter.setProperty(scope, 'getSensorNext',
         interpreter.createNativeFunction(function (dir) {
            let promise = target.performAction('sensor',dir);
            // if execution error'd then top, could handle errors better
            if (promise == null) {me.stopExecution()}
            return promise;
         })
      );

      interpreter.setProperty(scope, 'increaseTimer',
         interpreter.createNativeFunction(function (dir) {
            target.updateWaitTime(false);
         })
      );

      interpreter.setProperty(scope, 'moveSpaceship',
         interpreter.createNativeFunction(function (para) {
            let promise = target.performAction('move',para);
            if (promise == null) {me.stopExecution()}
            return promise;
         })
      );

      interpreter.setProperty(scope, 'landParachute',
      interpreter.createNativeFunction(function (para) {
         let promise = target.performAction('parachute',para);
         if (promise == null) {me.stopExecution()}
         return promise;
      })
   );
      
      interpreter.setProperty(scope, 'setCourse',
         interpreter.createNativeFunction(function (obj) {
            target.performAction('course',obj);
            return;
         })
      );

      interpreter.setProperty(scope, 'checkSpaceship',
         interpreter.createNativeFunction(function () {
            let promise = target.performAction('check');
            if (promise == null) {me.stopExecution()}
            return promise;
         })
      );

      interpreter.setProperty(scope, 'setPower',
         interpreter.createNativeFunction(function (obj) {
            let promise = target.performAction('power',obj);
            if (promise == null) {me.stopExecution()}
            return promise;
         })
      );

   },

   highlightBlock: function(id) {
      this.blocklyWorkspace.highlightBlock(id)
   },

   isXmlEqual: function(xml, startBlock) {
      let xmlDom = startBlock != null ? Blockly.Xml.blockToDom(startBlock, true) :
         Blockly.Xml.workspaceToDom(this.blocklyWorkspace, true);
      
      let xmlText = Blockly.Xml.domToText(xmlDom); 

      // could add more smarts to strip new lines etc and remove attributes we dont need to compare
      return xml == xmlText;
   },
   
   /**
    * Return true for important changes, ignore dragging and clicking unless it is going to change the outcome
    */
   isImportantBlocklyEvent: function(e) {
      return e.type == 'change' || e.type == 'delete' || (e.recordUndo && (e.oldParentId || e.newParentId));
   },
   
   //get the end result of the world without stepping through for event data saving
   quickRunCode: function(target, onComplete, startBlock) {
      //currently only available for robot arm LC+BC
      if(!$('#task').hasClass('p1-m1') || !$('#task').hasClass('p1-help-stats')){
         return '';
      }
      
      let me = this,
          eventObj = null;

      if (startBlock != null) {
         Blockly.JavaScript.init(me.blocklyWorkspace);
         eventObj = {code: Blockly.JavaScript.blockToCode(me.blocklyWorkspace.getBlocksByType(startBlock)[0])};
      } else {
         eventObj = {code: Blockly.JavaScript.workspaceToCode(me.blocklyWorkspace)};
      }
      var jsInterpreter = new Interpreter(eventObj.code, function(interpreter, scope){me.initApi(interpreter, scope, target,true)});
      jsInterpreter.run();

      //save end position of the world as event data
      return target.printState();
   },

   runCode: function(target, onComplete, startBlock) {
      let OK_STOP = 'ok-stop',
      me = this,
      eventObj = null;
      
      me.executionFinished = false;
      window.LoopTrap = 1000;
      Blockly.JavaScript.STATEMENT_PREFIX = 'this.highlightBlock(%1);\n';
      Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
      Blockly.JavaScript.addReservedWords('code');

      //keep a count of runs
      let targetId = target.elem.attr('id');
     
      if ( targetId != null ) {
         if ( me.saveData['runCount'] == null ) {
            me.saveData['runCount'] = {};
         }
         if ( me.saveData['runCount'][targetId] == null ) {
            me.saveData['runCount'][targetId] = 0;
         }
         me.saveData['runCount'][targetId]++;
      }

      // get the code and emit an event to allow the code to be modified before being executed (pre + post code)
      // restrict to only block connected to the when run block

      if (startBlock != null) {
         Blockly.JavaScript.init(me.blocklyWorkspace);
         eventObj = {code: Blockly.JavaScript.blockToCode(me.blocklyWorkspace.getBlocksByType(startBlock)[0])};
      } else {
         eventObj = {code: Blockly.JavaScript.workspaceToCode(me.blocklyWorkspace)};
      }
      
      $(me.blocklyWorkspace).trigger( "beforeCodeExec", eventObj);

      var jsInterpreter = new Interpreter(eventObj.code, function(interpreter, scope){me.initApi(interpreter, scope, target)});
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

      function nextStep() {
         try {
            if (me.executionFinished) {
               //to do: a proper implementation to stop the execution of intepreter. 
               //to make this work you need to look into the acron_interpreter.js file and find the stepThrowStatement function 
               //and check the variable used 'N' or in later versions 'R' and replace the letter in the object below as well as the else statement
               jsInterpreter.stepThrowStatement(null, {N: true, done_: true, value: OK_STOP});
            } else if (jsInterpreter.step()) {
               // wait or the action to complete before continuing
               Promise.resolve(jsInterpreter.value).then(function() {
                  window.setTimeout(nextStep, me.gInterpreterSpeed)
               });
            } else {
               // check this as per the above comment
               jsInterpreter.stepThrowStatement(null, {N: true, done_: true, value: OK_STOP});
            }
         } catch (e) {
            if (e != OK_STOP) {
               alert(e);
            }
            me.executionFinished = true;
            onComplete();
         }

      }
      nextStep();
  },  

   stopExecution: function() {
      this.executionFinished = true;
   },

   resetCode: function(target = null) {
      let me = this;

      this.stopExecution();
      this.highlightBlock(null);

      if ( target != null ) {
         let targetId = $(target).attr('id');
         if ( targetId != null ) {
            if ( me.saveData['resetCount'] == null ) {
               me.saveData['resetCount'] = {};
            }
            if ( me.saveData['resetCount'][targetId] == null ) {
               me.saveData['resetCount'][targetId] = 0;
            }
            me.saveData['resetCount'][targetId]++;
         }
      }
   },

   getBlockLabel: function(lbl) {
      return $('#' + lbl).text();
   },

   toXML: function () {
      var xmlDom = Blockly.Xml.workspaceToDom(this.blocklyWorkspace, true);
      var xmlText = Blockly.Xml.domToText(xmlDom); //use Blockly.Xml.domToPrettyText(xmlDom) to pretify!
      return xmlText;
   },

   setSpeed: function(speed) {
      this.gInterpreterSpeed = speed;
   },

   defineCustomBlocks: function() {
      let me = this,
      stylingCls = $('.g-blockly'),
      color1 = stylingCls.css('--blockly-color1'),
      color2 = stylingCls.css('--blockly-color2'),
      color3 = stylingCls.css('--blockly-color3'),
      color4 = stylingCls.css('--blockly-color4');

      Blockly.defineBlocksWithJsonArray([{
         "type": "robotarm_blank",
         "message0": "_________",
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "robotarm_start",
         "message0":  me.getBlockLabel("ra-start-lbl"),
         "nextStatement": null,
         "colour": color4,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "robotarm_end",
         "message0":  me.getBlockLabel("ra-end-lbl"),
         "previousStatement": null,
         "colour": color4,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "robotarm_toolboxfiller",
         "message0": "________________",
         "previousStatement": null,
         "nextStatement": null,
         "colour": '0051ff',
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "robotarm_move_left",
         "message0": me.getBlockLabel("ra-move-left-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "robotarm_move_right",
         "message0": me.getBlockLabel("ra-move-right-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "robotarm_move_up",
         "message0": me.getBlockLabel("ra-move-up-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "robotarm_move_down",
         "message0": me.getBlockLabel("ra-move-down-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "robotarm_pickup",
         "message0": me.getBlockLabel("ra-pickup-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "robotarm_place",
         "message0": me.getBlockLabel("ra-place-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "robotarm_if_do_else",
         "message0": me.getBlockLabel("ra-if-claw-holding-lbl")+" %1 ",
         "args0": [{
            "type": "field_dropdown",
            "name": "SHAPE",
            "options": me.getDropdownOption('m1')
         }],
         "message1": me.getBlockLabel("ra-do-lbl") + " %1",
         "args1": [{
            "type": "input_statement",
            "name": "DO"
         }],
         "message2": me.getBlockLabel("ra-else-lbl") + " %1",
         "args2": [{
            "type": "input_statement",
            "name": "ELSE"
         }],
         "previousStatement": null,
         "nextStatement": null,
         "colour": color1,
      },{
         "type": "robotarm_exp_if_do_else",
         "message0": me.getBlockLabel("ra-if-claw-holding-lbl")+" %1 ",
         "args0": [{
            "type": "field_dropdown",
            "name": "SHAPE",
            "options": me.getDropdownOption('m123')
         }],
         "message1": me.getBlockLabel("ra-do-lbl") + " %1",
         "args1": [{
            "type": "input_statement",
            "name": "DO"
         }],
         "message2": me.getBlockLabel("ra-else-lbl") + " %1",
         "args2": [{
            "type": "input_statement",
            "name": "ELSE"
         }],
         "previousStatement": null,
         "nextStatement": null,
         "colour": color1,
      },{
         "type": "repeat_do",
         "message0": me.getBlockLabel("ra-repeat-lbl") + " %1 " + me.getBlockLabel("ra-times-lbl"),
         "args0": [{
               "type": "field_number",
               "name": "TIMES",
               "inline": "true",
               "min":"0", 
               "max":"99", 
               "precision":"1",
               "value": 0
         }],
         "message1": me.getBlockLabel("ra-do-lbl") + " %1",
         "args1": [{
            "type": "input_statement",
            "name": "DO"
         }],
         "previousStatement": null,
         "nextStatement": null,
         "colour": color3
      },{
         "type": "robotarm_none",
         "message0": "",
         "opacity":0,
         "previousStatement": null,
         "nextStatement": null,
         "colour":"white",
      },{
         "type": "transportpod_turn_left",
         "message0": me.getBlockLabel("tp-turn-left-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "transportpod_turn_right",
         "message0": me.getBlockLabel("tp-turn-right-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "transportpod_move_pod",
         "message0": me.getBlockLabel("tp-move-pod-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "repeat_until",
         "message0": me.getBlockLabel("ra-repeat-lbl")+"%1 %2",
         "args0": [
           {
             "type": "field_dropdown",
             "name": "MODE",
             "options": [
               [me.getBlockLabel("tp-until-lbl"), "UNTIL"]
             ],
           },
           {
            "type": "input_value",
            "name": "BOOL",
            "check": "Boolean"
          }
         ],
         "message1": me.getBlockLabel("tp-do-lbl")+" %1",
         "args1": [{
           "type": "input_statement",
           "name": "DO"
         }],
         "previousStatement": null,
         "nextStatement": null,
         "colour": color3,
       },{
         "type": "block_start",
         "message0":  me.getBlockLabel("start-lbl"),
         "nextStatement": null,
         "colour": color4,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "block_end",
         "message0":  me.getBlockLabel("end-lbl"),
         "previousStatement": null,
         "colour": color4,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "move_down",
         "message0": me.getBlockLabel("move-down-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "move_left",
         "message0": me.getBlockLabel("move-left-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "move_right",
         "message0": me.getBlockLabel("move-right-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "if_option_text_color",
         "message0": me.getBlockLabel("if-lbl") + " %1 "+me.getBlockLabel("text-lbl")+" %2 ",
         "previousStatement": null,
         "nextStatement": null,
         "args0": [{
            "type": "field_dropdown",
            "name": "OPTION",
            "options": [[me.getBlockLabel("option-lbl"), me.getBlockLabel("option-lbl")]]
         },{
            "type": "field_colour",
            "name": "COLOUR",
            "colour": me.getBlockLabel("colour-lbl")
         }],
         "message1": me.getBlockLabel("do-lbl") + " %1",
         "args1": [{
            "type": "input_statement",
            "name": "DO"
         }],
         "colour": color1,
         "tooltip": "",
         "helpUrl": "",
       },{
         "type": "tp_repeat_option",
         "message0": me.getBlockLabel("repeat-lbl")+" %1 %2 %3 "+me.getBlockLabel("tp-sensor-lbl")+" %4 %5 "+me.getBlockLabel("do-lbl")+" %6",
         "args0": [
           {
             "type": "field_dropdown",
             "name": "REPEAT",
             "options": [["", ""],[me.getBlockLabel("until-lbl"), 'UNTIL'],[me.getBlockLabel("while-lbl"), 'WHILE']]
           },
           {
             "type": "input_dummy"
           },
           {
             "type": "field_dropdown",
             "name": "SENSOR",
             "options": [["", ""],[me.getBlockLabel("left-lbl"), 'LEFT'],[me.getBlockLabel("middle-lbl"), 'MIDDLE'],[me.getBlockLabel("right-lbl"), 'RIGHT']]
           },
           {
             "type": "field_dropdown",
             "name": "SHAPE",
             "options": me.getDropdownOption('m3')
           },
           {
             "type": "input_dummy"
           },
           {
             "type": "input_statement",
             "name": "DO"
           }
         ],
         "previousStatement": null,
         "nextStatement": null,
         "colour": color3,
       },{
         "type": "tp_repeat_image",
         "message0": me.getBlockLabel("repeat-lbl") + " %1 ",
         "args0": [{
            "type": "field_dropdown",
            "name": "SHAPE",
            "options": me.getDropdownOption('m304')
         }],
         "message1": me.getBlockLabel("do-lbl") + " %1",
         "args1": [{
            "type": "input_statement",
            "name": "DO"
         }],
         "previousStatement": null,
         "nextStatement": null,
         "colour": color3
      },{
         "type": "repeat_plain",
         "message0": me.getBlockLabel("repeat-plain-lbl"),
         "message1": me.getBlockLabel("do-lbl") + " %1",
         "args1": [{
            "type": "input_statement",
            "name": "DO"
         }],
         "previousStatement": null,
         "nextStatement": null,
         "colour": color3
      },{
         "type": "tp_if_do",
         "message0": me.getBlockLabel("if-lbl")+" %1 "+me.getBlockLabel("tp-sensor-lbl")+" %2 %3 "+me.getBlockLabel("do-lbl")+" %4",
         "args0": [
           {
             "type": "field_dropdown",
             "name": "SENSOR",
             "options": [["", ""],[me.getBlockLabel("left-lbl"), 'LEFT'],[me.getBlockLabel("middle-lbl"), 'MIDDLE'],[me.getBlockLabel("right-lbl"), 'RIGHT']]
           },
           {
             "type": "field_dropdown",
             "name": "SHAPE",
             "options": me.getDropdownOption('m3')
           },
           {
             "type": "input_dummy"
           },
           {
             "type": "input_statement",
             "name": "DO"
           }
         ],
         "previousStatement": null,
         "nextStatement": null,
         "colour": color1,
       },{
         "type": "tp_if_do_one_option",
         "message0": me.getBlockLabel("if-lbl")+" %1 "+me.getBlockLabel("tp-sensor-lbl")+" %2 "+me.getBlockLabel("do-lbl")+" %3",
         "args0": [
           {
             "type": "field_dropdown",
             "name": "SENSOR",
             "options": [["", ""],[me.getBlockLabel("left-lbl"), 'LEFT'],[me.getBlockLabel("middle-lbl"), 'MIDDLE'],[me.getBlockLabel("right-lbl"), 'RIGHT']]
           },
           {
            "type": "input_dummy"
           },
           {
             "type": "input_statement",
             "name": "DO"
           }
         ],
         "previousStatement": null,
         "nextStatement": null,
         "colour": color1,
       },{
         "type": "tp_wait",
         "message0": me.getBlockLabel("wait-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
      },{
         "type": "tp_move_option",
         "message0": me.getBlockLabel("move-lbl") + " %1 ",
         "args0": [{
            "type": "field_dropdown",
            "name": "VALUE",
            "options": [['',''],
               [
                 "black",
                 "BLACK"
               ],
               [
                 "white",
                 "WHITE"
               ]
             ]
         }],
         "setEditable":true,
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2
      },{
         "type": "tp_turn_plain",
         "message0": me.getBlockLabel("turn-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
      },{
         "type": "safelanding_course",
         "message0": me.getBlockLabel("course-lbl") + " %1 ",
         "args0": [{
            "type": "field_dropdown",
            "name": "VALUE",
            "options": me.getDropdownOption('m5-course')
         }],
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2
      },{
         "type": "safelanding_power",
         "message0": me.getBlockLabel("power-lbl") + " %1 ",
         "args0": [{
            "type": "field_dropdown",
            "name": "VALUE",
            "options": me.getDropdownOption('m5-power')
         }],
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2
      },{
         "type": "safelanding_off",
         "message0": me.getBlockLabel("off-lbl") + " %1 ",
         "args0": [{
            "type": "field_dropdown",
            "name": "VALUE",
            "options": me.getDropdownOption('m5-off')
         }],
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2
      },{
         "type": "safelanding_descent",
         "message0": me.getBlockLabel("descent-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "safelanding_dock",
         "message0": me.getBlockLabel("dock-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       },{
         "type": "safelanding_parachute",
         "message0": me.getBlockLabel("parachute-lbl"),
         "previousStatement": null,
         "nextStatement": null,
         "colour": color2,
         "tooltip": "",
         "helpUrl": ""
       }]);
   
      Blockly.Blocks['when_run'] = {
         init: function () {
            this.jsonInit({
               "message0":  me.getBlockLabel("when-run-lbl"),
               "nextStatement": null,
               "colour": color4,
               "tooltip": "",
               "helpUrl": ""
            });
            this.setDeletable(false);
            this.setMovable(false);
         }
      };
      
      Blockly.JavaScript['when_run'] = function () {
         return '\n\n';
      };
      
      $.each([
         ['move_right', 'this.moveArm("right");'],
         ['move_left', 'this.moveArm("left");'],
         ['pickup', 'this.pickupPlace(true);'],
         ['place', 'this.pickupPlace(false);'],
         ['move_pod', 'this.movePod();'],
         ['turn_right', 'this.turnPod("right");'],
         ['turn_left', 'this.turnPod("left");'],
         ['descent', 'this.moveSpaceship("down");'],
         ['dock', 'this.moveSpaceship("up");'],
         ['parachute', 'this.landParachute(true);']
      ], function(idx, val) {
         Blockly.JavaScript['robotarm_'+val[0]] = function () {
            return val[1]+'\n\n';
         }
         Blockly.JavaScript['transportpod_'+val[0]] = function () {
            return val[1]+'\n\n';
         }
         Blockly.JavaScript['safelanding_'+val[0]] = function () {
            return val[1]+'\n\n';
         }
      });



      Blockly.JavaScript['repeat_do'] = function (block) {
          // Repeat n times.
          if (block.getField('TIMES')) {
            var repeats = String(Number(block.getFieldValue('TIMES')));
         } else {
            var repeats = Blockly.JavaScript.valueToCode(block, 'TIMES',
               Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
         }
         var branch = Blockly.JavaScript.statementToCode(block, 'DO');

         branch = Blockly.JavaScript.addLoopTrap(branch, block);
         var code = '';
         var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
            'count', Blockly.Variables.NAME_TYPE);
         var endVar = repeats;
         if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
            var endVar = Blockly.JavaScript.variableDB_.getDistinctName(
               'repeat_end', Blockly.Variables.NAME_TYPE);
            code += 'var ' + endVar + ' = ' + repeats + ';\n';
         }
         code += 'for (var ' + loopVar + ' = 0; ' +
            loopVar + ' < ' + endVar + '; ' +
            loopVar + '++) {\n' +
            branch + '}\n';

         return code;
      };

      Blockly.JavaScript['robotarm_if_do_else'] = function (block) {
         let shape = block.getFieldValue('SHAPE'),
         codeDo = Blockly.JavaScript.statementToCode(block, 'DO');
         codeElse = Blockly.JavaScript.statementToCode(block, 'ELSE');
         return 'if (this.isArmHolding("'+shape+'")) {\n'+codeDo+'} else{\n'+codeElse+'}\n';
      };

      Blockly.JavaScript['robotarm_exp_if_do_else'] = function (block) {
         let shape = block.getFieldValue('SHAPE'),
         codeDo = Blockly.JavaScript.statementToCode(block, 'DO');
         codeElse = Blockly.JavaScript.statementToCode(block, 'ELSE');
         return 'if (this.isArmHolding("'+shape+'")) {\n'+codeDo+'} else{\n'+codeElse+'}\n';
      };

      Blockly.JavaScript['tp_repeat_option'] = function(block) {
         var dropdown_repeat = block.getFieldValue('REPEAT');
         var dropdown_sensor = block.getFieldValue('SENSOR');
         var dropdown_shape = block.getFieldValue('SHAPE');
         var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
         statements_do = Blockly.JavaScript.addLoopTrap(statements_do, block);
         var code = '';

         //check if should use do while or while
         if(dropdown_repeat=='UNTIL'){
            code += "do{"+statements_do+"} while(this.getSensorNext('"+dropdown_sensor+"').substr(0,1) != '"+dropdown_shape+"');";
         }else{
            code += "while(this.getSensorNext('"+dropdown_sensor+"').substr(0,1) == '"+dropdown_shape+"'){"+statements_do+"};";
         }
         return code;
       };

       Blockly.JavaScript['tp_wait'] = function (block) {
         return "this.increaseTimer();";
       };

       Blockly.JavaScript['tp_if_do'] = function (block) {
         let dropdown_sensor = block.getFieldValue('SENSOR'),
             dropdown_shape = block.getFieldValue('SHAPE'),
         branchCode = Blockly.JavaScript.statementToCode(block, 'DO');
         return 'if (this.getSensorNext("'+dropdown_sensor+'")=="'+dropdown_shape+'") {\n'+branchCode+'}\n';
      };

      Blockly.JavaScript['safelanding_course'] = function (block) {
         let course = block.getFieldValue('VALUE');
         return 'this.setCourse("'+course+'");\n';
      };

      Blockly.JavaScript['safelanding_power'] = function (block) {
         let power = block.getFieldValue('VALUE');
         return 'this.setPower("'+power+'");\n this.moveSpaceship("course");\n this.checkSpaceship();\n';
      };

      Blockly.JavaScript['safelanding_off'] = function (block) {
         let target = block.getFieldValue('VALUE');
         return 'this.setPower("'+target+'");\n this.landParachute(false);';
      };

   },
   getDropdownOption:function(module){
      switch(module){
         case 'm1':
            opList=[[this.getBlockLabel("ra-square-lbl"), ""],
            [
               {
                  "src": Sonet.am.App.RESOURCE_URL+"objA.png",
                  "width": 20,
                  "height": 30,
                  "alt": ""
               },
               "A"
            ],[
               {
                  "src": Sonet.am.App.RESOURCE_URL+"objB.png",
                  "width": 20,
                  "height": 30,
                  "alt": ""
               },
               "B"
            ]
         ];
         break;

         case 'm123':
            opList=[[this.getBlockLabel("ra-square-lbl"), ""],
            [
               {
                  "src": Sonet.am.App.RESOURCE_URL+"objD.png",
                  "width": 20,
                  "height": 30,
                  "alt": ""
               },
               "D"
            ]
         ];
         break;

         case 'm3':
            opList= [['',''],[
                  {
                     "src": Sonet.am.App.RESOURCE_URL+"objL.png",
                     "width": 20,
                     "height": 20,
                     "alt": ""
                  },
                  "L"
               ],[
                  {
                     "src": Sonet.am.App.RESOURCE_URL+"objF.png",
                     "width": 20,
                     "height": 20,
                     "alt": ""
                  },
                  "F"
               ],[
                  {
                     "src": Sonet.am.App.RESOURCE_URL+"objS.png",
                     "width": 20,
                     "height": 20,
                     "alt": ""
                  },
                  "S"
               ],[
                  {
                     "src": Sonet.am.App.RESOURCE_URL+"objE.png",
                     "width": 20,
                     "height": 20,
                     "alt": ""
                  },
                  "E"
               ]];
            break;

         case 'm304':
            opList= [[
                  {
                     "src": Sonet.am.App.RESOURCE_URL+"m304-ints.png",
                     "width": 20,
                     "height": 20,
                     "alt": ""
                  },
                  "INTS"
               ],[
                  {
                     "src": Sonet.am.App.RESOURCE_URL+"m304-box.png",
                     "width": 20,
                     "height": 20,
                     "alt": ""
                  },
                  "BOX"
               ]];
            break;

         case 'm5-course':
            let currentTask=$('#task').attr('data-itemid');

            opList= [['',''],
                    [this.getBlockLabel("planet-a-lbl"), 'A'],
                    [this.getBlockLabel("planet-b-lbl"), 'B'],
                    [this.getBlockLabel("planet-c-lbl"), 'C'],
                    [this.getBlockLabel("planet-d-lbl"), 'D'],
                    [this.getBlockLabel("planet-e-lbl"), 'E'],
                    [this.getBlockLabel("planet-f-lbl"), 'F'],
                    [this.getBlockLabel("planet-g-lbl"), 'G']];

            if(currentTask=='P1M513' || currentTask=='P1M519')
               opList.push([this.getBlockLabel("station-lbl"),'S']);
            if(currentTask=='P1M515')
               opList.push([this.getBlockLabel("planet-x-lbl"),'X']);  
            
            break;  
         case 'm5-power':
            opList= [['',''],
                     ['1', '1'],
                     ['2', '2'],
                     ['3', '3'],
                     ['4', '4'],
                     ['5', '5'],
                     ['6', '6']];
            break;
         case 'm5-off':
            opList= [['',''],
                     [this.getBlockLabel("landing-lbl"), 'landing'],
                     [this.getBlockLabel("takeoff-lbl"), 'takeoff']];
            break;   
      }

      return opList;

   },

   saveResults: function () {
      let me = this,
      id = $('#'+this.blocklyElem).data('id');
      
      if ( id != null ) {
         let scormApi = Sonet.am.scorm.ScormWrapper,
         pos = scormApi.getInteractionPos(id);
         me.saveData['workspaceData'] = this.toXML();
         //console.log(this.toXML());
         // SB - need to fix the following lines because it will not work with auto save. It will interrupt the students work,
         $('.g-blockly-target').data("object").reset();
         me.saveData['workspaceResult'] = me.quickRunCode($('.g-blockly-target').data("object"),null,'when_run');

         scormApi.setValue('cmi.interactions.' + pos + '.id', id);
         scormApi.setValue('cmi.interactions.' + pos + '.type', 'other');
         scormApi.setValue('cmi.interactions.' + pos + '.learner_response', JSON.stringify(me.saveData));
      }
   },

   saveEvents: function (data) {
      Sonet.am.widgets.eventTracker.saveData({
         "ts":Sonet.Util.getTimeStamp(),
         'a':data['event_type'],
         'id':data['event_location'],
         'd':data['event_result']
      });
   }
});