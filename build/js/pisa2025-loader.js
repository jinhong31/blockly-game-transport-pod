(function () {

   test = {
      RobotArm: [
         { id: "P1M101", title: "Recycling Claw - Introduction" },
         { id: "P1M103", title: "Recycling Claw - Progress" },
         { id: "P1M102", title: "Recycling Claw - Quiz 1 of 5" },
         { id: "P1M104", title: "Recycling Claw - Quiz 2 of 5" },
         { id: "P1M105", title: "Recycling Claw - Quiz 3 of 5" },
         { id: "P1M135", title: "Recycling Claw - Quiz 4 of 5" },
         { id: "P1M133", title: "Recycling Claw - Quiz 5 of 5" },
         { id: "P1M108", title: "Recycling Claw - Progress" },
         { id: "P1M110", title: "Recycling Claw - Tutorial 1 of 2" },
         { id: "P1M114", title: "Recycling Claw - Tutorial 2 of 2" },
         { id: "P1M119", title: "Recycling Claw - Progress" },
         { id: "P1M120", title: "Recycling Claw - Learning Task 1 of 3" },
         { id: "P1M123", title: "Recycling Claw - Learning Task 2 of 3" },
         { id: "P1M124", title: "Recycling Claw - Learning Task 3 of 3" },
         { id: "P1M125", title: "Recycling Claw - Self Evaluation 1 of 2" },
         { id: "P1M126", title: "Recycling Claw - Self Evaluation 2 of 2" },
         { id: "P1M127", title: "Recycling Claw - Progress" },
         { id: "P1M128", title: "Recycling Claw - Challenge" },
         { id: "P1M129", title: "Recycling Claw - Self Evaluation 1 of 4" },
         { id: "P1M137", title: "Recycling Claw - Self Evaluation 2 of 4" },
         { id: "P1M130", title: "Recycling Claw - Self Evaluation 3 of 4" },
         { id: "P1M131", title: "Recycling Claw - Self Evaluation 4 of 4" },
      ],
      FitnessApp: [
      ],
      TransportPod: [
         { id: "P1M301", title: "Transport Pod - Introduction" },
         { id: "P1M302", title: "Transport Pod - Progress" },
         { id: "P1M303", title: "Transport Pod - Quiz 1 of 5" },
         { id: "P1M304", title: "Transport Pod - Quiz 2 of 5" },
         { id: "P1M305", title: "Transport Pod - Quiz 3 of 5" },
         { id: "P1M306", title: "Transport Pod - Quiz 4 of 5" },
         { id: "P1M307", title: "Transport Pod - Quiz 5 of 5" },
         { id: "P1M308", title: "Transport Pod - Progress" },
         { id: "P1M309", title: "Transport Pod - Tutorial 1 of 2" },
         { id: "P1M310", title: "Transport Pod - Tutorial 2 of 2" },
         //{id:"P1M311", title:"Transport Pod - Tutorial 3 of 2"},
         { id: "P1M315", title: "Transport Pod - Progress" },
         { id: "P1M316", title: "Transport Pod - Learning Task 1 of 4" },
         { id: "P1M317", title: "Transport Pod - Learning Task 2 of 4" },
         { id: "P1M318", title: "Transport Pod - Learning Task 3 of 4" },
         { id: "P1M319", title: "Transport Pod - Learning Task 4 of 4" },
         { id: "P1M324", title: "Transport Pod - Self Evaluation 1 of 2" },
         { id: "P1M325", title: "Transport Pod - Self Evaluation 2 of 2" },
         { id: "P1M320", title: "Transport Pod - Progress" },
         { id: "P1M323", title: "Transport Pod - Challenge 1 of 2" },
         { id: "P1M322", title: "Transport Pod - Challenge 2 of 2" },
         { id: "P1M326", title: "Transport Pod - Self Evaluation 3 of 4" },
         { id: "P1M327", title: "Transport Pod - Self Evaluation 4 of 4" }
      ],
      Conservation: [
      ],
      SafeLanding: [
      ],
      ArtExhibition: [
      ]
   };

   includes = {
      Global: [
         { id: "framework.css", type: 'link', into: 'head', attrs: { rel: 'stylesheet', href: 'css/framework.css' } },
         { id: "pisa2025.css", type: 'link', into: 'head', attrs: { rel: 'stylesheet', href: 'css/pisa2025.css' } },
         { id: "basic.css", type: 'link', into: 'head', attrs: { rel: 'stylesheet', href: 'css/basic.css' } },
         { id: "jquery.js", type: 'script', into: 'head', attrs: { src: 'js/external/jquery-3.6.0.min.js' } },
         { id: "font-awesome.min.js", type: 'script', into: 'head', attrs: { src: 'js/external/font-awesome.min.js', "data-keep-original-source": 'false' } },
         { id: "util.js", type: 'script', into: 'head', attrs: { src: 'js/external/util.js' }, depends: 'jquery.js' },
         { id: "scorm-wrapper.js", type: 'script', into: 'head', attrs: { src: 'js/external/scorm-wrapper.js' }, depends: 'util.js' },
         { id: "item-manager.js", type: 'script', into: 'head', attrs: { src: 'js/external/item-manager.js' } },
         { id: "multiple-choice.js", type: 'script', into: 'head', attrs: { src: 'js/external/multiple-choice.js' }, depends: 'item-manager.js' },
         { id: "likert.js", type: 'script', into: 'head', attrs: { src: 'js/external/likert.js' } },
         { id: "short-answer.js", type: 'script', into: 'head', attrs: { src: 'js/external/short-answer.js' } },
         { id: "eventTracker.js", type: 'script', into: 'head', attrs: { src: 'js/external/eventTracker.js' } },
         { id: "pisa2025.js", type: 'script', into: 'head', attrs: { src: 'js/pisa2025.js' } }
      ],
      RobotArm: [
         { id: "robot-arm.css", type: 'link', into: 'head', attrs: { rel: 'stylesheet', href: 'css/robot-arm.css' } },
         { id: "acorn_interpreter.js", type: 'script', into: 'head', attrs: { src: 'js/external/acorn_interpreter.js' } },
         { id: "blockly.min.js", type: 'script', into: 'head', attrs: { src: 'js/external/blockly.min.js' } },
         { id: "robot-arm.js", type: 'script', into: 'head', attrs: { src: 'js/robot-arm.js' }, depends: 'pisa2025.js' },
         { id: "RoboArm.js", type: 'script', into: 'head', attrs: { src: 'js/components/RoboArm.js' } },
         { id: "RoboArmWorld.js", type: 'script', into: 'head', attrs: { src: 'js/components/RoboArmWorld.js' } },
         { id: "RoboArmBlocklyPlugin.js", type: 'script', into: 'head', attrs: { src: 'js/components/RoboArmBlocklyPlugin.js' } }
      ],
      FitnessApp: [
      ],
      TransportPod: [
         { id: "transport-pod.css", type: 'link', into: 'head', attrs: { rel: 'stylesheet', href: 'css/transport-pod.css' } },
         { id: "acorn_interpreter.js", type: 'script', into: 'head', attrs: { src: 'js/external/acorn_interpreter.js' } },
         { id: "blockly.min.js", type: 'script', into: 'head', attrs: { src: 'js/external/blockly.min.js' } },
         { id: "transport-pod.js", type: 'script', into: 'head', attrs: { src: 'js/transport-pod.js' }, depends: 'pisa2025.js' },
         { id: "TransportPod.js", type: 'script', into: 'head', attrs: { src: 'js/components/TransportPod.js' } },
         { id: "TransportPodWorld.js", type: 'script', into: 'head', attrs: { src: 'js/components/TransportPodWorld.js' } },
         { id: "RoboArmBlocklyPlugin.js", type: 'script', into: 'head', attrs: { src: 'js/components/TransportPodBlocklyPlugin.js' } }
      ],
      Conservation: [
      ],
      SafeLanding: [
      ],
      ArtExhibition: [
      ]
   };

   init = function () {
      let me = this,
         params = new URLSearchParams(window.location.search);

      me.unit = params.get('unit');
      me.itemId = params.get('item');

      if (me.itemId != null) {
         injectTags([
            { id: "unit.js", type: 'script', into: 'head', attrs: { src: `templates/${me.unit}_template.js` } },
            { id: "item.js", type: 'script', into: 'head', attrs: { src: `items/${me.unit}/${me.itemId}.js` } }
         ].concat(me.includes['Global'], me.includes[me.unit])
         ).then(() => {
            me.initItem();
         });
      } else if (!me.inDeliveryMode()) {
         injectTags(me.includes['Global']).then(() => {
            $(function () {
               me.showIndex();
            });
         });
      }
   }

   injectTags = async function (tags) {
      let tracking = [];

      for (let i = 0; i < tags.length; i++) {
         let tag = tags[i];

         if (tag['depends']) {
            await tags.find(e => e.id == tag['depends']).loaded;
         }

         tag.loaded = new Promise((completed, reject) => {
            tag.elem = document.createElement(tag.type);
            tag.elem['onload'] = () => { completed() }
            Object.entries(tag.attrs).forEach(([k, v]) => tag.elem.setAttribute(k, v));
            document.getElementsByTagName(tag.into)[0].appendChild(tag.elem);
         });

         tracking.push(tag.loaded);
      }
      return Promise.all(tracking);
   }

   initItem = function () {
      //strip off the stuff we dont need in the template
      let builtItem = $($.parseHTML(template.substring(template.indexOf("<body"), template.lastIndexOf("</body>") + 7)));
      //builtItem.find('script').remove();

      //strip off the stuff we dont need in the item and merge with the template
      let itemContent = $($.parseHTML(item.substring(item.indexOf("<itemBody>"), item.lastIndexOf("</itemBody>") + 11)));
      builtItem.find('itemBody').replaceWith(itemContent);

      //fix image paths
      $('img', builtItem).each(function () {
         $(this).attr('src', $(this).attr('src').replace('/engine/packages/PISA2025/Resources/', ''));
      });

      //set the title
      builtItem.find('.g-module-title').html(builtItem.find('.task-title').html());

      $('body').append(builtItem);

      // make sure the appended content has loaded/rendered
      $(function () {
         let itemManager = Sonet.am.scorm.ItemManager,
            task = $('#task');

         // allow registering classes at the individul task level
         itemManager.types.forEach((type) => {
            if (task.hasClass(type.cls)) {
               $('body').addClass(type.cls);
            }
         });

         registerEvents();

         if (!inDeliveryMode()) {
            itemManager.setState('');
         }
      });

      window.ACERDeliveryService.init(this.itemId);
   }

   registerEvents = function () {
      let me = this;

      $('.g-next').on('click', function (e) {
         if (!me.canContinue()) {
            e.stopImmediatePropagation();
         }
      });

      window.ACERDeliveryService.registerDomEvents();

      if (!inDeliveryMode()) {
         let currItem = me.test[me.unit].findIndex(e => e.id == me.itemId);

         $('.g-next').on('click', function () {
            // useful for testing in dev
            //console.log(Sonet.am.scorm.ItemManager.getState());

            // if we have more items
            if (currItem < me.test[me.unit].length - 1) {
               window.location = `?unit=${me.unit}&item=${me.test[me.unit][currItem + 1].id}`;
            }
         }).toggle(currItem < me.test[me.unit].length - 1);

         $('.g-previous').on('click', function () {
            currItem = me.test[me.unit].findIndex(e => e.id == me.itemId);
            // if we have more items
            if (currItem > 0) {
               window.location = `?unit=${me.unit}&item=${me.test[me.unit][currItem - 1].id}`;
            }
         }).toggle(currItem > 0);
      }
   }

   inDeliveryMode = function () {
      return window.parent && window.parent.Delivery;
   }

   canContinue = function () {
      if (!Sonet.am.scorm.PISA2025.canFinish()) {
         Sonet.Util.showModal('am-modal-required');
         return false;
      }
      return true;
   }

   showIndex = function () {
      let me = this;

      const renderUnit = (unit) => {
         let listElem = '';

         me.test[unit].forEach((item) => {
            listElem += `<li><a href="?unit=${unit}&item=${item.id}">[${item.id}] ${item.title}</a></li>`;
         });

         $('body').append(
            `<h1>${unit}</h1>
            <ul>${listElem}</ul>`
         );
      }

      if (!me.unit) {
         Object.entries(me.test).forEach(([k, u]) => {
            renderUnit(k);
         });
      } else {
         renderUnit(me.unit);
      }

      $('body').addClass('am-load-complete');
   }

   init();
})();