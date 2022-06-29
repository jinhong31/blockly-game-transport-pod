Sonet.am.widgets.RoboArmWorld = Class.extend({
   ACTION_PICKUP:"pickup",
   ACTION_PLACE:"place",
   ACTION_MOVE_LEFT:"left",
   ACTION_MOVE_RIGHT:"right",

   RUN_ERROR:false,
   ERR_RA:"ra-internal",
   ERR_MOVE1:'move1',
   ERR_MOVE2:'move2',
   ERR_PICKUP1:'pickup1',
   ERR_PLACE1:'place1',
   ERR_EXT_PLACE1:'extplace1',
   ERR_EXT_PLACE2:'extplace2',

   init: function(elem, props) {
      this.elem = $(elem);

      // set the default state and merge with the passed in state
      $.extend(this, {
         state: [["R","E","E","E","E"],
                 ["E","E","E","E","E"],
                 ["E","E","E","E","E"],
                 ["E","E","E","E","E"],
                 ["E","E","E","E","E"],
                 ["E","E","E","E","E"]],
         cellWidth: 50,
         cellHeight: 50,
         cellBorderWidth: 2,
         showErrors: true,
         extTask: null,
         moveSpeed:300, 
         pickupDropSpeed:300
      }, props);   

      this.maxRows = this.state.length;
      this.maxCols = this.state[0].length;
      this.origState = $.extend(true, [], this.state);

      this.drawWorld(false);      
   },
   
   appendSvg: function(elem, name, attributes) {
      let element = document.createElementNS("http://www.w3.org/2000/svg", name);
      $(element).attr(attributes);
      elem.append(element);
      return $(element);
   },

   reset: function() {
      $(this.objects).remove();
      this.elem.find('.ra-error-container').addClass('g-hide');
      this.state = $.extend(true, [], this.origState);
      this.drawWorld(true);
      this.RUN_ERROR=false;
   },

   setState: function(newState) {
      $(this.objects).remove();
      this.elem.find('.ra-error-container').addClass('g-hide');
      this.state = newState;
      this.drawWorld(true);
   },

   setSpeed: function(speed) {
      this.moveSpeed = speed;
      this.pickupDropSpeed = speed*0.8;
   },

   drawWorld: function(reload) {
      let height = this.calcSize('y', this.maxRows, 2),
      width = this.calcSize('x', this.maxCols, 2),
      me = this;

      if ( !reload ) {
         this.elem.append('<div class="g-hide ra-error-container"><div class="ra-error-msg"></div></div>');

         this.svg = this.appendSvg(this.elem, "svg", {
            height: height*0.9, 
            width: width*0.9, 
            viewBox: `0 0 ${width} ${height}`,
            class:"ra-world",
         });
         
         // create some container elements
         this.grid = this.appendSvg(this.svg, "g", {class:"ra-grid"});
      }
      this.objects = this.appendSvg(this.svg, "g", {class:"ra-objects"});

      if (this.extTask != null) {
         // setup some useful properties
         this.extTask['cols'] = this.state[0].length; 
         this.extTask['bucketIdx'] = this.state[0].length-this.extTask.buckets;
         this.extTask['beltIdx'] = this.extTask.bucketIdx-this.extTask.empty-this.extTask.conveyor;
         this.extTask['objCount'] = 0;
      }

      // loop through the grid array to build the world
      for (let row = 0; row < this.state.length; row++) {         
         for (let col = 0; col < this.state[row].length; col++) {

            if ( !reload ) {
               var h = this.cellHeight * this.state.length;
   
               // this is a bit of a hack to deal with the extension task
               if ( this.extTask != null && row == 0 && col < this.state[row].length-this.extTask['buckets']) {
                  h = this.cellHeight * (this.state.length-1);
               }

               // draw the square, allow unusual shaped worlds by hiding nulls
               this.appendSvg(this.grid, 'rect', {
                  x: this.calcSize('x', col), 
                  y: this.calcSize('y', row), 
                  width: this.cellWidth, 
                  height: h, 
                  // hide the other square now due to change request not to show sqaures anymore
                  class: 'ra-world-square'+(this.state[row][col] == null || row != 0 ? ' g-hide' : ''),
                  'data-col': col,
                  'data-row': row,
               }).css({
                  'stroke-width': this.cellBorderWidth
               });
            }

            // check for special case of arm holding an object
            var holdingObj = null;
            if ( this.state[row][col] != null && this.state[row][col].length > 1 && this.state[row][col].charAt(0) == 'R') {
               holdingObj = this.state[row][col].slice(1);
               this.state[row][col] = 'R';
            }

            // draw the elments
            switch(this.state[row][col]) {
               case 'R': {
                  this.state[row][col] = new Sonet.am.widgets.RoboArm(this, {position:{row:row, col:col}}).data('type', 'R'); 
                  if (this.extTask != null) {
                     this.state[row][col].elem.on('pickup', function(event, pickup, obj, pos){
                        me.onPickupExtTask(pickup, obj, pos);
                     });
                     this.state[row][col].elem.on('beforepickup', function(event, pickup, obj, pos){
                        me.onBeforePickupExtTask(pickup, obj, pos);
                     });
                  }
                  break;
               };
               case 'E': break;
               case null: break;
               case 'S': break;
               default: {
                  this.state[row][col] = this.drawShape({row:row, col:col}, this.state[row][col]); 
                  if (this.extTask != null) {
                     this.extTask['objCount']++;
                  }
                  break;
               }
            }

            // the arm will be drawn by now so attach any objects it should be holding
            if ( holdingObj != null) {
               let arm = this.state[row][col];
               arm.carryObj = this.drawShape({row:row, col:col}, holdingObj);
               arm.carryObj.trigger('move', [arm.getClawX(), arm.getClawY()+arm.CLAW_SIZE]);
            }
         }
      }

      if (this.extTask != null) {
         // allows us to style the buckets
         for (let i = this.extTask.bucketIdx+1; i <= this.extTask.cols; i++) {
            $('.ra-objects > :nth-child('+i+')').addClass('ra-shape-bin');
            this.extTask['objCount']--;
         }
         
         // set how many have been sorted
         if ( this.extTask['counter'] ) {
            this.extTask['sorted'] = 0;
            $(this.extTask.counter).html(this.extTask.sorted+' / '+this.extTask.objCount);   
         }
         // get rid of the last row its not needed in the ext task after we draw
         this.state.pop();
      }
   },   

   calcSize: function(axis, cells, borderMultiplier=1) {
      return (this.cellBorderWidth * borderMultiplier) + ((axis == 'x' ? this.cellWidth : this.cellHeight) * cells);
   },

   drawShape: function(position, type) {
      let x = this.calcSize('x', position.col), 
      y = this.calcSize('y', position.row),
      offsetX = 9,
      offsetY = 0;

      let elem = this.appendSvg(this.objects, 'image', {
         class: 'ra-world-shape'+type,
         transform:`translate(${x+offsetX},${y+offsetY})`,
         href: Sonet.am.App.RESOURCE_URL+"obj"+type+".png"
      });
      
      return elem.data({tx: x+offsetX, ty:y+offsetY, type:type}).on('move', function(e, x, y){
         x=parseFloat(x)+offsetX;
         y=parseFloat(y)+offsetY;
         $(this).data({tx: x, ty:y}).attr({transform:`translate(${x},${y})`});
      });
   },

   /*
    * Simplify calls from the outside into one call to perform an action
    */
   performAction: function(action, armIdx=null,quickRun){
      let promise = null,
      me = this;
      armIdx = armIdx != null ? ':eq('+armIdx+')' : '';

      //do not execute if already has run Error
      if(quickRun && me.RUN_ERROR != false){
         return null;
      }
      
      this.objects.find('.ra-world-arm'+armIdx).each(function() {
         let arm = $(this).data('obj');
         try {
            // we only care about the last promise because they all move at the same speed
            if (action == me.ACTION_PICKUP) {
               promise = arm.pickupPlace(true, me.pickupDropSpeed,quickRun);
            } else if (action == me.ACTION_PLACE) {
               promise = arm.pickupPlace(false, me.pickupDropSpeed,quickRun);
            } else {
               promise = arm.move(action, 1, me.moveSpeed,quickRun);
            }
         } catch(err) {
            me.handleError(err);
            return null;
         }
      });
      return promise;
   },

   isArmHolding: function(obj) {
      let arm = this.objects.find('.ra-world-arm').data('obj');
      return arm.carryObj != null && arm.carryObj.data('type') == obj;
   },

   updateObjState: function(oldPos, newPos, obj) {
      // update the world array - could be smarter to hold multiple objects and move the right one
      if ( newPos != null ) {
         this.state[newPos.row][newPos.col] = oldPos != null ? this.state[oldPos.row][oldPos.col] : obj;
      }
      if ( oldPos != null ) {
         this.state[oldPos.row][oldPos.col] = 'E';  
      }
   },

   onBeforePickupExtTask: function(pickup, obj, pos) { 
      let me = this;
      // dont allow items to be stacked on the conveyor belt - can check the row to place is not the bottom which means there must be another
      // object there.
      if ( !pickup && obj != null && pos.col < me.extTask.bucketIdx-me.extTask.empty && pos.row < me.state.length-1 ) {
         throw {name: me.ERR_RA, message:me.ERR_EXT_PLACE1};
      } else if (!pickup && obj != null && pos.col >= me.extTask.bucketIdx) {
         
         // check if we are dropping the object into the right bin
         if ( obj.data('type') != me.origState[me.origState.length-1][pos.col] ) {
            me.extTask.sorted--; //subtract one because the drop function will still complete and add 1
            throw {name: me.ERR_RA, message:me.ERR_EXT_PLACE2};
         }
         // check if there are any objects left on the conveyor belt
         let objectsRemaining = false;
         for (let row = 1; row < me.state.length; row++) {
            for (let col = 0; col < me.extTask.conveyor+me.extTask.empty; col++) {
               if (me.state[row][me.extTask.beltIdx+col] != null && me.state[row][me.extTask.beltIdx+col] != 'E') {
                  objectsRemaining = true;
               }
            }
         }
         if (!objectsRemaining) {
            let py = me.state.length-1;
            
            // move in the next X items
            for (let i=me.extTask.beltIdx-1; i>=0; i--) {

               let px = i+me.extTask.conveyor,
               newX = me.calcSize('x', px), 
               newY = me.calcSize('y', py),
               obj = me.state[py][i];

               // could think about animating this
               if (obj != null && obj != 'E') {
                  me.updateObjState({'row':py, 'col':i}, {'row':py, 'col':px}, obj);
                  obj.trigger('move', [newX, newY]);
               }
            }
         }
      }
   },

   onPickupExtTask: function(pickup, obj, pos) { 
      let me = this;

      // make the object look like its falling into the bin
      if (!pickup && obj != null && pos.col >= this.extTask.bucketIdx) {
         obj.animate({
            'y': me.calcSize('y', this.state.length)
         },{
            complete: function () {
               me.updateObjState(pos, null, obj);
               obj.remove();
            },
            duration: me.pickupDropSpeed
         });
         // update the number of sorted objects
         if ( me.extTask['counter'] ) {
            $(me.extTask.counter).html(++me.extTask.sorted+' / '+me.extTask.objCount);   
         }
      }
   },

   printState: function() { 
      let str = '';  
      for (let row = 0; row < this.state.length; row++) {
         str += "\n";      
         for (let col = 0; col < this.state[row].length; col++) {
            //check if contains object
            if(typeof(this.state[row][col])=='object'){
               //check if is claw or can/jar
               if($(this.state[row][col]).attr('class') !== undefined){
                  str += $(this.state[row][col]).attr('class')+',';
               }else{
                  str += 'ra-world-arm,';
               }
            }else{
               str += this.state[row][col]+',';
            }
         }
      }
      return(str+this.RUN_ERROR);
   },

   isStateEqual: function(finalState, checkClaw = true) {
      if (this.state.length != finalState.length ) {
         return false;
      }
      for (let row = 0; row < this.state.length; row++) {
                   
         if (this.state[row].length != finalState[row].length ) {
            return false;
         }
         for (let col = 0; col < this.state[row].length; col++) {
            // could be better if we didnt covert to objects
            var val1 = this.state[row][col] != null && typeof this.state[row][col] !== 'string' ? this.state[row][col].data('type') : this.state[row][col];
            var val2 = finalState[row][col] != null && typeof finalState[row][col] !== 'string' ? finalState[row][col].data('type') : finalState[row][col];
            
            if (val1 != val2 && (checkClaw || (val1 != 'R' && val2 != 'R')) ) {
               return false;
            }
         }
      }
      return true;
   },

   handleError: function(err) {
      // not one of our errors so throw it back
      if (err.name != this.ERR_RA) {
         throw err;
      }
      if (this.showErrors) {
         this.RUN_ERROR=err.message;
         this.elem.find('.ra-error-container').removeClass('g-hide').
            find('.ra-error-msg').html($('#ra-'+err.message+'-err').html());
      }
   }
});