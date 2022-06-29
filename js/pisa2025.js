$(function () {

   // makes it easier to dev save functionality in preview, MUST COMMENT out before commit
   // Sonet.am.scorm.ScormWrapper.setValue = function(element, value) {
   //    console.log(element, value);
   // }

   Sonet.am.scorm.ItemManager.register({
      cls: 'pisa2025',
      obj: 'PISA2025',
      type: 'scorm'
   });
});

Sonet.am.scorm.PISA2025 = {
   STATE_CLICKED: 2,
   STATE_ACTIVATED: 1,
   noRespDialog: 'g-no-response-dialog',
   noContinueSingleDialog: 'g-no-continue-single-dialog',
   noContinueMultiDialog: 'g-no-continue-multi-dialog',
   confirmDialog: 'g-confirm-finish',
   confirmTutorialDialog: 'g-confirm-tutorial',

   init: function (editMode) {
      let me = this;
      me.task = $('#task');

      $('body').on('click', '.g-modal .g-close', function () {
         Sonet.Util.hideModal();
         //save hide modal event
         data = {
            "event_type": 'close modal',
            "event_location": null,
            "event_prev": null,
            "event_result": null
         };
         me.saveEvents(data);
      });

      me.initCommonFinishConditions();
      me.initRevealBubbles();
      me.initStyledDropdowns();
      me.createBlocklySpeedSlider();

      me.udpateProgress();
      me.updateDropdownClass();


      // call module and item specific functions
      if (me[me.task.data('module')]) {
         me.module = me[me.task.data('module')];
         me.module.init(this);
         if (me.module[me.task.data('itemid')]) {
            me.module[me.task.data('itemid')]();
         }
      }

      //save event status on hover
      $(".g-tooltip").hover(
         function () {
            $(this).data('time-in', Date.now());
         }, function () {
            let dataToSave = {
               "event_type": "hover",
               "event_location": $(this).data('event-id'),
               "event_prev": "",
               "event_result": Date.now() - $(this).data('time-in')
            };
            me.saveEvents(dataToSave);
         }
      );
      me.initHelp();
   },
   updateDropdownClass() {
      //There is issue with "likert-group" class not appear in translator
      //we add the class after load so it can still record user interaction result
      dropdownTask = ['P1M104', 'P1M126', 'P1M131', 'P1M205', 'P1M219', 'P1M222'];
      if (dropdownTask.includes(this.task.data('itemid'))) {
         $("select").each(function () {
            $(this).addClass("likert-group");
         });
      }
   },

   setSwitchTarget(context, targetClass) {
      let current = context.find('.g-switch-content:not(.g-invisible)'),
         target = context.find(targetClass);

      if (target != current) {
         current.addClass('g-invisible').trigger('hide');
         target.removeClass('g-invisible').trigger('show');
         // set the title
         context.find('.g-switch-title-holder').html(target.find('.g-switch-title').html());
      }
   },

   /**
    * Creates the speed slider to avoid repeating the HTML in the XML. Could find a better place for this
    */
   createBlocklySpeedSlider() {
      $('.g-blockly-speed-holder').each(function () {
         $(this).append(`<input class="g-blockly-speed" type="range" min="-100" max="0" step="10" value="-33" />`);
         $(this).append('<div class="g-blockly-speed-text"><span data-am-translate="speed.slow" data-am-translate-group="m1.buttons" data-wysiwyg="false">slow</span>' +
            '<span data-am-translate="speed.fast" data-am-translate-group="m1.buttons" data-wysiwyg="false">fast</span></div>');
      });
   },

   setSelectedOption(elem) {
      let selectHolder = $(elem).find('.g-styled-opts-value'),
         selectedOpt = $(elem).find('.g-styled-opts-selected'),
         oldVal = $(selectHolder).data('value'),
         newVal = selectedOpt.data('value');

      if (oldVal != newVal) {
         selectHolder.html(selectedOpt.html());
         selectHolder.data('value', newVal);
         $(elem).trigger('change', { oldValue: oldVal, newValue: newVal });
      }
   },

   initStyledDropdowns() {
      let me = this;

      // styled drop down options
      let closeAllDropDowns = function () {
         $('.g-styled-select.g-styled-opts').removeClass('g-styled-select-expanded');
      }
      me.task.on('click', '.g-styled-select.g-styled-opts', function (e) {
         let open = !$(this).hasClass('g-styled-select-expanded');
         e.preventDefault();
         e.stopPropagation();

         // close any other open drop downs and open this one if it was not already open
         closeAllDropDowns();

         if (!$(this).attr('disabled')) {
            if (open) {
               $(this).addClass('g-styled-select-expanded');
            }

            // change the selected option
            $(this).find('.g-styled-opts-selected').removeClass('g-styled-opts-selected');
            $(e.target).closest('.g-styled-option').addClass('g-styled-opts-selected');

            // set the selected value to the selected option
            me.setSelectedOption(this);
         }
      });
      $(document).click(function () {
         closeAllDropDowns();
      });
   },

   initHelp() {
      let me = this, hint = null;
      let helpDialog = $('.g-help-dialog');
      let ClosedSlideDirection = "ltr";
      //only for LC and BC and tutorial which has class 'p1-help-stats'
      if (!me.task.hasClass('p1-help-stats')) {
         return;
      }



      //working examples
      //show example modal
      $('.g-help-ico').on('click', function () {

         ClosedSlideDirection = "ltr"

         let leftValue = $("#task").hasClass("p1-m2") ? "665px" : "425px";

         if (!$(this).attr('disabled')) {

            Sonet.Util.showModal('g-help-dialog');
            $('.g-help-dialog').trigger('show');
            me.setSwitchTarget($('.g-help-dialog'), $(this).data('switch-target'));

            //slide in animation
            if (!$(this).hasClass("g-help-ico-slideltr")) {// 
               $('.g-help-dialog').stop().animate({
                  left: leftValue
               }, 500);
            } else {
               ClosedSlideDirection = "rtl"
               $('.g-help-dialog').css("left", "-67%");
               $('.g-help-dialog').stop().animate({
                  left: "0px"
               }, 500);
            }

            let dataToSave = {
               "event_type": "show_example",
               "event_location": "",
               "event_prev": null,
               "event_result": $(this).data('switch-target')
            };
            me.saveEvents(dataToSave);

         }
      });

      // first time show init additional events
      $('.g-help-dialog,.g-solution').one('show', function () {

         // call this once for each screen to allow module to do any initilisation.
         // if you need to do something each time its shown the init function can register for the show/hide event
         $('.g-switch-content', this).one('show', function () {

            // if the module contains a function that matches the data-init attribute call it
            let customInit = $(this).data('init');
            if (customInit && me.module[customInit]) {
               me.module[customInit]();
            }
         });
      });

      //close example modal
      $('.g-help-close').on('click', function () {


         //slide out animation
         if (ClosedSlideDirection == "rtl") {

            helpDialog.stop().animate({
               left: "-67%"
            }, 500, function () {
               helpDialog.css("left", "100%");
            });





         } else {
            $('.g-help-dialog').stop().animate({
               left: "100%"
            }, 500);
         }



         let dataToSave = {
            "event_type": "close_example",
            "event_location": "",
            "event_prev": null,
            "event_result": null
         };
         me.saveEvents(dataToSave);
      });


      //following functions are only for LC and BC
      if ($("#task").attr("data-progress") != 'lc' && $("#task").attr("data-progress") != 'bc') {
         return;
      }

      //change "next" to "submit" for LC and BC
      $('.g-nav-btn[name=next] .nav-next-btn').addClass('g-hide');
      $('.g-nav-btn[name=next] .nav-submit-btn').removeClass('g-hide');


      //Hint
      // move item specific hint and solution into the template dialog
      $('.g-solution .g-switch-holder').append($('.g-task-solution .g-switch-content'));
      $('.g-hint-dialog .g-switch-holder').append($('.g-task-hint .g-switch-content'));

      //bring up hint modal after 2 min
      hint = setInterval(function () {
         Sonet.Util.showModal('g-hint-dialog');
         me.setSwitchTarget($('.g-hint-dialog'), '.g-hint-page1');
         hint = window.clearInterval(hint);
      }, 120000);

      //show hint later
      $('.g-later-hint').on('click', function () {
         me.setSwitchTarget($('.g-hint-dialog'), '.g-hint-page2');
         let dataToSave = {
            "event_type": "later_hint",
            "event_location": "",
            "event_prev": null,
            "event_result": null
         };
         me.saveEvents(dataToSave);
      });

      //show hint now
      $('.g-show-hint').on('click', function () {
         me.setSwitchTarget($('.g-hint-dialog'), '.g-hint-page3');
         let dataToSave = {
            "event_type": "show_hint",
            "event_location": "",
            "event_prev": null,
            "event_result": null
         };
         me.saveEvents(dataToSave);
      });

      //bring up task introduction modal / starigt to hint for M1 and M2 only
      $('.g-avatar-intro,.intro-info').on('click', function () {
         //do not show hint before hint pops up for M1 and M2 only
         if (($("#task").hasClass('p1-m1') || $("#task").hasClass('p1-m2')) && hint != null) {
            return;
         }
         Sonet.Util.showModal('g-hint-dialog');
         me.setSwitchTarget($('.g-hint-dialog'), '.g-hint-page3');
         let dataToSave = {
            "event_type": "view_hint",
            "event_location": "",
            "event_prev": null,
            "event_result": null
         };
         me.saveEvents(dataToSave);
      });

      //Solution
      //show solution dialog when user clicked next for learning center
      $('#task').on('checkFinish', function (e) {
         if ($("#task").attr("data-progress") == 'lc' && (me.isModalShowing('.g-confirm-finish2') || me.isModalShowing('.g-efficiency-dialog'))) {
            e.dialog[0] = 'g-confirm-solution';
         }
         if (me.isModalShowing('.g-confirm-solution') && $("#solultion_eval input[type='radio']:checked").val() == null) {
            e.dialog[0] = 'g-confirm-solution';
            $('.eval_warning,.fa-exclamation-triangle').removeClass('g-hide');
         }
      });

      //show view solution button after user select evaluation option
      $("#solultion_eval").change(function () {
         $('.show-solution').removeClass('g-hide');
         $('.eval_warning,.fa-exclamation-triangle').addClass('g-hide');
      });

      //show solution
      $('.g-solution-btn').on('click', function () {
         Sonet.Util.hideModal();
         Sonet.Util.showModal('g-solution');
         $('.g-solution').trigger('show');
         me.setSwitchTarget($('.g-solution'), '.g-solution-page');
         let dataToSave = {
            "event_type": "view_solution",
            "event_location": "",
            "event_prev": null,
            "event_result": null
         };
         me.saveEvents(dataToSave);
      });

   },

   udpateProgress: function () {
      //update progress image class base on progress type
      if ($("#task").attr("data-progress") == 'quiz') {
         $(".nav-quiz").addClass("g-img-active");
      } else if ($("#task").attr("data-progress") == 'tut') {
         $(".nav-quiz").removeClass("fa-circle").addClass("fa-check-circle g-img-complete");
         $(".nav-tut").addClass("g-img-active");
      } else if ($("#task").attr("data-progress") == 'lc') {
         $(".nav-quiz").removeClass("fa-circle").addClass("fa-check-circle g-img-complete");
         $(".nav-tut").removeClass("fa-circle").addClass("fa-check-circle g-img-complete");
         $(".nav-lc").addClass("g-img-active");
      } else if ($("#task").attr("data-progress") == 'bc') {
         $(".nav-quiz").removeClass("fa-circle").addClass("fa-check-circle g-img-complete");
         $(".nav-tut").removeClass("fa-circle").addClass("fa-check-circle g-img-complete");
         $(".nav-lc").removeClass("fa-circle").addClass("fa-check-circle g-img-complete");
         $(".nav-bc").addClass("g-img-active");
      }

      //update title
      if ($(".task-title").text() != '') {
         $(".g-navbar-title span").text($(".task-title").text());
      }
   },
   initRevealBubbles: function () {
      let me = this;

      $(".g-activate-target:not('.g-reveal-bubble')").hover(function () {
         $($(this).data('target')).addClass('g-target-active');
      }, function () {
         $($(this).data('target')).removeClass('g-target-active');
      });

      $('.g-reveal-bubble').click(function () {
         me.revealBubble(this, true);
      });
   },

   /**
   * Set the state of the reveal bubble
   * force - MUST be set to true if this was not a result of the user clicking the bubble otherwise will impact expected data saving
   **/
   revealBubble: function (elem, activate, force = false) {
      // dont do anything if we are already active or disabled
      if (force || !$(elem).hasClass('g-bubble-active g-bubble-disabled')) {
         $('.g-target-active').removeClass('g-target-active');
         //reveal the text and active the content
         if (activate) {
            // set the state, only increase - dont set back to a lower state
            let existingState = Number.isInteger($(elem).data('state')) ? $(elem).data('state') : "";
            $(elem).data('state', Math.max(existingState, force ? this.STATE_ACTIVATED : this.STATE_CLICKED));

            $($(elem).addClass('g-bubble-active').removeClass('g-bubble-focused').data('target')).addClass('g-target-active');
            if ($(elem).hasClass('g-bubble-hide-prev')) {
               $($(elem).data('hide')).addClass('g-hide');
            }
            if (force || !$(elem).hasClass('g-bubble-conditional')) {
               $($(elem).data('next')).removeClass('g-bubble-disabled').addClass('g-bubble-focused');
               $($(elem).data('show')).removeClass('g-hide');
               $($(elem).data('hide')).addClass('g-hide');
            }
         }
      }
   },

   hideBubble: function (elem) {
      if ($(elem).hasClass('g-bubble-active') || $(elem).hasClass('g-bubble-focused')) {
         $(elem).hide();
      }
   },

   focusButton: function (elem) {
      if (!$(elem).hasClass('g-bubble-focused')) {
         $(elem).addClass('g-bubble-focused');
      }
   },

   /**
    * Add common finish conditions here that would be used across modules. For module specific or item specific
    * conditions they should be added to the specific module js file. 
    */
   initCommonFinishConditions() {
      let me = this;

      // standard confirm finish, always trigger it if class is set
      if (me.task.hasClass('p1-confirm-finish')) {
         me.task.on('checkFinish', function (e) {
            e.dialog[2] = me.confirmDialog;
         });
      }

      // check MCQs
      if (me.task.hasClass('p1-check-mcq')) {
         me.task.on('checkFinish', function (e) {
            $('.multiple-choice-group').each(function () {
               if ($(this).find(".g-mcq-radio:checked").length > 0) {
                  e.countAnswered++;
               } else {
                  e.countEmpty++;
               }
            });
         });
      }

      // check checkbox - need to revist this, it is not the way it should be done using the multiple-choice class. It
      // should be based off a p1-check-x class like the rest
      if (me.task.hasClass('multiple-choice') && !me.task.hasClass('p1-ignore-no-resp')) {
         let hasAnswer = false;
         me.task.on('checkFinish', function (e) {
            $('.multiple-choice-group').each(function () {
               if ($(this).find(".g-mcq-checkbox:checked").length > 0) {
                  hasAnswer = true
               }
            });
            if (hasAnswer) {
               e.countAnswered++;
            } else {
               e.countEmpty++;
            }
         });
      }

      // check SELECT elements
      if (me.task.hasClass('p1-check-select')) {
         me.task.on('checkFinish', function (e) {
            $('.g-inline-select').each(function () {
               let selected = $(this).find(":selected");
               if (selected.length > 0 && $(selected[0]).data('am-likert-option-incomplete') != true) {
                  e.countAnswered++;
               } else {
                  e.countEmpty++;
               }
            });
         });
      }


      // check drop
      if (me.task.hasClass('p1-check-dropped')) {
         me.task.on('checkFinish', function (e) {
            let imageDropped = false;
            $('.p1-m2-chart-holder').each(function () {
               let dropped = $(this);
               if (dropped.hasClass("p1-be-dropped")) {
                  imageDropped = true;
               }
            });
            if (imageDropped) {
               e.countAnswered++;
            } else {
               e.countEmpty++;
            }
         });
      }

      // check text input elements
      if (me.task.hasClass('p1-check-input')) {
         me.task.on('checkFinish', function (e) {
            $('.g-inline-input').each(function () {
               if ($(this).val() != "") {
                  e.countAnswered++;
               } else {
                  e.countEmpty++;
               }
            });
         });
      }

      // check if is tutorial
      if (me.task.hasClass('p1-confirm-tutorial')) {
         me.task.on('checkFinish', function (e) {
            e.dialog[2] = me.confirmTutorialDialog;
         });
      }
   },

   isModalShowing(elem) {
      return $(elem).hasClass('in');
   },

   canFinish: function () {
      // check if we should be checking a finish condition. If the dialog is already showing
      // and this has been called we can assume we should move on
      if (this.isModalShowing('.g-no-continue-single-dialog') || this.isModalShowing('.g-no-continue-multi-dialog')) {
         //continue to rest of the code

      } else if (!this.task.hasClass('p1-check-finish') ||
         (this.isModalShowing('.g-check-finish') && !$("#task").hasClass('p1-m1') && !$("#task").hasClass('p1-m2')) ||
         (this.isModalShowing('.g-check-finish') && ($("#task").attr("data-progress") != 'lc')) ||
         (this.isModalShowing('.g-confirm-solution') && $("#solultion_eval input[type='radio']:checked").val() != null) ||
         this.isModalShowing('.g-solution')) {
         Sonet.Util.hideModal();
         return true;
      }

      let checkFinish = $.Event("checkFinish");
      checkFinish.countEmpty = 0;
      checkFinish.countAnswered = 0;
      // future enhancement handle priorities better 
      // (index 0 is reserved for custom, 1 is reseved for no response, 2 is reserved for always warnings)
      checkFinish.dialog = [false, false, false];


      this.task.trigger(checkFinish);
      Sonet.Util.hideModal();

      // do we make it all or nothing, switch countAnswered and countEmpty for all or nothing
      if (checkFinish.countEmpty > 0 && checkFinish.countAnswered == 0 || (this.task.data('count-answer') != undefined && checkFinish.countAnswered < this.task.data('count-answer'))) {
         if (this.task.data('count-answer') != undefined) {
            if (this.task.data('count-answer') == 1) {
               checkFinish.dialog[1] = this.noContinueSingleDialog;
            } else {
               checkFinish.dialog[1] = this.noContinueMultiDialog;
            }
         } else {
            checkFinish.dialog[1] = this.noRespDialog;
         }
      }

      for (let i = 0; i < checkFinish.dialog.length; i++) {
         if (checkFinish.dialog[i]) {
            Sonet.Util.showModal(checkFinish.dialog[i]);
            return false;
         }
      }
      return true;
   },

   showDialog: function (dialog = '.g-modal') {
      $(dialog).removeClass('g-hide');
   },

   hideDialog: function (relative = '.g-modal') {
      $(relative).parents('.g-modal').addClass('g-hide');
   },

   renderTutorialWindow(
      renderElementId,
      configGroup,
      actionRequiredList,
      isWarning = false,
      finishModalClass = ""
   ) {
      // console.log(renderElementId, configGroup, actionRequiredList)
      let me = this;
      let renderElementIdClompleted = "#" + renderElementId;
      let getWindowIndex = windowIndex => Number(windowIndex) + 1;

      let config =
         typeof configGroup.normal.filter((item) => item.isCurrent)[0] !==
            "undefined"
            ? configGroup.normal.filter((item) => item.isCurrent)[0]
            : configGroup.normal[0];

      let dotGroupHtml = "";
      let currentTutorialIndex = configGroup.normal.indexOf(config);
      let tutorialText = "";

      config.tutorialText.forEach(element => {
         tutorialText = tutorialText + `<div class="g-tutorial-window-card-text g-tutorial-modal-text"> ${element}</div>`;

      });

      for (let i = 0; i < configGroup.normal.length; i++)
         dotGroupHtml +=
            currentTutorialIndex === i
               ? `<div class="g-tutorial-processing-dot g-tutorial-processing-dot-current"></div>`
               : `<div class="g-tutorial-processing-dot g-tutorial-processing-dot-inactive"></div>`;

      let tutorialHtml = ` <div class="g-tutorial-window g-tutorial-window-${isWarning ? "warning" : "normal"
         } g-rtl-left-pos" style="${typeof config.position.top !== "undefined"
            ? "top: " + config.position.top + "px;"
            : ""
         } 
           ${typeof config.position.xpos !== "undefined"
            ? "--xpos: " + config.position.xpos + "px;"
            : ""
         }
           ">
           <i class="g-tutorial-window-info fas fa-info-circle g-rtl-left-pos ${isWarning ? '' : 'g-hide'
         }"></i>
     
           <span class="g-tutorial-window-top-right-tri-group${config.trianglePosition === "topRight" ? '' : ' g-hide'
         }">
              <span class="g-tutorial-window-tri g-tutorial-window-top-right-tri g-rtl-left-pos"></span>
              <span class="g-tutorial-window-tri g-tutorial-window-top-right-tri g-tutorial-window-top-tri-border  g-rtl-left-pos"></span>
           </span>
           <span class="g-tutorial-window-top-left-tri-group${config.trianglePosition === "topLeft" ? '' : ' g-hide'
         }">
              <span class="g-tutorial-window-tri g-tutorial-window-top-left-tri g-rtl-left-pos"></span>
              <span class="g-tutorial-window-tri g-tutorial-window-top-left-tri g-tutorial-window-top-tri-border g-rtl-left-pos"></span>
           </span>
           <span class="g-tutorial-window-left-tri-group${config.trianglePosition === "left" ? '' : ' g-hide'
         }">
              <span class="g-tutorial-window-tri g-tutorial-window-left-tri g-rtl-left-pos"></span>
              <span class="g-tutorial-window-tri g-tutorial-window-left-tri g-tutorial-window-left-tri-border g-rtl-left-pos"></span>
           </span>
           <span class="g-tutorial-window-right-tri-group${config.trianglePosition === "right" ? '' : ' g-hide'
         }">
              <span class="g-tutorial-window-tri g-tutorial-window-right-tri g-rtl-right-pos"></span>
              <span class="g-tutorial-window-tri g-tutorial-window-right-tri g-tutorial-window-right-tri-border g-rtl-right-pos"></span>
           </span>
           <span class="g-tutorial-window-bottom-right-tri-group${config.trianglePosition === "bottomRight" ? '' : ' g-hide'
         }">
              <span class="g-tutorial-window-tri g-tutorial-window-bottom-right-tri g-rtl-left-pos"></span>
              <span class="g-tutorial-window-tri g-tutorial-window-bottom-right-tri g-tutorial-window-bottom-right-tri-border  g-rtl-left-pos"></span>
           </span>
     
     
           <div class="g-tutorial-window-content" data-current-page=${config.dataTarget !== undefined ? "'" + config.dataTarget + "'" : ''}>
              <div class="g-tutorial-window-card">
                 <img class="g-avatar-img g-rtl-img g-avatar-medium" src="images/fitness-avatar.png" />
                 <div class="g-tutorial-window-card-text g-tutorial-modal-text">
                 ${tutorialText}
                 </div>
              </div>
     
              <div class="g-tutorial-window-buttom-group">
    
                 <div class="g-tutorial-window-back-button${config.index === 0 ? "-off" : ""
         }">
    
                 ${config.index === 0 ? "" : "Back"
         }
                 
                 </div>
     
                 <div class="g-tutorial-dots-holder">
     
                  ${dotGroupHtml}
                 </div>
     
                 <button class="g-btn  g-tutorial-window-next-button g-tutorial-window-next-button-${configGroup.normal.indexOf(
            config
         )}"><span data-am-translate="p1.tutorial.window.forward" data-wysiwyg="false" data-am-translate-group="p1.tutorial.window">Forward</span></button>
     
              </div>
     
           </div>
        </div>`;

      $(renderElementIdClompleted).html(tutorialHtml);

      $(".g-tutorial-window-next-button").click(() => {
         //don't do anything for robot arm for now
         if ($("#task").attr('data-module') == 'RobotArm') { return; }
         else if ($("#task").attr('data-module') == 'TransportPod') { return; }

         let nextTutorialConfigGroup = configGroup;

         if (currentTutorialIndex !== configGroup.normal.length - 1) {
            if (
               typeof actionRequiredList[currentTutorialIndex] !== "undefined" &&
               actionRequiredList[config.requireActionIndex]()
            ) {

               let dataToSave = {
                  "event_type": "tutorial_forward_clicked",
                  "event_location": "tutorial_window_" + getWindowIndex(config.index),
                  "event_prev": null,
                  "event_result": "did_required_activity"
               };

               me.saveEvents(dataToSave);

               configGroup.normal[currentTutorialIndex].requireAction = false;
            }

            if (configGroup.normal[currentTutorialIndex].requireAction) {

               if (configGroup.warning.length > 0) {
                  nextTutorialConfigGroup.normal[currentTutorialIndex].tutorialText = configGroup.warning[currentTutorialIndex].warningText;
               }

               let dataToSave = {
                  "event_type": "tutorial_forward_clicked",
                  "event_location": "tutorial_window_" + getWindowIndex(config.index),
                  "event_prev": null,
                  "event_result": "did_not_do_required_activity"
               };

               me.saveEvents(dataToSave);

               me.renderTutorialWindow(
                  renderElementId,
                  nextTutorialConfigGroup,
                  actionRequiredList,
                  true,
                  finishModalClass
               );
            } else {

               let dataToSave = {
                  "event_type": "tutorial_forward_clicked",
                  "event_location": "tutorial_window_" + getWindowIndex(config.index),
                  "event_prev": null,
                  "event_result": "to_next_window"
               };

               me.saveEvents(dataToSave);

               nextTutorialConfigGroup.normal[
                  currentTutorialIndex
               ].isCurrent = false;

               nextTutorialConfigGroup.normal[
                  currentTutorialIndex + 1
               ].isCurrent = true;

               me.renderTutorialWindow(
                  renderElementId,
                  nextTutorialConfigGroup,
                  actionRequiredList,
                  false,
                  finishModalClass
               );
            }
         }

         if (currentTutorialIndex == configGroup.normal.length - 1) {

            if (config.requireAction && actionRequiredList[config.requireActionIndex]()) {


               let dataToSave = {
                  "event_type": "tutorial_forward_clicked",
                  "event_location": "tutorial_window_" + getWindowIndex(config.index),
                  "event_prev": null,
                  "event_result": "show_well_done"
               };

               me.saveEvents(dataToSave);

               me.renderTutorialWindow(
                  renderElementId,
                  nextTutorialConfigGroup,
                  actionRequiredList,
                  false,
                  finishModalClass
               );

               $(renderElementIdClompleted).addClass("g-hide");

               if (finishModalClass != "") //if no finish ModalClass pass in do nothing
                  Sonet.Util.showModal(finishModalClass);
               //if is the final modal, remove check-tutorial finish class
               $('#task').removeClass('p1-confirm-tutorial').removeClass('p1-check-finish');

               $(".g-tutorial-window-return-to-item-button").on("click", () => {
                  $(renderElementIdClompleted).removeClass("g-hide");
               });
            }
            if (typeof actionRequiredList[config.requireActionIndex] == 'function' && !actionRequiredList[config.requireActionIndex]()) {
               me.renderTutorialWindow(
                  renderElementId,
                  nextTutorialConfigGroup,
                  actionRequiredList,
                  true,
                  finishModalClass
               );
            }

            if (!config.requireAction) {

               let dataToSave = {
                  "event_type": "tutorial_forward_clicked",
                  "event_location": "tutorial_window_" + getWindowIndex(config.index),
                  "event_prev": null,
                  "event_result": "show_well_done"
               };

               me.saveEvents(dataToSave);

               me.renderTutorialWindow(
                  renderElementId,
                  nextTutorialConfigGroup,
                  actionRequiredList,
                  false,
                  finishModalClass
               );
               $(renderElementIdClompleted).addClass("g-hide");
               if (finishModalClass != "") //if no finish ModalClass pass in do nothing
                  Sonet.Util.showModal(finishModalClass);
               //if is the final modal, remove check-tutorial finish class
               $('#task').removeClass('p1-confirm-tutorial').removeClass('p1-check-finish');

               $(".g-tutorial-window-return-to-item-button").on("click", () => {
                  $(renderElementIdClompleted).removeClass("g-hide");
               });

            }



         }


      });
      $(".g-tutorial-window-back-button").on("click", () => {

         let nextTutorialConfigGroup = configGroup;


         let dataToSave = {
            "event_type": "tutorial_back_clicked",
            "event_location": "tutorial_window_" + getWindowIndex(config.index),
            "event_prev": null,
            "event_result": "clicked"
         };

         me.saveEvents(dataToSave);

         if (currentTutorialIndex != 0) {

            nextTutorialConfigGroup.normal[
               currentTutorialIndex
            ].isCurrent = false;

            nextTutorialConfigGroup.normal[
               currentTutorialIndex - 1
            ].isCurrent = true;

            me.renderTutorialWindow(
               renderElementId,
               nextTutorialConfigGroup,
               actionRequiredList,
               false,
               finishModalClass

            );
         }
      });
   },



   setTutorialConfig(tutorialClassName, warningClassName) {
      let tutorialConfig = { normal: [], warning: [] };
      $("." + tutorialClassName).each((index, value) => {
         //   console.log(Object.values(value.children).map(item=>item));
         tutorialConfig.normal.push({
            index,
            //  tutorialText: value.innerText.trim(),
            tutorialText: Object.values(value.children).map(item => item.outerHTML),
            requireAction: value.dataset.actionRequired === "true",
            requireActionIndex: Number(value.dataset.requiredActionIndex),
            trianglePosition: value.dataset.trianglePosition,
            dataTarget: value.dataset.target,

            position: {
               top: value.dataset.positionTop,
               xpos: value.dataset.positionXpos,
            },
            isCurrent: value.dataset.isCurrent === "true",
         });
      });

      $("." + warningClassName).each((index, value) => {
         //   console.log(value);
         tutorialConfig.warning.push({
            index,
            warningText: Object.values(value.children).map(item => item.outerHTML),
            trianglePosition: value.dataset.trianglePosition,
            requireAction: value.dataset.actionRequired === "true",
            requireActionIndex: Number(value.dataset.requiredActionIndex),
            attachedToTutorial: Number(value.dataset.attachedToTutorial),
            dataTarget: value.dataset.target
         });
      });

      return tutorialConfig;
   },
   timeConverter(UNIX_timestamp) {
      let time = new Date(UNIX_timestamp);
      return time.getFullYear() + "-" + ('0' + (time.getMonth() + 1)).slice(-2) + "-" + ('0' + time.getDate()).slice(-2) + " " + ('0' + time.getHours()).slice(-2) + ":" + ('0' + time.getMinutes()).slice(-2) + ":" + ('0' + time.getSeconds()).slice(-2) + '.' + String(UNIX_timestamp).slice(-3);
   },



   // to load the content on page refresh or reload 
   loadResults: function () {
      var me = this,
         scormApi = Sonet.am.scorm.ScormWrapper,
         task = $('#task');

      $('.g-styled-select.g-styled-opts').each(function () {
         me.setSelectedOption(this);
      });

      // load the state of any reveal bubbles we have saved
      $('.g-reveal-bubble[data-id]').each(function () {
         let saveId = $(this).data('id'),
            state = scormApi.getInteraction(saveId);
         if (Number.isInteger(state)) {
            me.revealBubble(this, true, true);
         }
      });

      // load the number of retries 
      if (Number.isInteger(task.data('max-attempts'))) {
         let saveId = task.data('itemid') + 'R',
            retries = scormApi.getInteraction(saveId);
         task.data('retries', Number.isInteger(retries) ? retries : 0);
      }

      // check if we have item specific load function
      if (me.module[me.task.data('itemid') + '_loadResults']) {
         me.module[me.task.data('itemid') + '_loadResults']();
      }
      // check if we have a module specific load function
      if (me.module['loadResults']) {
         me.module['loadResults']();
      }
   },

   // to save the result in the database
   saveResults: function () {
      let me = this,
         scormApi = Sonet.am.scorm.ScormWrapper;

      // check if we have item specific save function
      if (me.module[me.task.data('itemid') + '_saveResults']) {
         me.module[me.task.data('itemid') + '_saveResults']();
      }
      // check if we have a module specific save function
      if (me.module['saveResults']) {
         me.module['saveResults']();
      }

      // save the state of any reveal bubbles we have set a data-id attribute on
      $('.g-reveal-bubble[data-id]').each(function () {
         let id = $(this).data('id'),
            pos = scormApi.getInteractionPos(id);
         scormApi.setValue('cmi.interactions.' + pos + '.id', id);
         scormApi.setValue('cmi.interactions.' + pos + '.type', 'other');
         scormApi.setValue('cmi.interactions.' + pos + '.learner_response', $(this).data('state') ? $(this).data('state') : "");
      });

      // save the number of retries 
      if (Number.isInteger(me.task.data('retries'))) {
         let id = me.task.data('itemid') + 'R',
            pos = scormApi.getInteractionPos(id);
         scormApi.setValue('cmi.interactions.' + pos + '.id', id);
         scormApi.setValue('cmi.interactions.' + pos + '.type', 'other');
         scormApi.setValue('cmi.interactions.' + pos + '.learner_response', me.task.data('retries'));
      }

      // save success states
      if (me.task.data('success-id') != null) {
         let id = me.task.data('success-id'),
            pos = scormApi.getInteractionPos(id);
         scormApi.setValue('cmi.interactions.' + pos + '.id', id);
         scormApi.setValue('cmi.interactions.' + pos + '.type', 'other');
         scormApi.setValue('cmi.interactions.' + pos + '.learner_response', me.task.data('success') == null ? "" : me.task.data('success'));
      }

      // save solution evaluation
      if (me.task.hasClass('p1-help-stats') && $("#task").attr("data-progress") == 'lc' && ($("#task").hasClass('p1-m1') || $("#task").hasClass('p1-m2'))) {
         let answer = $("#solultion_eval input[type='radio']:checked").val();
         let id = 'solution_eval',
            pos = scormApi.getInteractionPos(id);
         scormApi.setValue('cmi.interactions.' + pos + '.id', id);
         scormApi.setValue('cmi.interactions.' + pos + '.type', 'other');
         scormApi.setValue('cmi.interactions.' + pos + '.learner_response', answer == null ? "" : answer);
      }

   },

   runBlocklyProgram: function (targetClass, blocklyObj, target, answerStep, onComplete = function () { }, checkBeforeStart = function () { return true; }) {
      let endResult = '';
      // reset the state before runs
      this.resetWorld(targetClass, blocklyObj, target);
      //check button text to see if should run or just reset
      if (!$(targetClass + " .blockly-run-btn").hasClass("g-hide")) {
         $(targetClass + " .blockly-run-btn").addClass("g-hide");
         $(targetClass + " .blockly-reset-btn").removeClass("g-hide");
         event_type = 'run';
         $(targetClass + " i").removeClass("fa-play").removeClass("fa-undo");

         //check if there is any check to be done before run
         if (!checkBeforeStart()) {
            return;
         }

         if (targetClass == '.g-btn-blockly-main') {
            //quick run program to get the result of the program first for recording/event data saving
            endResult = blocklyObj.quickRunCode(target.data("object"), function () { }, 'when_run');
            //reset
            this.resetWorld(targetClass, blocklyObj, target);
         }

         //run the program step by step
         blocklyObj.runCode(target.data("object"), onComplete, 'when_run');
      } else {
         $(targetClass + " .blockly-reset-btn").addClass("g-hide");
         $(targetClass + " .blockly-run-btn").removeClass("g-hide");
         event_type = 'reset';
         $(targetClass + " i").removeClass("fa-undo").removeClass("fa-play");
         $(targetClass).find('.error-container').addClass('g-hide');
      }

      //save event data
      data = {
         "event_type": event_type,
         "event_location": targetClass,
         "event_prev": endResult,
         "event_result": (targetClass == '.g-btn-blockly-main' && event_type == 'run' ? $('.g-blockly').data('obj').toXML() : null)
      };
      this.saveEvents(data);
   },

   resetWorld: function (targetClass, obj, target) {
      $(targetClass).removeClass('g-blockly-correct');
      obj.resetCode();
      target.data("object").reset();
   },

   saveEvents: function (data) {
      Sonet.am.widgets.eventTracker.saveData({
         "ts": Sonet.Util.getTimeStamp(),
         'a': data['event_type'],
         'id': data['event_location'],
         'd': data['event_result']
      });
   }
}