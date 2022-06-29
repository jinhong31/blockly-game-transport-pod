Sonet.am.widgets.RoboArm = Class.extend({
    BASE_HEIGHT:30,
    CHAIN_HEIGHT:15,
    CHAIN_WIDTH:15,
    CLAW_SIZE:93,
    ARM_CELL_SPAN:3,
 
    init: function(world, props) {
       this.world = world;
 
       // set some defaults if we had any
       $.extend(this, {}, props);
 
       this.drawArm();
       this.carryObj = null;
    },
 
    move: function(dir, amount, speed , quickRun) {
       let p = $.extend({}, this.position),
       arm = this,
       promise =null;
 
       switch(dir) {
          case 'up': if (p.row-amount >= 0 && arm.world.state[p.row-amount][p.col] != null) { p.row-=amount; } break;
          case 'down': if (p.row+amount < arm.world.state.length && arm.world.state[p.row+amount][p.col] != null) { p.row+=amount; } break;
          case 'left': if (p.col-amount >= 0 && arm.world.state[p.row][p.col-amount] != null) {p.col-=amount; } break;
          case 'right': if (p.col+amount < arm.world.state[p.row].length && arm.world.state[p.row][p.col+amount] != null) { p.col+=amount; } break;
       }



       // was there any change
       if (arm.position.col != p.col || arm.position.row != p.row ) {
            arm.world.updateObjState(arm.position, p, arm);
            arm.position = p;
          
            //do not execute animation if is quick run
            if(!quickRun){
               let newX = arm.world.calcSize('x', arm.position.col), 
               newY = arm.world.calcSize('y', arm.position.row);

               // animate to the new location
               promise = arm.elem.animate({'x':newX, 'y':newY},{
                  step: function() {
                     let dx = parseFloat(arm.elem.css('x')),
                     dy = parseFloat(arm.elem.css('y'));

                     arm.elem.attr('transform', `translate(${dx} ${dy})`);
                     
                     // move the object with the arm if we are carrying something
                     if ( arm.carryObj != null ) {
                        arm.carryObj.trigger('move', [dx, arm.getClawY()+arm.CLAW_SIZE]);
                     }
                  },
                  complete: function() {
                  },
                  duration: speed
               }).promise();
            }
          // use the height of the arm taking off 1 for the current cell it is in. Assumes objects only take up 1 cell
          let cellCheckCount = arm.carryObj != null ? arm.ARM_CELL_SPAN : arm.ARM_CELL_SPAN-1;
          if (!arm.isFreeCellsBelow(p, cellCheckCount)) {
             throw {name: arm.world.ERR_RA, message:arm.world.ERR_MOVE2};
          }
          return promise;
       }
       // no change then we hit a wall
       throw {name: arm.world.ERR_RA, message:arm.world.ERR_MOVE1};
    },
 
    isFreeCellsBelow: function(p, limit) {
       let row = p.row;
       do {
         row += 1;
         limit--;
       // keep going unil we run out of empty square or reach the limit to check
       } while (limit >= 0 && row < this.world.state.length-1 && (this.world.state[row][p.col] == 'E' || this.world.state[row][p.col] == null));
       return limit == -1;
    },
 
    pickupPlace: function(pickup, speed, quickRun) {
       let p = $.extend({}, this.position),
       arm = this;
 
       if (pickup && arm.carryObj != null) {
          // cannot pick up an object if we are already carrying one
          throw {name: arm.world.ERR_RA, message:arm.world.ERR_PICKUP1};
       } else if (!pickup && arm.carryObj == null) {
          // cannot place an object if we are not carrying one
          throw {name: arm.world.ERR_RA, message:arm.world.ERR_PLACE1};
       }
       
       if (pickup) {
          do {
             // find the cell of the top object to pick up
             p.row += 1;
          } while (p.row < arm.world.state.length-1 && (arm.world.state[p.row][p.col] == 'E' || arm.world.state[p.row][p.col] == null));
       } else {
          // find the last empty cell to place the object in
          while (p.row+1 < arm.world.state.length && (arm.world.state[p.row+1][p.col] == 'E')) {
             p.row += 1;
          }
       }
       //do not execute animation if is quick run
       if(quickRun){
         if ( pickup && arm.world.state[p.row][p.col] != 'E' ) {
            arm.carryObj = arm.world.state[p.row][p.col];
            arm.world.updateObjState(p, null, arm.carryObj);
         } else if ( !pickup && arm.carryObj != null ) {
            arm.elem.trigger('pickup', [pickup, arm.carryObj, p]);
            arm.world.updateObjState(null, p, arm.carryObj);
            arm.carryObj = null;      
         }
         return;
       }else{
         // drop the chain
         arm.chain.animate({
            'height': arm.world.calcSize('y', p.row, 2)-arm.getChainY()-arm.CLAW_SIZE
         },{
            step: function(now) {
               arm.chain.next('.ra-world-arm-claw').attr('transform', "translate("+arm.getClawOffsetX()+","+arm.getClawOffsetY(now)+")");
               
               // move the object with the arm
               if ( !pickup && arm.carryObj != null ) {
                  arm.carryObj.trigger('move', [arm.getClawX(), arm.getClawY(now)+arm.CLAW_SIZE]);
               }
            },
            complete: function() {
               // collect the object
               if ( pickup && arm.world.state[p.row][p.col] != 'E' ) {
                  arm.carryObj = arm.world.state[p.row][p.col];
                  arm.world.updateObjState(p, null, arm.carryObj);
               } else if ( !pickup && arm.carryObj != null ) {
                  arm.elem.trigger('pickup', [pickup, arm.carryObj, p]);
                  arm.world.updateObjState(null, p, arm.carryObj);
                  arm.carryObj = null;      
               }
            },
            duration: speed
         });
       }
 
       arm.elem.trigger('beforepickup', [pickup, arm.carryObj, p]);
      
       //do not execute animation if is quick run
       if(quickRun){
          arm.elem.trigger('pickup', [pickup, arm.carryObj, null]);
          return;
       }else{
         // retract the chain
         return arm.chain.animate({
            'height': arm.CHAIN_HEIGHT
         },{
            step: function(now) {
               arm.chain.next('.ra-world-arm-claw').attr('transform', "translate("+arm.getClawOffsetX()+","+arm.getClawOffsetY(now)+")");
               
               // move the object with the arm
               if ( pickup && arm.carryObj != null ) {
                  arm.carryObj.trigger('move', [arm.getClawX(), arm.getClawY(now)+arm.CLAW_SIZE]);
               }
            },
            complete: function() {
               arm.elem.trigger('pickup', [pickup, arm.carryObj, null]);
            },
            duration: speed
         }).promise();
       }



    },
 
    /* Unused - ended up not required so may need some fixing if to use but this is the general gist 
    drop: function () {
       let p = $.extend({}, this.position),
       arm = this;
 
       // cannot drop an object if we are not carrying one
       if (arm.carryObj == null) {
          return;
       }
       
       while (p.row+1 < arm.world.state.length && (arm.world.state[p.row+1][p.col] == 'E' || arm.world.state[p.row+1][p.col] == null)) {
          p.row += 1;
       }
 
       let startY = parseFloat(arm.carryObj.data('ty')),
       startX = arm.getClawX();
 
       let promise = arm.carryObj.css('ty', startY).animate({
          'ty': arm.world.calcSize('y', p.row)-startY
       },{
          step: function(now) {
             $(this).trigger('move', [startX, startY+now]);
          },
          duration: arm.pickupDropSpeed
       });
 
       return promise;
    },
    */
 
    drawArm: function() {
       let x = this.world.calcSize('x', this.position.col), 
       y = this.world.calcSize('y', this.position.row);
 
       this.elem = this.world.appendSvg(this.world.objects, 'g', {
          class:'ra-world-arm',
          transform:`translate(${x},${y})`,
       }).css({'x':x, 'y':y}).data('obj', this);
 
       // arm top block
       this.world.appendSvg(this.elem, 'path', {d: 'M 0 15 L 0 30 L 50 30 L 50 0 L 0 0 L 0 15'});
       
       // arm chain
       this.chain = this.world.appendSvg(this.elem, 'rect', {
          class:"ra-world-arm-chain",
          x:18, y:this.BASE_HEIGHT, width: this.CHAIN_WIDTH, height: this.CHAIN_HEIGHT
       });
       
       // arm claw (2 parts grouped)
       var claw = this.world.appendSvg(this.elem, 'g', {
          class:'ra-world-arm-claw',
          transform:"translate("+this.getClawOffsetX()+","+this.getClawOffsetY()+")"
       })
       this.world.appendSvg(claw, 'path', {
          d: `M 9.277344 5.855469 C 3.808594 11.21875 3.027344 12.390625 2.050781 17.464844 C 0.292969 26.339844 2.148438 32.585938 8.59375 39.21875 
          C 11.914062 42.730469 12.011719 43.121094 10.9375 46.144531 C 10.253906 47.902344 9.765625 50.535156 9.765625 52 C 9.765625 53.367188 
          9.277344 54.828125 8.789062 55.121094 C 8.203125 55.414062 7.8125 56.390625 7.8125 57.074219 C 7.8125 57.855469 6.445312 60.585938 
          4.882812 63.121094 C 3.222656 65.660156 1.953125 68.488281 1.953125 69.464844 C 1.953125 71.21875 3.613281 74.535156 8.886719 83.414062 
          C 10.449219 86.046875 12.304688 89.269531 12.890625 90.4375 C 14.648438 94.046875 18.554688 94.4375 18.554688 91.121094 C 18.554688 
          90.242188 16.699219 86.4375 14.453125 82.632812 C 6.054688 68.488281 6.542969 70.535156 9.960938 64.195312 C 14.84375 54.925781 16.503906 
          53.660156 23.242188 53.660156 C 28.222656 53.660156 29.492188 54.046875 31.933594 56.292969 C 34.667969 58.828125 41.015625 68.097656 
          41.015625 69.5625 C 41.015625 69.953125 39.257812 73.074219 37.109375 76.585938 C 34.960938 80.097656 33.203125 83.316406 33.203125 83.804688 
          C 33.203125 84.292969 32.617188 85.171875 31.835938 85.757812 C 29.980469 87.316406 28.90625 91.707031 30.078125 92.878906 C 31.152344 
          93.953125 35.15625 92.195312 35.15625 90.632812 C 35.15625 90.144531 36.230469 88.097656 37.402344 86.046875 C 41.992188 78.925781 45.898438 
          71.316406 45.898438 69.757812 C 45.898438 68.976562 44.335938 65.269531 42.480469 61.660156 C 40.625 58.046875 38.378906 52.585938 37.597656 
          49.464844 C 36.230469 44 36.230469 43.609375 37.988281 41.074219 C 39.0625 39.609375 40.625 37.855469 41.40625 37.171875 C 48.242188 31.511719 
          48.242188 15.804688 41.503906 8.488281 C 39.648438 6.4375 38.085938 4.488281 38.085938 4.292969 C 38.085938 4 37.109375 2.925781 35.9375 
          1.855469 C 34.082031 0.390625 32.03125 0.0976562 24.609375 0 L 15.429688 0 Z M 31.054688 8.195312 C 41.113281 13.367188 42.578125 25.953125 
          34.082031 33.660156 C 30.46875 36.878906 29.492188 37.269531 23.925781 37.269531 C 18.457031 37.269531 17.480469 36.976562 14.257812 34.144531 
          C 9.570312 29.953125 7.324219 23.902344 8.691406 18.925781 C 9.960938 14.046875 12.109375 11.023438 16.015625 8.683594 C 19.628906 6.4375 
          27.246094 6.242188 31.054688 8.195312 Z M 31.054688 8.195312`
       });
       this.world.appendSvg(claw, 'path', {d: `M 17.480469 15.511719 C 13.769531 19.316406 13.671875 24 17.1875 28.195312 C 21.777344 33.660156 31.25 31.804688 
          33.007812 25.074219 C 35.546875 15.21875 24.609375 8.488281 17.480469 15.511719 Z M 17.480469 15.511719`});
    },
 
    getClawOffsetY: function(now=null) {
       return this.BASE_HEIGHT+(now == null ? parseFloat(this.chain.css('height')) : now)-2;
    },
 
    getClawOffsetX: function(now=null) {
       return 1;
    },
 
    getClawX: function(now=null) {
       return parseFloat(this.elem.css('x'));
    },
 
    getClawY: function(now=null) {
       return parseFloat(this.elem.css('y'))+this.getClawOffsetY(now);
    },
 
    getChainY: function() {
       return parseFloat(this.elem.css('y'))+parseFloat(this.chain.css('y'));
    },
 
    /* bit of a workaround, really we should make the arm and other world objects all consistent javascript objects
     * and then we wouldnt need this method
     */
    data: function(key, value) {
       if(typeof value === "undefined") {
          return this[key];
       }
       this[key] = value;
       return this;
    }
 });