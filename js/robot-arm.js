Sonet.am.scorm.PISA2025.RobotArm = {
   p1m120world:
      [["R", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["A", "E", "E", "E", "E"],
      ["A", "E", "E", "E", "E"],
      ["A", "E", "E", "E", "E"]],
   p1m120goal:
      [["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "A"],
      ["E", "E", "E", "E", "A"],
      ["E", "E", "E", "E", "A"]],
   p1m123world:
      [["E", "E", "R", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "B", "E", "E"],
      ["E", "E", "A", "E", "E"],
      ["E", "E", "A", "E", "E"],
      ["E", "E", "B", "E", "E"]],
   p1m123goal:
      [["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "B", "E", "A", "E"],
      ["E", "B", "E", "A", "E"]],
   p1m124world:
      [["R", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "A", "B", "A", "E"]],
   p1m124goal:
      [["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["A", "B", "A", "E", "E"]],

   init: function (parent) {
      let me = this;
      this.parent = parent;

      $('.g-grid-container-selectable').on('click', '.g-grid-block', function (e) {
         $(this).parent().find('.g-grid-block-sel').removeClass('g-grid-block-sel');
         $(this).addClass('g-grid-block-sel');
         $(this).parent().find('.g-grid-response').val($(this).index() + 1).trigger('change');
      });

      /*if ($('#task').hasClass('p1-check-correct')) {
         $('#task').on('checkFinish', function(e) {
            if ( !me.parent.isModalShowing('.g-success-dialog') && !me.parent.isModalShowing('.g-retry-dialog') ) {
               e.dialog[0] = 'g-retry-dialog';
            }
         });
      }*/
   },

   P1M105: function () {
      new Sonet.am.widgets.RoboArmBlocklyPlugin({
         workspaceSettings: {
            readOnly: true
         },
         workspaceData:
            `<xml xmlns="http://www.w3.org/1999/xhtml">
               <block type="robotarm_start" x="10" y="10">
                  <next><block type="robotarm_move_left">
                  <next><block type="robotarm_move_up">
                  <next><block type="robotarm_move_up">
                  <next><block type="repeat_do">
                     <field name="TIMES">3</field>
                     <statement name="DO">
                     <block type="robotarm_toolboxfiller"></block>
                     </statement>
                  <next><block type="robotarm_move_down">
                  <next><block type="robotarm_move_down">
                  <next><block type="robotarm_end">
               </block></next></block></next></block></next>
               </block></next></block></next></block></next>
               </block></next></block>
            </xml>`
      });

      new Sonet.am.widgets.RoboArmBlocklyPlugin({
         blocklyElem: 'blocklyDiv2',
         workspaceSettings: { readOnly: true },
         workspaceData:
            `<xml xmlns="http://www.w3.org/1999/xhtml">
               <block type="robotarm_toolboxfiller" x="0" y="0">
               </block>
            </xml>`
      });
   },

   P1M107: function () {
      new Sonet.am.widgets.RoboArmBlocklyPlugin({
         toolboxData: '',
         workspaceSettings: {
            readOnly: true
         },
         workspaceData:
            `<xml xmlns="http://www.w3.org/1999/xhtml">
               <block type="robotarm_start" x="10" y="10">
                  <next><block type="repeat_do">
                     <field name="TIMES">10</field>
                     <statement name="DO">
                        <block type="repeat_do">
                        <field name="TIMES">2</field>
                        <statement name="DO">
                           <block type="robotarm_move_up">
                           <next><block type="robotarm_move_left">
                           <next><block type="robotarm_move_down">
                           <next><block type="robotarm_move_right">
                           </block></next></block></next></block></next></block>
                        </statement></block>
                     </statement>
                  <next><block type="robotarm_end">
                  </block></next></block></next>
               </block>
               
               <block type="robotarm_start" x="310" y="10">
                  <next><block type="repeat_do" editable="false">
                     <field name="TIMES">2</field>
                     <statement name="DO">
                        <block type="repeat_do" editable="false">
                        <field name="TIMES">10</field>
                        <statement name="DO">
                           <block type="robotarm_move_up">
                           <next><block type="robotarm_move_left">
                           </block></next></block>
                        </statement><next>
                        <block type="repeat_do" editable="false">
                        <field name="TIMES">10</field>
                        <statement name="DO">
                           <block type="robotarm_move_down">
                           <next><block type="robotarm_move_right">
                           </block></next></block>
                        </statement></block>
                        </next></block>
                     </statement>
                  <next><block type="robotarm_end">
                  </block></next></block></next>
               </block>
               
               <block type="robotarm_start" x="610" y="10">
                  <next><block type="repeat_do" editable="false">
                  <field name="TIMES">10</field>
                  <statement name="DO">
                     <block type="robotarm_move_up">
                     <next><block type="robotarm_move_left">
                     <next><block type="robotarm_move_down">
                     <next><block type="robotarm_move_right">
                     </block></next></block></next></block></next></block>
                  </statement><next>
                  <block type="repeat_do" editable="false">
                  <field name="TIMES">10</field>
                  <statement name="DO">
                     <block type="robotarm_move_up">
                     <next><block type="robotarm_move_left">
                     <next><block type="robotarm_move_down">
                     <next><block type="robotarm_move_right">
                     </block></next></block></next></block></next></block>
                  </statement>
                  <next><block type="robotarm_end">
                  </block></next></block>
                  </next></block>
               </next></block>
               
               <block type="robotarm_start" x="910" y="10">
                  <next><block type="repeat_do" editable="false">
                     <field name="TIMES">10</field>
                     <statement name="DO">
                        <block type="repeat_do" editable="false">
                        <field name="TIMES">2</field>
                        <statement name="DO">
                           <block type="robotarm_move_up">
                           <next><block type="robotarm_move_left">
                           </block></next></block>
                        </statement><next>
                        <block type="repeat_do" editable="false">
                        <field name="TIMES">2</field>
                        <statement name="DO">
                           <block type="robotarm_move_down">
                           <next><block type="robotarm_move_right">
                           </block></next></block>
                        </statement></block>
                        </next></block>
                     </statement>
                  <next><block type="robotarm_end">
                  </block></next></block></next>
               </block>
            </xml>`
      });
   },


   P1M110: function () {
      let me = this, actionRequiredList = [];
      this.initBasicActionItems({
         worlds: [{
            start: ["#robo-world1",
               [["E", "R", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"]]],
            end: ["#robo-world2",
               [["R", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"]]]
         }],
      });

      let tutorialTarget = ["",
         "[object Object],E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E",
         "E,E,E,E,[object Object],E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,[object Object]",
         "E,E,E,E,[object Object],E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E"];

      let tutorialState = ["",
         [["R", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"]],
         [["R", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"]],
         [["E", "E", "E", "R", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "A", "E", "E"]],
         [["E", "E", "E", "E", "R"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "A"]],
         [["E", "E", "E", "R", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "E", "E", "E"],
         ["E", "E", "A", "E", "E"]],

      ]

      Sonet.Util.showModal('p1-m1-10-intro-dialog');

      let tutorialConfig = me.parent.setTutorialConfig(
         "tutorial-text",
         "tutorial-text-warning"
      );

      //init focus style
      me.updateFocus("left50");

      me.parent.renderTutorialWindow(
         "p1-m1-10-tutorial-window",
         tutorialConfig,
         actionRequiredList
      );

      //when tutorial forward button clicked
      $('.g-tutorial-window-next-button').on("click", function () {
         page = $('.g-tutorial-window-content').attr('data-current-page');

         //check current tutorial window
         switch (page) {
            case "1":
            case "1w":
               $('.g-blockly-target').data('object').setState(tutorialState[1]);
               me.switchTutorial("2");
               break;
            case "2":
               $('.g-blockly-target').data('object').setState(tutorialState[2]);
               $('.g-btn-blockly[data-action="left"]').click();
               me.switchTutorial("3");
               break;
            case "3":
               //show other two buttons
               $('.g-btn-holder').removeClass("g-hide");
               $('.g-blockly-target').data('object').setState(tutorialState[3]);
               $('.p1-m1-goal').data('object').setState(tutorialState[4]);
               //update claw and goal status
               me.switchTutorial("4");
               break;
            case "4":
               me.switchTutorial("5w");
               break;
            case "4w":
            case "5w":
               $('.g-blockly-target').data('object').setState(tutorialState[5]);
               me.switchTutorial("6w");
               //disable all button except left
               $('.g-btn-blockly').attr("disabled", true);
               $('.g-btn-blockly[data-action="left"]').attr("disabled", false);

               break;
            case "6w":
               $('.g-btn-blockly[data-action="left"]').click();
               break;
            case "7w":
               $('.g-btn-blockly[data-action="pickup"]').click();
               break;
            case "8w":
               $('.g-btn-blockly[data-action="right"]').click();
               $('.g-btn-blockly[data-action="right"]').click();
               break;
            case "9w":
               $('.g-btn-blockly[data-action="place"]').click();
               break;
         }
      });


      $('.g-btn-blockly').on("click", function () {

         action = $(this).attr('data-action');
         page = $('.g-tutorial-window-content').attr('data-current-page');

         //hide error container
         $('#robo-world1 .ra-error-container').addClass('g-hide');
         // prevent additional clicks until done
         $('.g-btn-blockly').attr("disabled", true).removeClass('g-blockly-correct');

         // run the action
         let p = $('.g-blockly-target').data('object').performAction($(this).data('action'));

         //if there is an error, check if it should trigger tutorial screen change
         if (p == null) {
            if (page == '2') {
               me.switchTutorial("3");
            } else if (page == '4') {
               me.switchTutorial("4w");
            }
         }

         $('.g-btn-blockly:not(.g-btn-blockly-run)').removeAttr("disabled");

         //check current tutorial window
         switch (page) {
            case "1":
            case "1w":
               if (action == 'right') {
                  //if move right button is clicked, render warning window
                  me.switchTutorial("1w");
                  //reset world status
               } else if (action == 'left') {
                  //check if matching success state
                  if ($('.g-blockly-target').data('object').state.toString() == tutorialTarget[1]) {
                     // move to next tutorial
                     me.switchTutorial("2");
                  }
               }
               break;
            case "4":
               //if claw and object moved to correct position, show finish screen
               if (action == 'place' && $('.g-blockly-target').data('object').state.toString() == tutorialTarget[3]) {
                  me.switchTutorial("finish");
               }
               break;
            case "6w":
               if (action == 'left') {
                  me.switchTutorial("7w");
                  $('.g-btn-blockly').attr("disabled", true);
                  $('.g-btn-blockly[data-action="pickup"]').attr("disabled", false);
               }
               break;
            case "7w":
               if (action == 'pickup') {
                  me.switchTutorial("8w");
                  $('.g-btn-blockly').attr("disabled", true);
                  $('.g-btn-blockly[data-action="right"]').attr("disabled", false);
               }
               break;
            case "8w":
               if (action == 'right') {
                  $('.g-btn-blockly').attr("disabled", true);
                  //check if matching success state
                  if ($('.g-blockly-target').data('object').state.toString() == tutorialTarget[3]) {
                     // move to next tutorial
                     me.switchTutorial("9w");
                     $('.g-btn-blockly[data-action="place"]').attr("disabled", false);
                  } else {
                     $('.g-btn-blockly[data-action="right"]').attr("disabled", false);
                  }
               }
               break;
            case "9w":
               if (action == 'place') {
                  me.switchTutorial("finish");
               }
               break;
         }

      });

   },

   P1M114: function () {
      let me = this;
      Sonet.Util.showModal('p1-m1-14-intro-dialog');

      config = {
         worlds: [{
            start: ["#robo-world1",
               [["R", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"]]],
            end: ["#robo-world2",
               [["E", "E", "E", "E", "R"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"]]]
         }],
         raConfig: {
            toolboxData: this.getToolbox('minimal', true),
            workspaceSettings: {
               trashcan: true,
               scrollbars: true
            }
         }
      };

      //init focus style
      me.updateFocus("right43");
      let tutorialConfig = me.parent.setTutorialConfig(
         "tutorial-text",
         "tutorial-text-warning"
      );

      me.parent.renderTutorialWindow(
         "p1-m1-14-tutorial-window",
         tutorialConfig,
         []
      );

      // important do not re-format or the compare will fail (use console.log and ra.toXML function to get the xml from blockly)
      config.answerXML = ["",
         `<block xmlns="https://developers.google.com/blockly/xml" type="when_run" deletable="false" movable="false"><next><block type="robotarm_move_right"><next><block type="robotarm_move_right"><next><block type="robotarm_move_right"><next><block type="robotarm_move_right"></block></next></block></next></block></next></block></next></block>`,
         `<block type="when_run" deletable="false" movable="false" x="20" y="20"></block>`,
         `<xml xmlns="https://developers.google.com/blockly/xml"><block type="when_run" deletable="false" movable="false" x="20" y="20"></block></xml>`,
         `<block xmlns="https://developers.google.com/blockly/xml" type="when_run" deletable="false" movable="false"><next><block type="repeat_do"><field name="TIMES">0</field></block></next></block>`,
         `<block xmlns="https://developers.google.com/blockly/xml" type="when_run" deletable="false" movable="false"><next><block type="repeat_do"><field name="TIMES">4</field></block></next></block>`,
         `<block xmlns="https://developers.google.com/blockly/xml" type="when_run" deletable="false" movable="false"><next><block type="repeat_do"><field name="TIMES">4</field><statement name="DO"><block type="robotarm_move_right"></block></statement></block></next></block>`];
      config.answer = ['robotarm_move_right', 'robotarm_move_right', 'robotarm_move_right', 'robotarm_move_right', '.g-btn-blockly-run', 'repeat_do', 'robotarm_move_right', ".g-btn-blockly-run"];

      me.initBasicActionItems(config);

      // once the student selects the right set of blocks enable the next bubble
      let sBlock = config.ra.blocklyWorkspace.getBlocksByType('when_run')[0];
      let progressIdx = 1;
      config.ra.blocklyWorkspace.addChangeListener(function (e) {
         if (config.ra.isImportantBlocklyEvent(e)) {
            // check the answer against the XML answers but for the second bubble, check the entire workspace rather than the start block
            // to detect that we removed the blocks into the trash
            if (config.checkAnsCb(progressIdx == 3 ? null : sBlock, progressIdx)) {
               progressIdx++;
               me.switchTutorial(progressIdx);
            }
         }
      });

      $(".g-btn-blockly-run").on('click', function () {
         if ((progressIdx == 2 || progressIdx == 7) && $(".blockly-run-btn").hasClass("g-hide")) {
            progressIdx++;
            me.switchTutorial(progressIdx);
            if (progressIdx == 8) {
               //update triangle position
               $(".g-tutorial-window-top-right-tri").css('--xpos', '295px');
            }
         }
      });

      //when tutorial forward button clicked
      $('.g-tutorial-window-next-button').on("click", function () {
         progressIdx++;
         me.switchTutorial(progressIdx);
         // //check current tutorial window
         switch (progressIdx) {
            case 2:
               console.log(config.ra.resetWorkspace())
               config.ra.resetWorkspace(me.convertAnswerToWorkspaceXml(config.answerXML[1]));
               break;
            case 3:
               $(".g-btn-blockly-run").click();
               break;
            case 4:
               config.ra.resetWorkspace(me.convertAnswerToWorkspaceXml(config.answerXML[2]));
               break;
            case 5:
               config.ra.resetWorkspace(me.convertAnswerToWorkspaceXml(config.answerXML[4]));
               break;
            case 6:
               config.ra.resetWorkspace(me.convertAnswerToWorkspaceXml(config.answerXML[5]));
               break;
            case 7:
               config.ra.resetWorkspace(me.convertAnswerToWorkspaceXml(config.answerXML[6]));
               break;
            case 8:
               //update triangle position
               $(".g-tutorial-window-top-right-tri").css('--xpos', '295px');
               break;
            case 9:
               me.switchTutorial(8);
               //update triangle position
               $(".g-tutorial-window-top-right-tri").css('--xpos', '295px');
               //check if help screen is opened
               if ($(".g-help-dialog").css('left') == '425px') {
                  $(".g-help-close").click();
                  me.switchTutorial('finish');
               } else {
                  $(".g-help-ico").click();
               }
               progressIdx = 8;
               break;
         }
      });

      //if user click example close button at last part of tutorial, will switch to finish screen
      $('.g-help-close').on('click', function () {
         if (progressIdx == 8) {
            me.switchTutorial('finish');
         }
      });

   },

   P1M120: function () {
      this.parent.confirmDialog = 'g-confirm-finish2';

      this.initBasicActionItems({
         worlds: [{
            start: ["#robo-world1",
               $.extend(true, [], this.p1m120world)
            ],
            end: ["#robo-world2",
               $.extend(true, [], this.p1m120goal)
            ]
         }],
         raConfig: {
            toolboxData: this.getToolbox([
               'robotarm_move_left',
               'robotarm_move_right',
               'robotarm_pickup',
               'robotarm_place',
               'repeat_do'
            ]),
            workspaceSettings: {
               trashcan: true,
               scrollbars: true,
            },
            workspaceData:
               `<xml xmlns="http://www.w3.org/1999/xhtml">
                  <block type="when_run" x="20" y="20" movable="false">
                     <next><block type="repeat_do">
                     <field name="TIMES" inline="true">2</field>
                     <statement name="DO">
                        <block type="robotarm_pickup">
                        <next><block type="robotarm_move_right">
                        <next><block type="robotarm_place">
                        <next><block type="robotarm_move_left">
                        </block></next></block></next></block>
                        </next></block>
                     </statement></block>
                  </next></block>
               </xml>`
         }
      });

   },
   P1M120_P1H2: function () {

      this.initBasicActionItems({
         worlds: [{
            start: ["#robo-world1-h1",
               [["E", "E", "E", "R", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "D"],
               ["E", "E", "E", "E", "D"]]],
            end: ["#robo-world2-h1",
               [["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "D", "E", "E", "E"],
               ["E", "D", "E", "E", "E"]]],
         }],
         raConfig: {
            blocklyElem: 'blocklyDivH1',
            workspaceSettings: {
               readOnly: true
            },
            workspaceData:
               `<xml xmlns="http://www.w3.org/1999/xhtml">
                     <block type="when_run" deletable="false" movable="false" x="20" y="20"><next><block type="robotarm_move_right"><next>
                     <block type="repeat_do"><field name="TIMES">2</field><statement name="DO"><block type="robotarm_pickup"><next>
                     <block type="repeat_do"><field name="TIMES">3</field><statement name="DO"><block type="robotarm_move_left"></block></statement><next>
                     <block type="robotarm_place"><next><block type="repeat_do"><field name="TIMES">3</field><statement name="DO">
                     <block type="robotarm_move_right"></block></statement></block></next></block></next></block></next></block></statement></block>
                     </next></block></next></block>
                  </xml>`
         }
      });

   },
   P1M120_P1H3: function () {

      this.initBasicActionItems({
         worlds: [{
            start: ["#robo-world1-h120",
               $.extend(true, [], this.p1m120world)
            ],
            end: ["#robo-world2-h120",
               $.extend(true, [], this.p1m120goal)
            ]
         }],
         raConfig: {
            blocklyElem: 'blocklyDivH120',
            workspaceSettings: {
               readOnly: true
            },
            workspaceData:
               `<xml xmlns="http://www.w3.org/1999/xhtml">
                  <block type="when_run" deletable="false" movable="false" x="20" y="20"><next>
                  <block type="repeat_do"><field name="TIMES">3</field><statement name="DO"><block type="robotarm_pickup"><next>
                  <block type="repeat_do"><field name="TIMES">4</field><statement name="DO"><block type="robotarm_move_right"></block></statement><next>
                  <block type="robotarm_place"><next><block type="repeat_do"><field name="TIMES">4</field><statement name="DO">
                  <block type="robotarm_move_left"></block></statement></block></next></block></next></block></next></block></statement></block>
                  </next></block>
               </xml>`
         }
      });

      this.getStudentSolution();
   },

   P1M123: function () {
      this.parent.confirmDialog = 'g-confirm-finish2';

      this.initBasicActionItems({
         worlds: [{
            start: ["#robo-world1",
               $.extend(true, [], this.p1m123world)
            ],
            end: ["#robo-world2",
               $.extend(true, [], this.p1m123goal)
            ]
         }],
         raConfig: {
            toolboxData: this.getToolbox('all'),
            workspaceSettings: {
               trashcan: true,
               scrollbars: true
            }
         }
      });
   },
   P1M123_P1H2: function () {

      this.initBasicActionItems({
         worlds: [{
            start: ["#robo-world1-h3",
               [["R", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["D", "E", "E", "E", "E"],
               ["C", "E", "E", "E", "E"],
               ["D", "E", "E", "E", "E"]]],
            end: ["#robo-world2-h3",
               [["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "D"],
               ["E", "E", "E", "C", "D"]]],
         }],
         raConfig: {
            blocklyElem: 'blocklyDivH3',
            workspaceSettings: {
               readOnly: true
            },
            workspaceData:
               `<xml xmlns="https://developers.google.com/blockly/xml">
                  <block type="when_run" deletable="false" movable="false" x="20" y="20"><next><block type="repeat_do"><field name="TIMES">3</field>
                  <statement name="DO"><block type="robotarm_pickup"><next><block type="repeat_do"><field name="TIMES">3</field><statement name="DO">
                  <block type="robotarm_move_right"></block></statement><next><block type="robotarm_exp_if_do_else"><field name="SHAPE">D</field><statement name="DO">
                  <block type="robotarm_move_right"><next><block type="robotarm_place"><next><block type="robotarm_move_left"></block></next></block></next>
                  </block></statement><statement name="ELSE"><block type="robotarm_place"></block></statement><next><block type="repeat_do"><field name="TIMES">3</field>
                  <statement name="DO"><block type="robotarm_move_left"></block></statement></block></next></block></next></block></next>
                  </block></statement></block></next></block>
               </xml>`
         }
      });

      this.initBasicActionItems({
         raConfig: {
            blocklyElem: 'blocklyDivH6',
            workspaceSettings: {
               readOnly: true
            },
            workspaceData:
               `<xml xmlns="https://developers.google.com/blockly/xml">
                  <block type="when_run" deletable="false" movable="false" x="20" y="20"><next><block type="robotarm_pickup"><next>
                  <block type="repeat_do"><field name="TIMES">4</field><statement name="DO"><block type="robotarm_move_right"></block></statement><next>
                  <block type="robotarm_place"><next><block type="repeat_do"><field name="TIMES">4</field><statement name="DO">
                  <block type="robotarm_move_left"></block></statement><next><block type="robotarm_pickup"><next><block type="repeat_do"><field name="TIMES">3</field>
                  <statement name="DO"><block type="robotarm_move_right"></block></statement><next><block type="robotarm_place"><next>
                  <block type="repeat_do"><field name="TIMES">3</field><statement name="DO"><block type="robotarm_move_left"></block></statement><next>
                  <block type="robotarm_pickup"><next><block type="repeat_do"><field name="TIMES">4</field><statement name="DO">
                  <block type="robotarm_move_right"></block></statement><next><block type="robotarm_place"></block></next></block></next></block></next></block></next>
                  </block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
               </xml>`
         }
      });
      //update workspace scale
      $('#blocklyDivH6 .blocklyWorkspace').css('transform', 'scale(0.8)');
      $('#blocklyDivH3 .blocklyWorkspace').css('transform', 'scale(0.8)');
      $('#blocklyDivH6').css('height', '425px');

   },
   P1M123_P1H3: function () {

      this.initBasicActionItems({
         worlds: [{
            start: ["#robo-world1-h123",
               $.extend(true, [], this.p1m123world)
            ],
            end: ["#robo-world2-h123",
               $.extend(true, [], this.p1m123goal)
            ]
         }],
         raConfig: {
            blocklyElem: 'blocklyDivH123',
            workspaceSettings: {
               readOnly: true
            },
            workspaceData:
               `<xml xmlns="https://developers.google.com/blockly/xml">
                  <block type="when_run" deletable="false" movable="false" x="20" y="20"><next>
                  <block type="repeat_do"><field name="TIMES">4</field><statement name="DO"><block type="robotarm_pickup"><next>
                  <block type="robotarm_if_do_else"><field name="SHAPE">A</field><statement name="DO"><block type="robotarm_move_right"><next>
                  <block type="robotarm_place"><next><block type="robotarm_move_left"></block></next></block></next></block></statement>
                  <statement name="ELSE"><block type="robotarm_move_left"><next><block type="robotarm_place"><next>
                  <block type="robotarm_move_right"></block></next></block></next></block></statement></block></next></block></statement>
                  </block></next></block>
               </xml>`
         }
      });

      this.getStudentSolution();

   },

   P1M124: function () {
      this.parent.confirmDialog = 'g-confirm-finish2';

      this.initBasicActionItems({
         worlds: [{
            start: ["#robo-world1",
               $.extend(true, [], this.p1m124world)
            ],
            end: ["#robo-world2",
               $.extend(true, [], this.p1m124goal)
            ]
         }],
         raConfig: {
            toolboxData: this.getToolbox('all'),
            workspaceSettings: {
               trashcan: true,
               scrollbars: true
            },
            workspaceData:
               `<xml xmlns="http://www.w3.org/1999/xhtml">
               <block type="when_run" deletable="false" movable="false" x="20" y="20"><next>
                     <block type="robotarm_move_right"><next><block type="repeat_do">
                        <field name="TIMES">3</field>
                        <statement name="DO">
                           <block type="robotarm_pickup"><next>
                           <block type="robotarm_move_left"><next>
                           <block type="robotarm_place"><next>
                           <block type="robotarm_move_right"><next>
                           <block type="robotarm_move_right">
                           </block></next></block></next></block></next></block></next></block>
                        </statement></block></next>
                     </block></next>
               </block></xml>`
         }
      });

   },
   P1M124_P1H2: function () {

      this.initBasicActionItems({
         worlds: [{
            start: ["#robo-world1-h4",
               [["E", "E", "E", "R", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "D", "E", "E", "E"],
               ["E", "C", "E", "E", "E"]]],
            end: ["#robo-world2-h4",
               [["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "E", "E", "E"],
               ["E", "E", "C", "E", "E"],
               ["E", "E", "D", "E", "E"]]],
         }],
         raConfig: {
            blocklyElem: 'blocklyDivH4',
            workspaceSettings: {
               readOnly: true
            },
            workspaceData:
               `<xml xmlns="https://developers.google.com/blockly/xml"><block type="when_run" deletable="false" movable="false" x="20" y="20"><next>
                     <block type="robotarm_move_left"><next><block type="robotarm_move_left"><next><block type="repeat_do"><field name="TIMES">2</field>
                     <statement name="DO"><block type="robotarm_pickup"><next><block type="robotarm_move_right"><next><block type="robotarm_place"><next>
                     <block type="robotarm_move_left"></block></next></block></next></block></next></block></statement></block></next></block></next>
                     </block></next></block>
                  </xml>`
         }
      });

      this.initBasicActionItems({
         raConfig: {
            blocklyElem: 'blocklyDivH5',
            workspaceSettings: {
               readOnly: true
            },
            workspaceData:
               `<xml xmlns="https://developers.google.com/blockly/xml"><block type="when_run" deletable="false" movable="false" x="20" y="20"><next>
                  <block type="robotarm_move_left"><next><block type="repeat_do"><field name="TIMES">2</field><statement name="DO">
                  <block type="robotarm_move_left"><next><block type="robotarm_pickup"><next><block type="robotarm_move_right"><next>
                  <block type="robotarm_place"></block></next></block></next></block></next></block></statement></block></next></block></next></block>
               </xml>`
         }
      });

   },
   P1M124_P1H3: function () {

      this.initBasicActionItems({
         worlds: [{
            start: ["#robo-world1-h124",
               $.extend(true, [], this.p1m124world)
            ],
            end: ["#robo-world2-h124",
               $.extend(true, [], this.p1m124goal)
            ]
         }],
         raConfig: {
            blocklyElem: 'blocklyDivH124',
            workspaceSettings: {
               readOnly: true
            },
            workspaceData:
               `<xml xmlns="https://developers.google.com/blockly/xml">
                  <block type="when_run" deletable="false" movable="false" x="20" y="20"><next>
                  <block type="repeat_do"><field name="TIMES">3</field>
                  <statement name="DO"><block type="robotarm_move_right"><next>
                  <block type="robotarm_pickup"><next><block type="robotarm_move_left"><next>
                  <block type="robotarm_place"><next><block type="robotarm_move_right">
                  </block></next></block></next></block></next></block></next></block></statement>
                  </block></next></block>
               </xml>`
         }
      });

      this.getStudentSolution();
   },

   P1M127: function () {
      this.initBasicActionItems({
         worlds: this.getLargeTaskConfig2(),
      });
   },

   P1M128: function () {
      this.parent.confirmDialog = 'g-confirm-finish2';
      this.initBasicActionItems({
         worlds: this.getLargeTaskConfig2(),
         raConfig: {
            toolboxData: this.getToolbox('all'),
            workspaceSettings: {
               trashcan: true,
               scrollbars: true
            }
         }
      });

      //replace help screen 1 content
      $('.lc-help').addClass('g-hide');
      $('.bc-help').removeClass('g-hide');

   },
   P1M128_P1H: function () {
      new Sonet.am.widgets.RoboArmBlocklyPlugin({
         blocklyElem: 'blocklyDivH2',
         workspaceSettings: {
            readOnly: true
         },
         workspaceData:
            `<xml xmlns="https://developers.google.com/blockly/xml">
               <block type="when_run" deletable="false" movable="false" x="20" y="20"><next><block type="repeat_do"><field name="TIMES">0</field>
               <statement name="DO"><block type="robotarm_none"><next><block type="repeat_do"><field name="TIMES">0</field><statement name="DO">
               <block type="robotarm_none"><next><block type="robotarm_if_do_else"><field name="SHAPE"></field></block></next></block>
               </statement></block></next></block></statement></block></next></block>
            </xml>`
      });
      $('#blocklyDivH2 .blocklyPathDark').css("fill", "#ffffff");

   },

   P1M133: function () {
      new Sonet.am.widgets.RoboArmBlocklyPlugin({
         workspaceSettings: {
            readOnly: true
         },
         workspaceData:
            `<xml xmlns="http://www.w3.org/1999/xhtml">
               <block type="robotarm_start" x="10" y="10">
                  <next><block type="robotarm_move_right">
                  <next><block type="repeat_do">
                     <field name="TIMES">4</field>
                     <statement name="DO">
                        <block type="robotarm_if_do_else">
                           <statement name="DO"><block type="robotarm_move_down"></block></statement>
                           <statement name="ELSE"><block type="robotarm_move_right"></block></statement>
                        </block>
                     </statement>
               <next><block type="robotarm_end">
               </block></next></block></next></block></next>
               </block>
            </xml>`
      });
   },

   P1M135: function () {
      let ra = new Sonet.am.widgets.RoboArmBlocklyPlugin({
         workspaceSettings: {
         },
         workspaceData:
            `<xml xmlns="http://www.w3.org/1999/xhtml">
               <block type="robotarm_start" x="10" y="10" movable="false">
               <next><block type="repeat_do" movable="false">
                  <field name="TIMES"></field>
                  <statement name="DO">
                     <block type="repeat_do" movable="false">
                        <field name="TIMES"></field>
                        <statement name="DO">
                           <block type="robotarm_move_right" movable="false"></block>
                        </statement>
                     <next><block type="robotarm_move_up" movable="false">
                     </block></next></block>
                  </statement>
               <next><block type="robotarm_end" movable="false">
               </block></next></block></next></block>
            </xml>`
      });

      // set the input fields to hidden html inputs for capturing the response.
      $.each(ra.blocklyWorkspace.getBlocksByType('repeat_do'), function (idx, block) {
         block.setOnChange(function (ev) {
            let newVal = Number(block.getFieldValue('TIMES')),
               oldVal = $('#P1M135' + (idx == 0 ? 'A' : 'B')).val();
            // helps deal with no response (good enough)
            if (newVal != 0 || oldVal != "") {
               $('#P1M135' + (idx == 0 ? 'A' : 'B')).val(newVal);
            }
         });
      });
   },

   P1M137: function () {

      $.each(this.getLargeTaskConfig(), function () {
         $(this.start[0]).data("object", new Sonet.am.widgets.RoboArmWorld($(this.start[0]), { state: this.start[1] }));
         $(this.end[0]).data("object", new Sonet.am.widgets.RoboArmWorld($(this.end[0]), { state: this.end[1] }));
      })

      new Sonet.am.widgets.RoboArmBlocklyPlugin({
         workspaceSettings: {
            readOnly: true
         },
         workspaceData:
            `<xml xmlns="https://developers.google.com/blockly/xml">
               <block type="when_run" deletable="false" movable="false" x="20" y="20"><next>
               <block type="repeat_do"><field name="TIMES">2</field><statement name="DO"><block type="robotarm_move_left"><next>
               <block type="repeat_do"><field name="TIMES">6</field><statement name="DO"><block type="robotarm_pickup"><next>
               <block type="robotarm_move_right"><next><block type="robotarm_if_do_else"><field name="SHAPE">B</field>
               <statement name="DO"><block type="robotarm_place"><next><block type="robotarm_move_left"></block></next></block></statement>
               <statement name="ELSE"><block type="robotarm_move_right"><next><block type="robotarm_move_right"><next>
               <block type="robotarm_place"><next><block type="repeat_do"><field name="TIMES">3</field><statement name="DO">
               <block type="robotarm_move_left"></block></statement></block></next></block></next></block></next></block></statement></block></next></block></next></block>
               </statement></block></next></block></statement></block></next></block>
            </xml>`
      });

      new Sonet.am.widgets.RoboArmBlocklyPlugin({
         blocklyElem: 'blocklyDiv2',
         workspaceSettings: { readOnly: true },
         workspaceData:
            `<xml xmlns="https://developers.google.com/blockly/xml">
               <block type="when_run" deletable="false" movable="false" x="20" y="20"><next>
               <block type="repeat_do"><field name="TIMES">2</field></block></next></block>
            </xml>`
      });
      new Sonet.am.widgets.RoboArmBlocklyPlugin({
         blocklyElem: 'blocklyDiv3',
         workspaceSettings: { readOnly: true },
         workspaceData:
            `<xml xmlns="https://developers.google.com/blockly/xml"><block type="when_run" deletable="false" movable="false" x="20" y="20"><next>
               <block type="robotarm_if_do_else"><field name="SHAPE">B</field><statement name="DO"><block type="robotarm_place"><next>
               <block type="robotarm_move_left"></block></next></block></statement><statement name="ELSE"><block type="robotarm_move_right"><next>
               <block type="robotarm_move_right"><next><block type="robotarm_place"><next><block type="repeat_do"><field name="TIMES">3</field>
               <statement name="DO"><block type="robotarm_move_left"></block></statement></block></next></block></next></block></next></block>
               </statement></block></next></block>
            </xml>`
      });
      new Sonet.am.widgets.RoboArmBlocklyPlugin({
         blocklyElem: 'blocklyDiv4',
         workspaceSettings: { readOnly: true },
         workspaceData:
            `<xml xmlns="https://developers.google.com/blockly/xml">
                  <block type="repeat_do"><field name="TIMES">6</field></block>
            </xml>`
      });
      new Sonet.am.widgets.RoboArmBlocklyPlugin({
         blocklyElem: 'blocklyDiv5',
         workspaceSettings: { readOnly: true },
         workspaceData:
            `<xml xmlns="https://developers.google.com/blockly/xml">
               <block type="repeat_do"><field name="TIMES">3</field><statement name="DO">
               <block type="robotarm_move_left"></block></statement></block>
            </xml>`
      });

   },

   getLargeTaskConfig: function () {
      return [{
         start: ["#robo-world1",
            [["E", "E", "R", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["A", "A", "E", "E", "E"],
            ["A", "B", "E", "E", "E"],
            ["B", "A", "E", "E", "E"],
            ["A", "B", "E", "E", "E"],
            ["B", "B", "E", "E", "E"],
            ["B", "A", "E", "E", "E"]]],
         end: ["#robo-world6",
            [["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "B", "B", "A", "A"],
            ["E", "B", "B", "A", "A"],
            ["E", "B", "B", "A", "A"]]]
      }];
   },

   getLargeTaskConfig2: function () {
      return [{
         start: ["#robo-world1",
            [["E", "E", "R", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["A", "A", "E", "E", "E"],
            ["A", "B", "E", "E", "E"],
            ["B", "A", "E", "E", "E"],
            ["A", "B", "E", "E", "E"],
            ["B", "B", "E", "E", "E"],
            ["B", "A", "E", "E", "E"]]],
         end: ["#robo-world2",
            [["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E"],
            ["E", "B", "B", "A", "A"],
            ["E", "B", "B", "A", "A"],
            ["E", "B", "B", "A", "A"]]]
      }];
   },

   getToolbox: function (types, filler = false) {
      let content = [];

      if (types == 'minimal' || types == 'all') {
         content.push('robotarm_move_left', 'robotarm_move_right', 'robotarm_pickup', 'robotarm_place', 'repeat_do');

         if (types == 'all') {
            content.push('robotarm_if_do_else');
         }
      } else {
         content = types;
      }
      if (filler) {
         content.push({
            'kind': 'block',
            'type': 'robotarm_toolboxfiller',
            'disabled': 'true'
         });
      }

      for (let i = 0; i < content.length; i++) {
         if (typeof content[i] !== 'object') {
            content[i] = {
               "kind": "block",
               "type": content[i]
            }
         }
      }

      return {
         "kind": "flyoutToolbox",
         "contents": content
      };
   },

   initBasicActionItems: function (config) {
      let maxAttempts = parseInt($('#task').data('max-attempts')),
         maxActions = parseInt($('#task').data('max-actions')),
         answerStep = -1,
         me = this,
         ra = null;

      // setup the worlds
      $.each(config.worlds, function () {
         $(this.start[0]).data("object", new Sonet.am.widgets.RoboArmWorld($(this.start[0]), { state: this.start[1] }));
         if (this.end) {
            $(this.end[0]).data("object", new Sonet.am.widgets.RoboArmWorld($(this.end[0]), { state: this.end[1] }));
         }
         if (this.start2) {
            $(this.start2[0]).data("object", new Sonet.am.widgets.RoboArmWorld($(this.start2[0]), { state: this.start2[1] }));
            $(this.end2[0]).data("object", new Sonet.am.widgets.RoboArmWorld($(this.end2[0]), { state: this.end2[1] }));
         }
      })

      if (config.raConfig != null) {

         ra = new Sonet.am.widgets.RoboArmBlocklyPlugin(config.raConfig);

         //check if is for help screen
         var blocklyID = config.raConfig.blocklyElem;

         if (blocklyID !== undefined && blocklyID.substr(0, 11) == 'blocklyDivH') {
            var currentTask = blocklyID.split("H")[1];

            $(".g-btn-blockly-run-h" + currentTask).on('click', function () {
               var target = $('.g-blockly-target-h' + currentTask);
               me.parent.runBlocklyProgram('.g-btn-blockly-run-h' + currentTask, ra, target, answerStep);
            });

         } else {
            $(".g-btn-blockly-run").on('click', function () {
               var target = $('.g-blockly-target');
               me.parent.runBlocklyProgram('.g-btn-blockly-main', ra, target, answerStep);
            });
         }

         $(".g-btn-blockly-undo").on('click', function () {
            data = {
               "event_type": 'undo',
               "event_location": null,
               "event_prev": null,
               "event_result": null
            };
            me.parent.saveEvents(data);
            ra.blocklyWorkspace.undo(false);
         });
         $(".g-btn-blockly-redo").on('click', function () {
            data = {
               "event_type": 'redo',
               "event_location": null,
               "event_prev": null,
               "event_result": null
            };
            me.parent.saveEvents(data);
            ra.blocklyWorkspace.undo(true);
         });
         //update trashcan cursor
         $('.blocklyTrash').css('cursor', 'pointer');

         config.ra = ra;

         // allow speed changes
         $(".g-blockly-speed").change(function () {
            let speed = this.value * -1 + 1;
            ra.setSpeed(speed / 5);
            $('.p1-m1-world').each(function () {
               if ($(this).data('object')) {
                  $(this).data('object').setSpeed(speed * 10);
               }
            });
            data = {
               "event_type": 'speed',
               "event_location": null,
               "event_prev": this.defaultValue,
               "event_result": this.value
            };
            me.parent.saveEvents(data);
         });
      }

      // if we have an answer use the last answer as the end state if we want to show the answer to the student
      if (config['answerXML'] != null && config['endWorkspace'] == null) {
         config.endWorkspace = me.convertAnswerToWorkspaceXml(config.answerXML[config.answerXML.length - 1]);
      }

      // set a default callback to check the answer if we have set answers
      if (config['answerXML'] != null && config['checkAnsCb'] == null) {
         // compare the current xml with the answer we are up-to, support multi-step answers
         config.checkAnsCb = function (sBlock, step = null) {
            return config.ra.isXmlEqual(config.answerXML[step != null ? step : config.answerXML.length - 1], sBlock);
         };
      }

      // force the student through the right answers
      let nextAnswerStep = function () {
         answerStep++;
         $(config.answer[answerStep]).removeAttr("disabled").addClass('g-blockly-correct');
      };

      /*if ($('#task').hasClass('p1-check-blockly')) {
         $('#task').on('checkFinish', function(e) {
            let sBlock = ra.blocklyWorkspace.getBlocksByType('when_run')[0];
            if ( !me.parent.isModalShowing('.g-success-dialog') && !me.parent.isModalShowing('.g-retry-dialog') ) {
               e.dialog[0] = config.checkAnsCb(sBlock) ? 'g-success-dialog' : 'g-retry-dialog';
            }
         });
      }*/

      if ($('#task').hasClass('p1-check-efficiency')) {
         $('#task').on('checkFinish', function (e) {
            if (parseInt($('#blocksCount').html()) > parseInt($('#task').data('blocks')) && !me.parent.isModalShowing('.g-efficiency-dialog')) {
               e.dialog[0] = 'g-efficiency-dialog';
            }
         });
      }


      $('.g-btn-retry').on("click", async function () {
         // reset state and number of actions
         $('.g-blockly-target').data('object').reset();
         maxActions = parseInt($('#task').data('max-actions'));

         // bit rough, we load it here because until loadResults is called the data doesnt exist
         let retries = parseInt($('#task').data('retries'));
         $('#task').data('retries', ++retries);

         Sonet.Util.hideModal('g-retry-dialog');

         // if the student has run out of tries , show them the answer
         if (retries >= maxAttempts) {
            if (ra != null) {
               //ra.resetWorkspace(config.endWorkspace);

               // critical to wait otherwise the actions on the block (setEnabled etc) wont work
               /*await ra.resetWorkspace()
               let blocks = ra.blocklyWorkspace.flyout_.getWorkspace().getAllBlocks();
               for (let i = 0; i < blocks.length; i++) {
                  blocks[i].setEnabled(false);
               }*/
            } else {
               $('.g-btn-blockly').attr("disabled", true);
            }
            nextAnswerStep();
         }
      });

   },

   convertAnswerToWorkspaceXml: function (answerXml) {
      return '<xml xmlns="http://www.w3.org/1999/xhtml">' + answerXml.replace('xmlns="https://developers.google.com/blockly/xml"', 'x="20" y="20"') + '</xml>';
   },

   saveResults: function () {
      $('.g-blockly').each(function () {
         if ($(this).data('obj')) {
            $(this).data('obj').saveResults();
         }
      });
   },

   loadResults: function () {
      let me = this,
         scormApi = Sonet.am.scorm.ScormWrapper;

      // set the selected state from the save data. We dont need to set the input value as this will be handled
      // by the likert class. However we dont know the execution order so we retrieve the value from the API not the input field
      $('.g-grid-container-selectable').each(function () {
         let input = $(this).find('.g-grid-response');
         if (input.attr('id') != null) {
            let val = scormApi.getInteraction(input.attr('id'), true);
            $(this).find('.g-grid-block:nth-child(' + (Number.isInteger(val) ? val : -1) + ')').addClass('g-grid-block-sel');
         }
      });
   },

   switchTutorial: function (target) {
      me = this;
      //save event data
      data = {
         "event_type": 'tutorial',
         "event_location": null,
         "event_prev": null,
         "event_result": target
      };
      me.parent.saveEvents(data);

      let currentWindow = $('.g-tutorial-text div[data-target=' + target + ']');

      //switch text content
      $('.g-tutorial-window-card-text span').html(currentWindow.html());
      //update window data target
      $('.g-tutorial-window-content').attr('data-current-page', target);
      //update window position
      $('.g-tutorial-window').css({ 'top': currentWindow.attr("data-position-top") + 'px', '--xpos': currentWindow.attr("data-position-xpos") + 'px' });
      //update triangle position
      $('[class$="-tri-group"]').addClass("g-hide");
      $('.g-tutorial-window-' + currentWindow.attr("data-triangle-position") + '-tri-group ').removeClass("g-hide");

      if (target == 'finish') {
         $('.g-tutorial-window-normal,.g-tutorial-window-warning').addClass("g-hide");
         Sonet.Util.showModal('g-tutorial-finished');
         $('#task').removeClass('p1-check-finish');
      } else if ($.isNumeric(target)) {
         //regular screen style
         $('.g-tutorial-window-warning').removeClass('g-tutorial-window-warning').addClass('g-tutorial-window-normal');
         $('.g-tutorial-window-info').addClass('g-hide');
         //update dot style
         $('.g-tutorial-processing-dot-current').removeClass('g-tutorial-processing-dot-current').addClass('g-tutorial-processing-dot-inactive');
         $('.g-tutorial-processing-dot:nth-child(' + target + ')').removeClass('g-tutorial-processing-dot-inactive').addClass('g-tutorial-processing-dot-current');
      } else {
         //warning screen style
         $('.g-tutorial-window-normal').removeClass('g-tutorial-window-normal').addClass('g-tutorial-window-warning');
         $('.g-tutorial-window-info').removeClass('g-hide');
      }

      //call focus function on certian tutorial
      me.updateFocus(currentWindow.attr("data-focus"));
   },

   updateFocus: function (type) {
      switch (type) {
         case "none":
            $('.g-focus-grey').css('display', ' none');
            $('.g-focus-white').css('display', 'none');
            break;
         case "left50":
            $('.g-focus-grey').css('display', 'block').css('width', '50%');
            $('.g-focus-white').css('box-shadow', 'none');
            break;
         case "left57":
            $('.g-focus-grey').css('display', 'block').css('width', '57%').css('right', 'initial');
            break;
         case "right43":
            $('.g-focus-grey').css('display', 'block').css('width', '555px').css('right', '0');
            break;
         case "claw":
            $('.g-focus-grey').css('display', 'block').css('width', '100%');
            $('.g-focus-white').css('box-shadow', '0 0 0 30px white');
            break;
      }

   },

   getStudentSolution: function () {

      this.initBasicActionItems({
         raConfig: {
            blocklyElem: 'blocklyDivHsa',
            workspaceSettings: {
               readOnly: true,
               scrollbars: true
            },
            workspaceData: $('#blocklyDiv').data('obj').toXML()
         }
      });

   }

}
