Sonet.am.widgets.TransportPod = Class.extend({
   DEG_ARRAY: [0, 60, 90, 120, 180, 240, 270, 300],
   CURRENT_HEAD_DEG: 0,
   CURRENT_HEAD_ROTATE: 0,

   init: function (world, props) {
      this.world = world;
      this.CURRENT_HEAD_DEG = props.CURRENT_HEAD_DEG;
      this.CURRENT_HEAD_ROTATE = 0;

      // set some defaults if we had any
      $.extend(this, {}, props);

      this.drawPod();

   },

   move: function (speed) {
      let p = $.extend({}, this.position),
         tp = this;

      switch (tp.CURRENT_HEAD_DEG) {
         case 0:
            p.row -= 1;
            x_offset = 0;
            y_offset = 1;
            break;
         case 30:
            p.row -= 1; p.col += 1;
            x_offset = 0.5; y_offset = 0.86602540378;
            break;
         case 60:
            p.row -= 1; p.col += 1;
            x_offset = 0.86602540378; y_offset = 0.5;
            break;
         case 90:
            p.col += 1;
            x_offset = 1; y_offset = 0;
            break;
         case 120:
            p.row += 1; p.col += 1;
            x_offset = 0.86602540378; y_offset = -0.5;
            break;
         case 150:
            p.row += 1; p.col += 1;
            x_offset = 0.5; y_offset = -0.86602540378;
            break;
         case 180:
            p.row += 1;
            x_offset = 0;
            y_offset = -1;
            break;
         case 210:
            p.row += 1; p.col -= 1;
            x_offset = -0.5; y_offset = -0.86602540378;
            break;
         case 240:
            p.row += 1; p.col -= 1;
            x_offset = -0.86602540378; y_offset = -0.5;
            break;
         case 270:
            p.col -= 1;
            x_offset = -1; y_offset = 0;
            break;
         case 300:
            p.row -= 1; p.col -= 1;
            x_offset = -0.86602540378, y_offset = 0.5;
            break;
         case 330:
            p.row -= 1; p.col -= 1;
            x_offset = -0.5, y_offset = 0.86602540378;
            break;
      }

      //make sure new position is valid (can only move on top of a line)
      if (tp.world.getObjStateOrig(p.row, p.col).substr(0, 1) == "L") {

         tp.world.updateObjState(tp.position, p, tp);
         tp.position = p;

         let newX = tp.world.calNewPosition(parseFloat(tp.elem.css('x')), parseFloat(tp.elem.css('y')), x_offset, y_offset)[0],
            newY = tp.world.calNewPosition(parseFloat(tp.elem.css('x')), parseFloat(tp.elem.css('y')), x_offset, y_offset)[1];

         // animate to the new location
         let promise = tp.elem.animate({ 'x': newX, 'y': newY }, {
            step: function () {
               let dx = parseFloat(tp.elem.css('x')),
                  dy = parseFloat(tp.elem.css('y'));

               tp.elem.attr('transform-origin', (dx + 30) + 'px ' + (dy + 30) + 'px');
               tp.elem.css('x', tp.elem.css('x'));
               tp.elem.css('y', tp.elem.css('y'));
               //tp.elem.css('transform', 'translate(0px,0px) rotate('+tp.CURRENT_HEAD_DEG+'deg) ');
            },
            duration: speed
         }).promise();

         return promise;
      }

      // invalid move
      throw { name: tp.world.ERR_TP, message: tp.world.ERR_MOVE1 };
   },

   drawPod: function () {
      let x = this.world.map.pod[0],
         y = this.world.map.pod[1];

      this.elem = this.world.appendSvg(this.world.objects, 'image', {
         class: 'pod-top-img',
         "width": `${$("#task").attr("data-itemid") === "P1M310" ? '247px' : '60px'}`,
         "transform-origin": (+x + 30) + 'px ' + (+y + 30) + 'px',
         href: Sonet.am.App.RESOURCE_URL + "pod-top.png"
      }).css({ 'x': x, 'y': y, 'transform': 'translate(0px, 0px) rotate(' + this.CURRENT_HEAD_DEG + 'deg)' }).data('obj', this);
   },

   turnPod: function (dir, speed, currentDeg) {
      tp = this;

      //update current angle
      if (dir == 'right') {
         tp.CURRENT_HEAD_ROTATE += 15;
         tp.CURRENT_HEAD_DEG = (tp.CURRENT_HEAD_DEG == 345 ? tp.CURRENT_HEAD_DEG = 0 : tp.CURRENT_HEAD_DEG += 15);
      } else {
         tp.CURRENT_HEAD_ROTATE -= 15;
         tp.CURRENT_HEAD_DEG = (tp.CURRENT_HEAD_DEG == 0 ? tp.CURRENT_HEAD_DEG = 345 : tp.CURRENT_HEAD_DEG -= 15);
      }

      // rotation animation
      let promise = tp.elem.animate({ deg: tp.CURRENT_HEAD_ROTATE }, {
         step: function (now) {
            let dx = parseFloat(tp.elem.css('x')),
               dy = parseFloat(tp.elem.css('y'));

            tp.elem.attr('transform-origin', (dx + 30) + 'px ' + (dy + 30) + 'px');
            tp.elem.css('transform', 'translate(0, 0) rotate(' + (now + currentDeg) + 'deg)');

         },
         duration: speed
      }, 'linear').promise();

      return promise;

   },

   sensorDetects: function (sensor, r_deg) {

      let p = $.extend({}, this.position),
         tp = this,
         currentDeg = tp.CURRENT_HEAD_DEG;

      //left and right sensor has 60 degree difference comparing to middle sensor
      if (sensor == 'LEFT') {
         currentDeg -= 60;
         currentDeg = (currentDeg < 0 ? (360 + currentDeg) : currentDeg);
      } else if (sensor == 'RIGHT') {
         currentDeg += 60;
         currentDeg = (currentDeg >= 360 ? (currentDeg - 360) : currentDeg);
      }

      //check what the next object is base on head position
      switch (currentDeg) {
         case 0: p.row -= 1; break;
         case 30:
         case 60:
            if (currentDeg == r_deg) {
               p.row -= 1; p.col += 1;
            } else {
               return '';
            }
            break;
         case 90: p.col += 1; break;
         case 120:
         case 150:
            if ((180 - currentDeg) == r_deg) {
               p.row += 1; p.col += 1;
            } else {
               return '';
            }
            break;
         case 180: p.row += 1; break;
         case 210:
         case 240:
            if ((currentDeg - 180) == r_deg) {
               p.row += 1; p.col -= 1;
            } else {
               return '';
            }
            break;
         case 270: p.col -= 1; break;
         case 300:
         case 330:
            if (360 - currentDeg == r_deg) {
               p.row -= 1; p.col -= 1;
            } else {
               return '';
            }
            break;
         default: return '';
      }
      return tp.world.getObjStateOrig(p.row, p.col);

   }

});