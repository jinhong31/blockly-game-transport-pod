Sonet.am.widgets.TranportPodWorld = Class.extend({
   ACTION_TURN_LEFT: "left",
   ACTION_TURN_RIGHT: "right",
   ACTION_MOVE_POD: "move",
   GET_SENSOR_NEXT: "sensor",
   INCREASE_TIMER: "timer",
   ERR_TP: "tp-internal",
   ERR_MOVE1: 'move1',

   init: function (elem, props) {
      this.elem = $(elem);

      // set the default state and merge with the passed in state
      if ($("#task").attr("data-itemid") === "P1M310") {
         $.extend(this, {
            showErrors: true,
            moveSpeed: 300,
            turnSpeed: 80,
            CURRENT_HEAD_DEG: 0,
            width: 585,
            height: 510,
            waitTime: 0,
            r_deg: 60,
            cellWidth: 40,
         }, props);
      } else {
         $.extend(this, {
            showErrors: true,
            moveSpeed: 300,
            turnSpeed: 80,
            CURRENT_HEAD_DEG: 0,
            width: 400,
            height: 400,
            waitTime: 0,
            r_deg: 60,
            cellWidth: 40,
         }, props);
      }

      this.maxRows = this.state.length;
      this.maxCols = this.state[0].length;
      this.origState = $.extend(true, [], this.state);
      this.drawWorld(false);
   },

   appendSvg: function (elem, name, attributes) {
      let element = document.createElementNS("http://www.w3.org/2000/svg", name);
      $(element).attr(attributes);
      elem.append(element);
      return $(element);
   },

   reset: function () {
      $(this.objects).remove();
      this.elem.find('.tp-error-container').addClass('g-hide');
      this.state = $.extend(true, [], this.origState);
      this.drawWorld(true);
      this.updateWaitTime(true);
   },

   setSpeed: function (speed) {
      this.moveSpeed = speed;
      this.turnSpeed = speed * 0.8;
   },

   drawWorld: function (reload) {

      if (!reload) {
         this.elem.append('<div class="g-hide tp-error-container"><div class="tp-error-msg"></div></div>');

         this.svg = this.appendSvg(this.elem, "svg", {
            height: this.height,
            width: this.width,
            class: "tp-world",
         });

      }
      this.objects = this.appendSvg(this.svg, "g", { class: "tp-objects" });

      //draw map
      this.appendSvg(this.objects, 'path', { "d": this.map.path, "stroke": 'black', "stroke-width": 10, "fill": "none" });


      if ($("#task").attr("data-itemid") === "P1M310") {
         //draw rectangle
         this.appendSvg(this.objects, 'rect', { width: 40, height: 40, fill: 'red' }).css({ 'x': this.map.rect[0], 'y': this.map.rect[1], 'transform': 'rotate(' + (this.map.rect[2] != null ? this.map.rect[2] : 0) + 'deg)' });

         //draw circle
         for (let index = 0; index < this.map.circle.length; index++) {
            this.appendSvg(this.objects, 'circle', { cx: this.map.circle[index][0], cy: this.map.circle[index][1], r: 18, fill: '#ffc000' });
         }
      } else {
         //draw rectangle
         this.appendSvg(this.objects, 'rect', { width: 30, height: 30, fill: 'red' }).css({ 'x': this.map.rect[0], 'y': this.map.rect[1], 'transform': 'rotate(' + (this.map.rect[2] != null ? this.map.rect[2] : 0) + 'deg)' });

         //draw circle
         for (let index = 0; index < this.map.circle.length; index++) {
            this.appendSvg(this.objects, 'circle', { cx: this.map.circle[index][0], cy: this.map.circle[index][1], r: 15, fill: '#ffc000' });
         }
      }


      // loop through the grid to find pod position
      for (let row = 0; row < this.state.length; row++) {
         for (let col = 0; col < this.state[row].length; col++) {

            if (this.state[row][col].substr(-1) == 'P') {
               //top view of transport pod image
               this.state[row][col] = new Sonet.am.widgets.TransportPod(this, { position: { row: row, col: col }, CURRENT_HEAD_DEG: this.CURRENT_HEAD_DEG });

            }

         }
      }

   },

   calNewPosition: function (x_old, y_old, x_offset, y_offset) {
      return (x_offset == 1 ? [(+x_old + this.cellWidth), y_old] : [(+x_old + this.cellWidth * x_offset), (+y_old - this.cellWidth * y_offset)]);
   },

   /*
    * Simplify calls from the outside into one call to perform an action
    */
   performAction: function (action, para = null) {
      let promise = null,
         me = this;

      this.objects.find('.pod-top-img').each(function () {
         let pod = $(this).data('obj');
         try {
            // we only care about the last promise because they all move at the same speed
            if (action == me.ACTION_MOVE_POD) {
               promise = pod.move(me.moveSpeed);
            } else if (action == me.GET_SENSOR_NEXT) {
               promise = pod.sensorDetects(para, me.r_deg);
            } else {
               promise = pod.turnPod(action, me.moveSpeed, me.CURRENT_HEAD_DEG);
            }
         } catch (err) {
            me.handleError(err);
            return null;
         }
      });
      return promise;
   },
   updateObjState: function (oldPos, newPos, obj) {
      // update the world array - could be smarter to hold multiple objects and move the right one
      if (newPos != null) {
         this.state[newPos.row][newPos.col] = oldPos != null ? this.state[oldPos.row][oldPos.col] : obj;
      }
      if (oldPos != null) {
         this.state[oldPos.row][oldPos.col] = 'E';
      }
   },

   //get what object is located at given row+col
   getObjStateOrig: function (row, col) {
      return this.origState[row][col];
   },

   printState: function () {
      let str = '';
      for (let row = 0; row < this.state.length; row++) {
         str += "\n";
         for (let col = 0; col < this.state[row].length; col++) {
            str += this.state[row][col] + ','
         }
      }
      console.log(str);
   },

   isStateEqual: function (finalState, checkClaw = true) {
      if (this.state.length != finalState.length) {
         return false;
      }
      for (let row = 0; row < this.state.length; row++) {

         if (this.state[row].length != finalState[row].length) {
            return false;
         }
         for (let col = 0; col < this.state[row].length; col++) {
            // could be better if we didnt covert to objects
            var val1 = this.state[row][col] != null && typeof this.state[row][col] !== 'string' ? this.state[row][col].data('type') : this.state[row][col];
            var val2 = finalState[row][col] != null && typeof finalState[row][col] !== 'string' ? finalState[row][col].data('type') : finalState[row][col];

            if (val1 != val2 && (checkClaw || (val1 != 'R' && val2 != 'R'))) {
               return false;
            }
         }
      }
      return true;
   },

   updateWaitTime: function (reset) {
      if (reset) {
         this.waitTime = 0;
      } else {
         this.waitTime += 1;
      }
      //check if help screen is on
      if ($('.am-modal').hasClass('in')) {
         $('#wait_time_help').text(this.waitTime);
      } else {
         $('#wait_time').text(this.waitTime);
      }

   },

   handleError: function (err) {
      // not one of our errors so throw it back
      if (err.name != this.ERR_TP) {
         throw err;
      }
      if (this.showErrors) {
         this.elem.find('.tp-error-container').removeClass('g-hide').
            find('.tp-error-msg').html($('#tp-' + err.message + '-err').html());
      }
   }
});