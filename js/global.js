var saveCallback, logoffCallback, testWindow;
var lT = new Date().getTime();
Sonet.am.App = {
   RESOURCE_URL: "images/",

   mode: null,
   launchData:'',
   scormId:'',
   activityId:'',
   lang:'',
   toLogoff:false,
   readingTimer: false,
   timer: 'inherit',
   exitOnTimeComplete: true,
   next: true,
   previous: true,
   pause: 'inherit',
   themes: 'inherit',
   checkLanguage: '',
   titled: null,
   learnerData: null,
   navigationObj: null,
   isTouchDevice:(navigator.platform.indexOf("iPad") != -1 || navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPod") != -1),
   adaptive: false,
   scormApi: Sonet.am.scorm.ScormWrapper,
   exportResponses:false,
   ozplayerLanguages: ['en','sv'],
   filePath:{
      tinymce:{
         js: '/js/common/tinymce/tinymce.min.js',
         angular: '/js/common/tinymce/angular-ui-tinymce.js'
     },
   },

   beforeLoad: function () {
      var me = this, body = $('body');

      me.parent = window.parent;
      me.engineUrl = $(me.parent.document).find('body').attr('data-lms-url');
      me.runType = $(me.parent.document).find('iframe').attr('data-run-type');
      me.path = $(me.parent.document).find('iframe').attr('data-path');
      me.username = $(me.parent.document).find('iframe').attr('data-username');
      me.runningMode = $(me.parent.document).find('iframe').attr('data-mode');
      me.runModeNavigation = $(me.parent.document).find('iframe').attr('data-navigation');
      me.isHoldings = $(me.parent.document).find('iframe').attr('data-isHolding');
      me.loadNextItem = $(me.parent.document).find('iframe').attr('data-load');

      // Add a class to the body to indicate if navigation needs to be disabled
      // data-navigation is set in rte.js
      if (me.runModeNavigation === 'false') {
         body.addClass('navigation-disabled');
      }

      body.find('.am-username').html(me.username);

      if (typeof me.runningMode !== 'undefined') {
         body.attr('data-mode', me.runningMode);
      }
      try {
         if (me.runningMode == "preview" && $(me.parent.parent.document).find("iframe").hasClass('cannot-edit-script')) {
            body.addClass("cannot-edit-script");
            $(".extended_text_interaction textarea").attr("disabled", true);
            $(".mixed-inline input[type=text]").attr('disabled', true);
         }
      } catch (error) {
         body.addClass("cannot-edit-script");
         $(".extended_text_interaction textarea").attr("disabled", true);
      }
      if ($('.g-application > .g-mask-cover').length === 0 && !body.hasClass("login-page")) {
         $('.g-application').append('<div class="g-mask-cover">'+
            '<div class="g-application-mask"></div>'+
            '<div class="g-dialog-holder">'+
               '<div class="g-dialog-centering"></div>'+
               '<div class="g-dialog">'+
                  '<table class="g-dialog-details loading">'+
                     '<tr>'+
                        '<td class="content">'+
                           '<div class="am-loading-text">Loading</div> '+
                           '<div class="am-loading-spinner">'+
                              '<div class="am-loading-rect1"></div>'+
                              '<div class="am-loading-rect2"></div>'+
                              '<div class="am-loading-rect3"></div>'+
                              '<div class="am-loading-rect4"></div>'+
                              '<div class="am-loading-rect5"></div>'+
                           '</div>'+
                        '</td>'+
                     '</tr>'+
                  '</table>'+
               '</div>'+
            '</div>'+
         '</div>');
      }
      
      Sonet.Util.ajaxInterceptToInsertSessionToken();
      $(".am-translation-added").removeClass("am-translation-added");
      Sonet.I18n.populateTranslation();
   },

   init: function() {
      var me = this,
         body = $('body'),
         task = $('#task'),
         itemManager = Sonet.am.scorm.ItemManager,
         learnerLanguage = Sonet.am.scorm.ScormWrapper.getDataStore('learner_language', true),
         languageCode = learnerLanguage && learnerLanguage.preference ? learnerLanguage.preference : 'default';

      if (languageCode !== 'default') {
         body.attr('data-language-code', languageCode);
      }

      if(body.hasClass('track-events')) {
         Sonet.am.widgets.eventTracker.init();
      }

      if ( body.hasClass('login-page') ) {
         me.runLogin();
      } else if ( body.hasClass('item-selection') ) {
         me.runSelection();
      } else if ( !body.hasClass('edit-mode') ) {
         me.mode = Sonet.am.scorm.ScormWrapper.getValue('cmi.mode');
         me.adaptive = Sonet.am.scorm.ScormWrapper.getValue('cmi.adaptive');
         me.learnerData = Sonet.am.scorm.ScormWrapper.getDataStore('learner_data', true);

         // get the shared data store
         me.launchData = $.parseJSON(Sonet.am.scorm.ScormWrapper.getValue('cmi.launch_data'));
         if (me.mode === Sonet.constants.MODE.NORMAL) {
            if (me.launchData != null && me.launchData.saveInterval) {
               var saveInt = parseInt(this.launchData.saveInterval);
               saveCallback = window.setInterval(function () {
                  Sonet.am.scorm.ItemManager.saveResults();
                  Sonet.am.scorm.ScormWrapper.commit();
               }, saveInt * 1000);
            }
         } else {
            // set the class on the body tag based on the mode so we can adjust the view
            body.addClass(me.mode);
         }

         if(me.launchData) {
            var data = ["enableDictionary","dictionary","highlighter", "textreader", "calculator", "calcTypes", "ruler", "protractor", "tip", "notes", "pause", "pauseTimeLimit", "feedback", "checkAnswer", "progressIfComplete", "themes", "themePicker", "previous", "next", "nextText", "navigation", "timer", "module", "readingTimer", "readingTimerModule", "exitOnTimeComplete", "scormId", "rules", "activityId", "jumpTo", "toLogoff", "current", "totalItems", "isQuestion", "titled", "testletItems", "testletCfg", "warningTime", "branchType", "timeOutJumpTo", "readingTimeOutJumpTo", "checkSpelling", "checkGrammar", "checkLanguage", "includeLanguages", "excludeLanguages","exportResponses"];
            for(var i in data) {
               if(me.launchData[data[i]] != undefined) {
                  me[data[i]] = me.launchData[data[i]];
               }
            }
         }

         function getTestletIdFromScormId(scorm_id) {
            if(typeof scorm_id !== "undefined" && scorm_id !== null) { 
               var data = scorm_id.split('_');
               if (data.length === 3) {
                  return data[0];
               } else if (data.length > 3) {
                  return data[0] + '_' + data[1];
               }
            }
            return null;
         }

         function getItemIdFromScormId(scorm_id) {
            if(typeof scorm_id !== "undefined" && scorm_id !== null) {
               var data = scorm_id.split('_');
               if (data.length > 2) {
                  return data[data.length - 2] + '_' + data[data.length - 1];
               }
            }
            return null;
         }

         if (me.timeOutJumpTo) {
            var apiWin = Sonet.am.scorm.ScormWrapper.findAPIWindow(window);
            var apidata = apiWin.sonet.scorm.rte.activityTree.root != undefined ? apiWin.sonet.scorm.rte.activityTree.root.children:[];
            var timeOutJumpToItemExists = false;
            $.each(apidata, function (idx, data) {
                if(data.scormId == me.timeOutJumpTo) {
                   timeOutJumpToItemExists = true;
                }
            });

            if (!timeOutJumpToItemExists) {
               var subtestletid = getItemIdFromScormId(me.timeOutJumpTo);
               var apiWin = Sonet.am.scorm.ScormWrapper.findAPIWindow(window);
               var apidata = apiWin.sonet.scorm.rte.activityTree.root != undefined ? apiWin.sonet.scorm.rte.activityTree.root.children:[];
               var timeoutitemfound = false;
               $.each(apidata, function (idx, data) {
                  if(!timeoutitemfound && (getTestletIdFromScormId(data.scormId) == subtestletid)) {
                     me.timeOutJumpTo = data.scormId;
                     timeoutitemfound = true;
                  }
               });
            }
         }

         // Overriding organisation settings with assessment settings set at learner org level
         if(me.learnerData) {
            var data = ["pause", "themes"];
            for(var i in data) {
               if (me.learnerData[data[i]]) {
                  me[data[i]] = me.learnerData[data[i]];
               }
            }
         }

         // Overriding organisation settings with assessment settings set at learner org level, when the keys in learner and launch data are different
         if(me.learnerData) {
            var data = {"pause_time_limit" : "pauseTimeLimit"}
            for(var key in data) {
               if (me.learnerData[key]) {
                  me[data[key]] = me.learnerData[key];
               }
            }
         }

         // If true than only proceeds to next item when response is not incomplete
         if(me.progressIfComplete) {
            Sonet.am.activateNextOnComplete = true;
         }

         Sonet.am.showLoading = true;

         var counter = $('.g-counter');
         if (me.adaptive && me.navigation === "none" && counter.length > 0) {
            $('.g-counter').html($('.g-counter').html().replace(/(<span>)?\s*of[^<]*(<\/span>)?<span class="total">[0-9]+<\/span>/g, '<span class="total"></span>'));
            counter.find('.current-text,.current').html(me.current);
         } else if (me.totalItems && (me.navigation == undefined || me.navigation == "paginate") && (me.isQuestion !== "no")) {
            counter.find('.current').html(me.current).attr('title', 'Question ' + this.current + ' of ' + me.totalItems);
            counter.find('.current-text').html(me.current);
            counter.find('.total').html(me.totalItems);
            counter.show();
         } else {
            counter.hide();
         }
         if(me.testletItems && me.navigation == undefined && typeof Sonet.am.widgets.Navigation !== 'undefined') {
            me.navigationObj = new Sonet.am.widgets.Navigation();
            me.enableNavigation();
         }

         if ( me.testletItems && me.navigation == 'none' && typeof Sonet.am.widgets.Status !== 'undefined' ) {
            itemManager.items['status'] = new Sonet.am.widgets.Status();
         }

         if (Sonet.am.widgets.FlagComponents) {
            itemManager.items['flagComponents'] =  Sonet.am.widgets.FlagComponents;
         }

         // Adding timer to item manager
         if (!me.runReadingTimer && Sonet.am.widgets.StopWatch) {
            itemManager.items['timer'] = Sonet.am.widgets.StopWatch;
            itemManager.items['timer'].init();
         }

         // Adding focusTracking to item manager
         if (!me.runReadingTimer && Sonet.am.widgets.FocusTracking && Sonet.am.App.mode === Sonet.constants.MODE.NORMAL && me.runType !== 'practitioner') {
            itemManager.items['focusTracking'] = Sonet.am.widgets.FocusTracking;
            itemManager.items['focusTracking'].init();
         }

         var holder = $('.holding-password');
         if(holder.length != 0) {
            me.initPassword();
         } else {
            // Enable Next navigation.
            me.enableNext();
         }

         // flag item
         var flagBtn = $(".g-flag");
         if(flagBtn.length != 0) {
            me.initFlagBtn();
         }

         // Enable Previous navigation.
         me.enablePrevious();
         me.restrictPage();

         $('.am-qti-modal').each(function() {
            $(this).appendTo($(".g-application"));
         });

         // allow registering classes at the individul task level
         for (i = 0; i < itemManager.types.length; i++) {
            if (task.hasClass(itemManager.types[i].cls)) {
               body.addClass(itemManager.types[i].cls);
            }
         }

         itemManager.init(this);

         if(body.hasClass('undo-manager')) {
            itemManager.enableUndo();
         }
      
         // Setting assessment title
         if(me.testletCfg && me.testletCfg.info) {
            $.each(me.testletCfg.info, function (testletID, info) {
               if(info.org === true) {
                  $('.activity-group-title').html(info.title);
               }

               if(me.navigationObj && me.navigationObj.flatNavigation) {
                  if(info.org === true) {
                     $('.am-testlet-title').html(info.title);
                  }
               } else {
                  if(testletID === me.testletCfg.current) {
                     $('.am-testlet-title').html(info.title);
                  }
               }
            });
         }

         me.initPause();

         $('img[data-image-src]').each(function() {
            var imgNode = this,
               imgEl = $(this),
               altImgAttr = null,
               srcImgAttr = imgNode.getAttribute("data-image-src");

            // load and error event should be added before src is set for image
            imgNode.onload = function() {
               imgEl.addClass("am-img-loaded");
            };
            imgNode.onerror = function() {
               imgEl.addClass("am-img-load-error");
            };

            if ((!srcImgAttr || srcImgAttr.length === 0) && imgNode.getAttribute("src")) {
               // If you have no data, use the src attribute if it exists.
               srcImgAttr = imgNode.getAttribute("src");
               // Save the src into the data-image-src attribute, in case it is needed later.
               imgNode.setAttribute('data-image-src', srcImgAttr);
            }
            if (srcImgAttr && altImgAttr) {
               imgNode.setAttribute('src', srcImgAttr);
            } else if (srcImgAttr) {
               imgNode.setAttribute('src', srcImgAttr);
            }
         });

         // Initialising language selector widget
         if(Sonet.am.widgets.LanguageSelector) {
            var languageSelector = new Sonet.am.widgets.LanguageSelector();
         }

         me.initModal();
         me.initScrollTo();
         //validate password should be the last excuted function as it replace the click event of next button
         me.validatePassword();

         function loadComplete() {
            var totalWYSIWYGEditors = $('.short-answer-response.editor:not(.wiris)').length,
               totalRenderedWYSIWYGEditors = $('.short-answer-response.editor.editor-rendered').length,
               totalImages = $("img[data-image-src]:not(.g-resource-container img)").length,
               totalRenderedImages = $("img[data-image-src].am-img-loaded:not(.g-resource-container img), img[data-image-src].am-img-load-error:not(.g-resource-container img)").length;

            // Evaluates item language configuration and determines if the item will be skipped
            // based on the Include Languages and Exclude Languages configured in the item properties of the Testlet
            let itemIsShown = me.evaluateItemLanguages();

            if (totalWYSIWYGEditors === totalRenderedWYSIWYGEditors
               && totalImages === totalRenderedImages
               && itemIsShown ) {

               // After components are loaded, restricts keys
               me.restrictKeys(false);

               $('body').addClass('am-load-complete');
               $(Sonet).trigger('am-load-complete');


            } else {
               setTimeout(loadComplete, 50);
            }

         }
         loadComplete();
               // After components are loaded, restricts keys
               me.restrictKeys(false);

               $('body').addClass('am-load-complete');
               $(Sonet).trigger('am-load-complete');

      } else if (body.hasClass('translation-mode')) {
         function loadCompleteForTranslationMode() {
            var totalWYSIWYGEditors = $('itemBody .c-html').length,
               totalRenderedWYSIWYGEditors = $('itemBody .c-html.editor-rendered').length;

            if (totalWYSIWYGEditors === totalRenderedWYSIWYGEditors) {
               body.addClass('am-load-complete');
               $(Sonet).trigger('am-load-complete');
            } else {
               setTimeout(loadCompleteForTranslationMode, 50);
            }
         }
         loadCompleteForTranslationMode();
      }

      if ($('body').hasClass('engine') || $('body').hasClass('preview-mode') || $('body').hasClass('edit-mode')) {
         Sonet.Util.waitUntilSatisfied( function bodyIsVisible () {
            return $('body').is(':visible');
         }, function bodyIsVisible () {
            $(Sonet).trigger('am-body-visible');
         }, 500, this )();
      }
      
      if(navigator.onLine) {
         me.holding();
      }
   },

   restrictPage: function() {
      var me = this;

      // Restrict keys and click keys for the item page
      me.restrictKeys(true);

      $(Sonet).trigger('beforeClipboardInit');
      // enable local clipboard
      if (me.runningMode !== "preview" && $('body').hasClass('clipboard') && typeof Sonet.am.widgets.ClipboardHelper !== 'undefined'){
         Sonet.am.widgets.ClipboardHelper.init(window.document, true);
         var clipboardData = sessionStorage.getItem('clipboardData') ? JSON.parse(sessionStorage.getItem('clipboardData')) : {};
         if (!$.isEmptyObject(clipboardData)) {
            Sonet.am.widgets.ClipboardHelper.setClipboard(clipboardData.text);
            Sonet.am.widgets.ClipboardHelper.setClipboardHtmlData(clipboardData.html);
         }
      }

      // disable browser back using backspace but dont block in input
      shortcut.add('backspace',function(){}, {
         disable_in_input:true,
         'target':window.document
      });

      $(window.document).bind("contextmenu",function(){
         return false;
      });

      window.document.onhelp = function () {
         return false;
      };

      var lastUserInputWasBackspace = false;
      $(document).keydown(function(event){
          lastUserInputWasBackspace = event.which == 8 ? true : false;
      });
      $(document).mousedown(function(){
          lastUserInputWasBackspace = false;
      });
      $(window).on('beforeunload', function(){
          /*if (lastUserInputWasBackspace) {
              if (Sonet.I18n.translations[Sonet.am.App.lang] && Sonet.I18n.translations[Sonet.am.App.lang].BEFORE_UNLOAD) {
                  return Sonet.I18n.translations[Sonet.am.App.lang].BEFORE_UNLOAD;
              } else {
                  return "We have detected a backspace navigation event. Are you sure you want to leave the test?";
              }
          }*/
      });
      // prevent drag data from other application(word, browser etc.)
      $('.short-answer-response').on("dragover dragenter drop", function(e) {
            if(!document.hasFocus()) {
               e.preventDefault();
               return false;
            }
         });
      //firefox
      $('.short-answer-response').each(function(){
         $(this)[0].addEventListener("drop", function(e) {
            if(!document.hasFocus()) {
               e.preventDefault();
               return false;
            }
         });
      });
   },

   /**
    * Restricts keys and click keys events
    * @param forPage Set to true if called from restrictPage(), false if called from loadComplete()
    * @returns {{disabledKeys: [], disabledClickKeys: []}}
    */
   restrictKeys: function restrictKeys(forPage) {
      var me = this;

      // Disabled keys defined in util.js or updated by the template's JS
      var removeKeys = Sonet.constants.DISABLED_KEYS.map( function mapFn ( key ) {
         // Make sure the keys are trimmed and in lower case for consistency
         return $.trim( key ).toLowerCase();
      } );

      // Disable keys with click
      var removeClickKeys = removeKeys.filter( function filterFn(key) {
         return key.indexOf('click') !== -1;
      });

      // Keys that should always be enabled on inputs
      var alwaysEnableOnInputs = [
         'space',
         'shift+space',
         'home',
         'end',
      ];

      // Keys that should not be disabled when template has clipboard widget
      var clipboardKeysEnabled = [
         'ctrl+c',
         'ctrl+v',
         'ctrl+x',
         'ctrl+a',
         'ctrl+z',
         'ctrl+y',
         'meta+c',
         'meta+v',
         'meta+x',
         'meta+a',
         'meta+z',
         'meta+y'
      ];

      var $componentsWithIFrame = $('iframe');

      if(me.runType != 'review' && me.runningMode !== "preview") {

         if ($('body').hasClass('clipboard')){
            // Remove the key from the disabled keys if found in the clipboardKeysEnabled
            removeKeys = removeKeys.filter( function filterFn ( key ) {
               return clipboardKeysEnabled.indexOf( key ) === -1;
            } );
         }

         if (forPage) { // Restrict for item's page

            $.each(removeKeys, function(i, elem) {

               var disable_in_input = true;
               if (alwaysEnableOnInputs.indexOf(elem)) {
                  disable_in_input = false;
               }

               shortcut.add(elem, function() {}, {
                  disable_in_input:disable_in_input,
                  'target': window.document
               });

            });

         } else { // Restrict for component's iframe

            // Remove the key from the disabled keys if found in the alwaysEnableOnInputs
            removeKeys = removeKeys.filter( function filterFn ( key ) {
               return alwaysEnableOnInputs.indexOf( key ) === -1;
            } );

            // Loop through each components' iframes
            $componentsWithIFrame.each( function eachFn () {
               var iFrame = this;
               $.each(removeKeys, function(i, elem) {

                  var disable_in_input = true;
                  if (alwaysEnableOnInputs.indexOf(elem)) {
                     disable_in_input = false;
                  }

                  shortcut.add( elem, function () {
                  }, {
                     disable_in_input: disable_in_input,
                     'target': iFrame.contentWindow
                  } );

               });

            } );

         }

      }

      // Split the key combo and convert to an object with ctrl, shift, alt, meta, left_click, and right_click props
      removeClickKeys = removeClickKeys.map(function mapFn(keys) {
         return keys.split('+').reduce(function reduceFn(acc, key) {
            if (acc[key] !== undefined) {
               // Property is found -- set as true
               acc[key] = true;
            }
            return acc;
         }, {
            ctrl: false,
            shift: false,
            alt: false,
            meta: false,
            left_click: false,
            right_click: false
         });
      });

      // Click event handler
      var clickHandler = function(e) {

         for(var idx in removeClickKeys) {
            if (!removeClickKeys.hasOwnProperty(idx)) return;

            var removeClickKey = removeClickKeys[idx];

            // Check if the keys all match
            if (e.ctrlKey === removeClickKey.ctrl && e.shiftKey === removeClickKey.shift &&
                e.altKey === removeClickKey.alt && e.metaKey === removeClickKey.meta && removeClickKey.left_click) {
               // Disable event
               return false;
            }
         }

      };

      if (forPage) { // Restrict for item's page
         // Disable clicks with other keys pressed (e.g ctrl+left_click)
         $('a').click(clickHandler);
      } else { // Restrict for component's iframe
         $componentsWithIFrame.each( function eachFn () {
            $(this).find('a').click(clickHandler);
         });
      }

      // Return the disabled keys and click keys
      return {
         disabledKeys: removeKeys,
         disabledClickKeys: removeClickKeys
      }

   },

   runSelection: function() {
      this.restrictPage();
      this.setResolution();

      var scormApi = Sonet.am.scorm.ScormWrapper;

      $('#main-content').css('visibility','visible');

      $('.logoff').click(function(e){
         scormApi.setValue('adl.nav.request', 'exitAll');
         scormApi.setValue('cmi.exit', 'exit');
         scormApi.terminate();
         e.preventDefault();
      });

      $('.choice-link').click(function(e) {
         scormApi.setValue('adl.nav.request', '{target='+$(this).attr('data-target')+'}jump');
         scormApi.setValue('cmi.exit', 'exit');
         scormApi.terminate();
         e.preventDefault();
      });
   },

   initPassword: function() {
      var me = this,
         holder = $('.holding-password'),
         pwd = holder.attr('data-password');

      $('.g-next').click(function() {
         if((pwd.length < 10 && holder.val() === pwd) || (pwd.length >= 10 && Sonet.Util.md5(holder.val()) === pwd)) {
            $('.holding-password-invalid-txt').hide();
            Sonet.am.scorm.ItemManager.terminate('continue');
         } else {
            $('.holding-password-invalid-txt').show();
         }
      });
   },

   showErrors: function(data) {
      var content = '', unexpectedError = false, error_text = 'There were errors in your request';

      // Check if there is a translated message for the error 
      if (Sonet.I18n.translations[Sonet.am.App.lang] && Sonet.I18n.translations[Sonet.am.App.lang].Login && Sonet.I18n.translations[Sonet.am.App.lang].Login.REQUEST_ERROR) {        
         error_text = Sonet.I18n.translations[Sonet.am.App.lang].Login.REQUEST_ERROR;
      } else {
         error_text = data.errors.error_text;
      }

      $.each(data.errors, function(i, msgs){
         if(typeof msgs != 'string') {
            $.each(msgs,function(j,msg){
               if(msg.search(/username/i) != -1) {
                  $('.g-error-ico.username').css('visibility', 'visible');
                  $('input.username').addClass('g-error');
                  $('.g-error-ico.username').focus();
               }

               if(msg.search(/password/i) != -1) {
                  $('.g-error-ico.password').css('visibility', 'visible');
                  $('input.password').addClass('g-error');
                  $('.g-error-ico.password').focus();
               }

               content = content + '<li>' + msg + '</li>';


               $('#login-errors').html('<p>' + error_text + ':</p><ul class="disc">'+content+'</ul>').css('visibility', 'visible').css('display', 'block');
            });
      }
      });
   },

   locked: function(){
      Sonet.am.scorm.ItemManager.terminate('locked', 'locked');
   },

   runLogin: function() {
      var me = this;
      me.setResolution();

      // Disabling browser back button will stop you from going away from login page
      if(history.pushState) {
         history.pushState({}, 'Assessment Master', window.location.href);
         window.addEventListener('popstate', function(event) {
            history.pushState({}, 'Assessment Master', window.location.href);
         });
      }

      var browserCompatiable = true;

      // if the client has specified the bowser requirements, check with the given version.
      // otherwise will pass to next validation with default versions.
      var bowserRequirementsEls =  document.querySelectorAll("[data-name='bowser-requirement']");
      if (bowserRequirementsEls) {
         var browserRequirements = {};
         for(var i=0; i< bowserRequirementsEls.length; i++) {
              var el = $(bowserRequirementsEls[i]);
              browserRequirements[el.attr('data-type')] = el.attr('data-value');
         }
         if (!$('body').hasClass('usb')) {
            Object.keys(browserRequirements).forEach(function(key) {
               if (key.toLowerCase() == bowser.name.toLowerCase() &&
                   parseInt(bowser.version) < browserRequirements[key]) {
                  browserCompatiable = false;
               }
            });
         }
      }

      // if previous check failed, no need to check again
      if (browserCompatiable && !$('body').hasClass('usb') && ((bowser.msie && bowser.version < 9) ||
         (bowser.firefox && bowser.version < 16) ||
         (bowser.safari && bowser.version < 5) ||
         (bowser.opera && bowser.version < 12) ||
         (bowser.chrome && bowser.version < 22))) {
            browserCompatiable = false;
      }

      if(browserCompatiable) {
         $(".passed").show();
      } else {
         $(".failed").show().find(".browser-details").html('We detected ' + bowser.name + ' ' + bowser.version);
      }

      // clear login form
      $('.username').attr('value', '');
      $('.password').attr('value', '');

      if ( $('#login-errors > .errorSummary').length > 0 ) {
         $('#login-errors .errorSummary').removeClass('errorSummary').parent().css('display', 'block');
      }

      $('.field').bind('keypress', function(e) {
         if(e.keyCode == 13) {
            e.preventDefault();
         }
      });

      $('#login-btn').click(function(e) {
         if($(this).hasClass('active')){
            // Showing loading gif for login and makeing login button inactive
            $('.g-login-loading').show();
            $(this).removeClass('active');
            $('#login-errors').css('visibility', 'hidden');
            $('.g-error-ico').css('visibility', 'hidden');
            $('.g-error').removeClass('g-error');
            var loginForm = $('#login-form');

            // Check if there is a function for validating login form defined -- Sonet.am.App.validateLoginForm()
            if (typeof me.validateLoginForm == 'function') {
               // validateLoginForm returns false if it fails
               if (!me.validateLoginForm()) {
                  // Hiding loading gif for login and makeing login button active
                  $('.g-login-loading').hide();
                  $('#login-btn').addClass('active');
                  // Cancel AJAX call below
                  e.preventDefault();
                  return false;
               }
            }

            $.ajax({
               type: loginForm.attr('method'),
               data: loginForm.serialize(),
               dataType: 'json',
               success: function(data) {
                  if( data.status === 'error' ) {
                     me.showErrors(data);
                  } else {
                     window.location = data.url;
                  }
               },
               error: function(resp) {
                  $('#login-errors').html(resp.responseText).css('visibility', 'visible').css('display', 'block');
               },
               complete: function() {
                  // clear login form
                  $('.username').attr('value', '');
                  $('.password').attr('value', '');

                  // Hiding loading gif for login and makeing login button active
                  $('.g-login-loading').hide();
                  $('#login-btn').addClass('active');
               }
            });
            e.preventDefault();
            return false;
         }
      });
   },

   createReviewLog: function(log) {
      var me = this;
      $.ajax({
         type: 'POST',
         url: me.engineUrl+'/createReviewLog',
         data: {
            to: me.to,
            activityId: me.activityId,
            log: $.toJSON(log)
         },
         success: function() {
            $(document).trigger('branch');
         }
      });
   },

   checkSavingInProgress: function(){
      var savingInProgress = false,
         scormApi = Sonet.am.scorm.ScormWrapper,
         apiWin = scormApi.findAPIWindow(window);
      if(apiWin && apiWin.sonet && apiWin.sonet.scorm && apiWin.sonet.scorm.rte) {
         savingInProgress = apiWin.sonet.scorm.rte.savingInProgress;
      }
      return savingInProgress;
   },

   enableNext: function() {
      var me = this;

      // Activate next button if body doesn't have class 'next-disable' else hide next button.
      if(me.next === false) {
         $('.g-next').hide();
      }


      $('.g-next,.am-continue').addClass('am-active').click(function (e) {
         if ( Sonet.am.scorm.PISA2025.canFinish() ) {
            
            // Check if this item has branches
            var scormApi = Sonet.am.scorm.ScormWrapper,
               store = scormApi.getDataStore('data', true);

            if (me.toLogoff) {
               if (store === undefined) {
                  store = {};
               }
               if (store['from'] === undefined) {
                  store['from'] = {};
               }
               if (me.scormId) {
                  store['from']['logoff'] = me.scormId;
               }
               scormApi.setDataStore('data', store);
               Sonet.am.scorm.ItemManager.terminate('{target=logoff}jump');
            } else if (me.jumpTo) {
               if (store === undefined) {
                  store = {};
               }
               if (store['jumpTo'] === undefined) {
                  store['jumpTo'] = {};
               }
               if (me.scormId) {
                  store['jumpTo'][me.jumpTo] = me.scormId;
               }
               scormApi.setDataStore('data', store);
               Sonet.am.scorm.ItemManager.terminate('{target=' + me.jumpTo + '}jump');
            } else {
               Sonet.am.scorm.ItemManager.terminate('continue');
            }
         } 
      });
   },

   enablePrevious: function() {

      /* Activate previous button if body doesn't have class 'previous-disable'
       * else hide previous button.
       */
      var me = this;
      if(me.scormId ==='logoff' && !Sonet.am.App.adaptive){
         me.previous = true;
      }
      if(me.previous !== false) {
         $('.g-previous, .g-previous-back').addClass('am-active').click(function() {
            var scormApi = Sonet.am.scorm.ScormWrapper,
               store = scormApi.getDataStore('data', true);
            if(store && store['from'] && me.scormId && store['from'][me.scormId]) {
               Sonet.am.scorm.ItemManager.terminate('{target='+store['from'][me.scormId]+'}jump');
            } else if(store && store['jumpTo'] && me.scormId && store['jumpTo'][me.scormId]) {
               var to = store['jumpTo'][me.scormId];
               delete store['jumpTo'][me.scormId];
               scormApi.setDataStore('data', store);
               Sonet.am.scorm.ItemManager.terminate('{target='+to+'}jump');
            } else {
               Sonet.am.scorm.ItemManager.terminate('previous');
            }
         });
      } else {
         $('.g-previous').hide();
         $('.g-previous-back').hide();
      }
   },

   enableNavigation: function() {
      // Only add navigation click event if running in normal mode or preview
      // If the data-navigation is set to false, no navigation is allowed as well
      if ( ( Sonet.am.App.mode !== Sonet.constants.MODE.NORMAL &&
         Sonet.am.App.mode !== Sonet.constants.MODE.PREVIEW_TESTLET ) || this.runModeNavigation === 'false' ) {
         return;
      }

      var me = this;
      $(document).on('click', '.g-to:not(.current,.disabled)', function () {
         var scormApi = Sonet.am.scorm.ScormWrapper,
            testStatus = scormApi.getDataStore('testStatus', true),
            isNotReadItem = typeof testStatus === 'undefined' || (typeof $(this).data('to') === 'undefined' && typeof testStatus[$(this).data('to')] === 'undefined');
         if ((Sonet.am.activateNextOnComplete && Sonet.am.scorm.PISA2025.canFinish()) || !Sonet.am.activateNextOnComplete) {
            Sonet.am.scorm.ItemManager.terminate('{target=' + $(this).data('to') + '}jump');
         } else if (me.notAnswered.length !== 0 && Sonet.am.notAnsweredLoaded === false) {
            Sonet.am.notAnsweredLoaded = true;
            me.notAnswered.show('slow');
         } else {

            Sonet.Util.showModal('am-modal-required');
         }
      });
   },

   enableTryAgain: function() {
      $('.am-try-again').on('click', function() {
         Sonet.am.scorm.ItemManager.terminate('continue', 'exit', true);
      });
   },

   initPause: function() {
      $('.am-btn-pause.am-active:not(.am-disabled)').on('click', function() {
         Sonet.Util.showModal('am-modal-pause', true);
         if (Sonet.am.scorm.ItemManager.items['timer'].pause) {
            Sonet.am.scorm.ItemManager.items['timer'].pause();
         }
      });

      $('.am-btn-unpause.am-active:not(.am-disabled)').on('click', function() {
         Sonet.Util.hideModal('am-modal-pause');
         if (Sonet.am.scorm.ItemManager.items['timer'].unpause) {
            Sonet.am.scorm.ItemManager.items['timer'].unpause();
         }
      });
   },

   initFlagBtn: function() {
      var testletItems = Sonet.am.App.testletItems;
      if ( testletItems ) {
         items = testletItems[Object.getOwnPropertyNames(testletItems)[0]];
         summaryPageIds = [];
         coverPage = [];
         $(items).each(function() {
            if ( this.is_summery_page.length !== 0 ) {
               summaryPageIds.push(Object.keys(this.is_summery_page)[0]);
            }
            if ( this.coverPage ) {
               coverPage.push(Object.keys(this.coverPage)[0])
            }
         });
      }

      var navText = $('.g-navigation .current').text();

      if ( Sonet.am.App.adaptive ||
           Sonet.am.App.navigationObj === null ||
           Sonet.am.App.navigationObj === undefined ||
           summaryPageIds.indexOf(Sonet.am.App.scormId) !== -1 ||
           coverPage.indexOf(Sonet.am.App.scormId) !== -1 ) {

            $(".g-flag").hide();
            return;
      }

      var me = this;
      $('.g-flag').on('click', function(e){
         $(Sonet).trigger('flag-item', this);
         var scormApi = Sonet.am.scorm.ScormWrapper,
            store = scormApi.getDataStore('data',true);

         if(store == undefined) {
            store = {};
         }
         if(store['flag'] == undefined) {
            store['flag'] = {};
         }
         if($(this).hasClass("active")){
            $(this).removeClass("active");
            delete store["flag"][me.scormId];
         } else {
            $(this).addClass("active");
            store["flag"][me.scormId] = true;
         }
         scormApi.setDataStore('data', store);
      });
   },

   validatePassword: function() {
      var me = this;

      if($('body .password-wrap').length) {
         var modal = $('body').find('.am-modal-invalid-password');
         if(modal.length === 0) {
            $('body').append('<div class="am-modal fade am-modal-invalid-password"  tabindex="-1" role="dialog" aria-labelledby="Alert" aria-hidden="true">' +
               '<div class="am-modal-dialog">' +
                  '<div class="am-modal-content">' +
                     '<div class="am-modal-header">Incorrect Password</div>' +
                     '<div class="am-modal-body">' +
                        '<p>The password provided is invalid. Please enter a valid password.</p>' +
                     '</div>' +
                     '<div class="am-modal-footer">' +
                        '<button name="invalid-password-dismiss" class="btn am-btn-invalid-password am-active">' +
                           '<span>Continue</span>' +
                           '<span class="icon">&#160;</span>' +
                        '</button>' +
                     '</div>' +
                  '</div>' +
               '</div>' +
            '</div>');
         }

         $('.am-btn-invalid-password.am-active:not(.am-disabled)').on('click', function () {
            Sonet.Util.hideModal();
         });
         $('.g-next, .g-previous').off('click');
         $('.g-next, .g-previous').on('click', '', function () {
            if(navigator.onLine) {
               var allFilled = true,
                  passwordObj = {},
                  btnClicked = $(this);

               $('.password-field').each(function () {
                  if ($(this).val().length !== parseInt($(this).attr('maxLength'))) {
                     allFilled = false;
                  } else {
                     passwordObj[$(this).attr('name')] = $(this).val();
                  }
               });
               if (allFilled) {
                  $.post(me.engineUrl + "/passwordVerify", {
                     activityId: me.activityId,
                     password: passwordObj
                  },
                  function (data, status) {
                     data = JSON.parse(data);
                     if (data.success === true) {
                        if (btnClicked.hasClass('g-next')) {
                           Sonet.am.scorm.ItemManager.terminate('continue');
                        }
                        else if (btnClicked.hasClass('g-previous')) {
                           Sonet.am.scorm.ItemManager.terminate('previous');
                        }
                     } else {
                        Sonet.Util.showModal('am-modal-invalid-password');
                     }
                  });
               } else {
                  Sonet.Util.showModal('am-modal-invalid-password');
               }
            } else {
               var scormApi = Sonet.am.scorm.ScormWrapper,
                  apiWin = scormApi.findAPIWindow(window);
               apiWin.sonet.scorm.rte.connectionError();
            }
         });
      }
   },

   loadjscssfile: function(filepath, filetype, id) {
      if($("#"+id).length !== 0){
          return;
      }
      if(filetype == "js") { //if filename is a external JavaScript file
          var fileref = document.createElement('script');
          fileref.setAttribute("type", "text/javascript");
          fileref.setAttribute("src", filepath);
          fileref.setAttribute("id", id);
          fileref.setAttribute("class", "loading");
      } else if(filetype == "css") { //if filename is an external CSS file
          var fileref = document.createElement("link");
          fileref.setAttribute("rel", "stylesheet");
          fileref.setAttribute("type", "text/css");
          fileref.setAttribute("href", filepath);
      }
      if(typeof fileref != "undefined") {
          document.getElementsByTagName("head")[0].appendChild(fileref);
          $("#" + id).on('load', function () {
              $("#" + id).removeClass('loading');
          });
      }
  },
   initModal: function(){
      $("[data-toggle='am-qti-modal']").on('click', '', function (){
         var target = $($(this).data("target"));
         if(target.length !== 0){
            target.addClass('in');
            if($(this).closest(".web-browser-window").length !== 0){
               target.css("top", $(this).closest(".web-browser-window").offset().top);
            }
         }
      });
      $(".am-qti-modal .close").on('click', '', function (){
         var target = $(this).closest(".am-qti-modal");
         target.removeClass('in');
      });
   },

   initScrollTo: function() {
      $(document).on('click touchstart', '.am-scroll-to', function() {
         var sectionId = $(this).attr("data-id");
         if(sectionId !== undefined && $('body').find("#" + sectionId).length !== 0) {
            var section = $('body').find("#" + sectionId);
            // for web browser
            // to do: scroll wihtin overflow scroll
            if(section.closest(".web-browser-window").length !== 0 && $(".web-browser-tab-user[data-tab='" + section.closest(".web-browser-window").attr('id') + "']:not(.web-browser-tab-user-active)").length !== 0 && Sonet.am.widgets.WebBrowser) {
               var tabId = section.closest(".web-browser-window").attr('id');
               Sonet.am.widgets.WebBrowser.setActiveTab($(".web-browser-tab-user[data-tab='" + tabId + "']:not(.web-browser-tab-user-active)"));
               $(".web-browser-window").animate({
                  'scrollTop': section.offset().top - section.closest(".web-browser-window").offset().top
               }, 500);
            } else {
               location.hash = '#' + sectionId;
            }
         }
      });
   },

   holding: function () {
      var me = this;
      var scormApi = Sonet.am.scorm.ScormWrapper;
      var ldStore = scormApi.getDataStore('learner_data', true);
      var currentTestletId = me.getTestletIdFromScorm(me.scormId);
      var globalLearnerAdjustmentData = me.getAPILearnerAdjustment();
      var globalLearnerSpecialNeedData = me.getAPILearnerSpecialNeed();
      var globalLearnerOrgSpecialNeedData = me.getAPILearnerOrgSpecialNeed();
     
      if(Sonet.am.App.activityId !== undefined  && Sonet.am.App.activityId !== null && Sonet.am.App.isHoldings !== undefined && Sonet.am.App.isHoldings !== null  && (Sonet.am.App.isHoldings.indexOf(Sonet.am.App.activityId) > -1)) {
         if(Sonet.am.App.loadNextItem) {
            $('.g-next').click();
         }
     
         if (ldStore['on_holding'] == true) {
            $('.g-next').hide();
         } else if (ldStore['on_holding'] == 'inherit'){ 
            if (globalLearnerOrgSpecialNeedData[currentTestletId]) {
               var LearnerOrgSpecialNeedCurrentTestletData = globalLearnerOrgSpecialNeedData[currentTestletId];
               var jsonData = typeof LearnerOrgSpecialNeedCurrentTestletData !== 'undefined' ? JSON.parse(LearnerOrgSpecialNeedCurrentTestletData) : undefined;
                     if (globalLearnerOrgSpecialNeedData['on_holding'] == true || globalLearnerOrgSpecialNeedData['on_holding'] == false) {
                        jsonData['on_holding'] = globalLearnerOrgSpecialNeedData['on_holding'];
                     }
                     if (jsonData['on_holding'] == true) {
                        $('.g-next').hide();
                     }  else if (jsonData['on_holding'] == 'inherit' ) {
                        if (globalLearnerAdjustmentData['on_holding'] == true ) {
                           $('.g-next').hide();
                        } else if (globalLearnerAdjustmentData['on_holding'] == 'inherit') {
                           if (globalLearnerSpecialNeedData['on_holding'] == true || globalLearnerSpecialNeedData['on_holding'] == 'inherit') {
                              $('.g-next').hide();
                           } 
                        }
                     }
            } else {     
               if (globalLearnerOrgSpecialNeedData['on_holding'] == true) {
                  $('.g-next').hide();
               } else if (globalLearnerOrgSpecialNeedData['on_holding'] == 'inherit') {
                  if (globalLearnerAdjustmentData['on_holding'] == true ) {
                     $('.g-next').hide();
                  } else if (globalLearnerAdjustmentData['on_holding'] == 'inherit') {
                     if (globalLearnerSpecialNeedData['on_holding'] == true || globalLearnerSpecialNeedData['on_holding'] == 'inherit') {
                        $('.g-next').hide();
                     }
                  }
               }
            }
         }
      }
   },

   /**
    * Evaluates item language configuration and determines if the item will be skipped
    * based on the Include Languages and Exclude Languages configured in the item properties of the Testlet
    * @returns {boolean} Returns true if shown otherwise false
    */
   evaluateItemLanguages: function evaluateItemLanguages() {
      let me = this;
      let documentLanguage = Sonet.I18n.getDocumentLanguage();
      let itemIsShown = true;
      let includeLanguages = me.includeLanguages || [];
      let excludeLanguages = me.excludeLanguages || [];

      if (includeLanguages.length > 0) {
         itemIsShown = includeLanguages.indexOf(documentLanguage) !== -1;
      }

      if (excludeLanguages.length > 0) {
         if (excludeLanguages.indexOf(documentLanguage) !== -1) {
            itemIsShown = false;
         }
      }

      // Check if item is to be skipped
      if (!itemIsShown) {
         $('.g-next').click();
      }

      return itemIsShown;
   },

   getAPILearnerStatus: function () {
      var me = this;
      apiWin = me.scormApi.findAPIWindow(window);
      globalData = apiWin.sonet.scorm.rte.globalData;
      return globalData['status'];
   },

   setAPILearnerStatus: function (status) {
      var me = this;
      apiWin = me.scormApi.findAPIWindow(window);
      globalData = apiWin.sonet.scorm.rte.globalData;
      globalData['status'] = status;
   },

   setDSLearnerStatus: function (status) {
      var me = this;
      store = me.scormApi.getDataStore('learner_data', true)
      store['status'] = status;
      me.scormApi.setDataStore('learner_data', store)
   },

   setGlobalDataStatus: function (status) {
      var me = this;
      if (typeof status !== 'undefined') {
         me.setAPILearnerStatus(status);
         me.setDSLearnerStatus(status)
      }
   },

   commitSaveResults: function () {
      var me = this;
      try {
         Sonet.am.scorm.ItemManager.saveResults();
      } catch (error) {
         // do nothing as this will happen during initial loading of the test
      }
      me.scormApi.commit();
   },

   getAPILearnerAdjustment: function () {
      var me = this;
      var result = null;
      apiWin = me.scormApi.findAPIWindow(window);
      if (apiWin && apiWin.sonet && typeof apiWin.sonet.scorm !== 'undefined' && apiWin.sonet.scorm.rte && typeof apiWin.sonet.scorm.rte !== 'undefined' && apiWin.sonet.scorm.rte) {
         globalData = apiWin.sonet.scorm.rte.globalData;
         result = globalData['data']['learner_adjustments_data'];
      }
      return result;
   },

   getAPILearnerSpecialNeed: function () {
      var me = this;
      var result = null;
      apiWin = me.scormApi.findAPIWindow(window);
      if (apiWin && apiWin.sonet && typeof apiWin.sonet.scorm !== 'undefined' && apiWin.sonet.scorm.rte && typeof apiWin.sonet.scorm.rte !== 'undefined' && apiWin.sonet.scorm.rte) {
         globalData = apiWin.sonet.scorm.rte.globalData;
         result = globalData['data']['learner_special_needs_data'];
      }
      return result;
   },

   getAPILearnerOrgSpecialNeed: function () {
      var me = this;
      var result = null;
      apiWin = me.scormApi.findAPIWindow(window);
      if (apiWin && apiWin.sonet && typeof apiWin.sonet.scorm !== 'undefined' && apiWin.sonet.scorm.rte && typeof apiWin.sonet.scorm.rte !== 'undefined' && apiWin.sonet.scorm.rte) {
         globalData = apiWin.sonet.scorm.rte.globalData;
         result = globalData['data']['learner_org_special_need_data'];
      }
      return result;
   },

   getTestletIdFromModule: function (module) {
      if (typeof module !== "undefined" && module !== null) {
         module = module.toString();
         var data = module.split('_');
         if (data.length > 0) {
            return data[0];
         }
      }
      return null;
   },

   getTestletIdFromScorm: function (scormId) {
      if (typeof scormId !== "undefined" && scormId !== null) {
         var data = scormId.split('_');
         if (data.length > 0) {
            return data[0];
         }
      }
      return null;
   },

   getUpdatedTimeLeft: function (timeLeft, totalTime, percentage) {
      var updateTimeData = {'updatedTimeLeft' : timeLeft, 'updatedTime' : 0};
      if (typeof timeLeft !== "undefined" && timeLeft !== null && typeof totalTime !== "undefined" && totalTime !== null  && typeof percentage !== "undefined" && percentage !== null ) {
         updateTimeData['updatedTimeLeft'] = parseInt(timeLeft) + Math.round(totalTime * (percentage / 100));
         updateTimeData['updatedTime'] = Math.round(totalTime * (percentage / 100));
      }
      return updateTimeData;
   },

   updateTimerPercentage: function(time, type) {
      var me = this;
      var timerData = {'updatedTimeLeft' : time, 'updatedTime' : 0};
      var scormApi = Sonet.am.scorm.ScormWrapper;
      var ldStore = scormApi.getDataStore('learner_data', true);
      var currentTestletId =  me.getTestletIdFromScorm(me.scormId);
      var globalLearnerAdjustmentData = me.getAPILearnerAdjustment();
      var globalLearnerSpecialNeedData = me.getAPILearnerSpecialNeed();
      var globalLearnerOrgSpecialNeedData = me.getAPILearnerOrgSpecialNeed();

      if (typeof time !== 'undefined' && time != null && type != null) {
          switch (type) {
              case 'pause':
                  timerData['type'] = 'pause';
                  if (typeof ldStore !== 'undefined' && ldStore != null && typeof ldStore.item_pause_time !== 'undefined' && ldStore.item_pause_time != null && ldStore.item_pause_time != 0) {
                      // learner org adjustment have highest priority
                      timerData = me.getUpdatedTimeLeft(time, time, ldStore.item_pause_time);
                  } else if (typeof globalLearnerOrgSpecialNeedData !== 'undefined' && globalLearnerOrgSpecialNeedData && typeof globalLearnerOrgSpecialNeedData[currentTestletId] !== 'undefined' && typeof globalLearnerOrgSpecialNeedData.status !== 'undefined' && globalLearnerOrgSpecialNeedData.status == true) {
                      $specialNeedData = JSON.parse(globalLearnerOrgSpecialNeedData[currentTestletId]);
                      if (typeof $specialNeedData['item_pause_time'] !== 'undefined' && $specialNeedData['item_pause_time'] != null) {
                         // learner org special need have second priority
                         timerData = me.getUpdatedTimeLeft(time, time, $specialNeedData['item_pause_time']);
                      }
                  } else if (typeof globalLearnerSpecialNeedData !== 'undefined' && globalLearnerSpecialNeedData && typeof globalLearnerSpecialNeedData.item_pause_time !== 'undefined' && globalLearnerSpecialNeedData.item_pause_time != null && globalLearnerSpecialNeedData.item_pause_time !=0) {
                      // learner special need have third highest priority
                      timerData = me.getUpdatedTimeLeft(time, time, globalLearnerSpecialNeedData.item_pause_time);
                  } else if (typeof globalLearnerAdjustmentData !== 'undefined' && globalLearnerAdjustmentData && typeof globalLearnerAdjustmentData.item_pause_time !== 'undefined' && globalLearnerAdjustmentData.item_pause_time != null && globalLearnerAdjustmentData.item_pause_time != 0) {
                      timerData = me.getUpdatedTimeLeft(time, time, globalLearnerAdjustmentData.item_pause_time);
                  }
              break;
              case 'recording':
                  timerData['type'] = 'recording';
                  if (typeof ldStore !== 'undefined' && ldStore != null && typeof ldStore.item_recording_time !== 'undefined' && ldStore.item_recording_time != null && ldStore.item_recording_time != 0) {
                      // learner org adjustment have highest priority
                      timerData = me.getUpdatedTimeLeft(time, time, ldStore.item_recording_time);
                  } else if (typeof globalLearnerOrgSpecialNeedData !== 'undefined' && globalLearnerOrgSpecialNeedData && typeof globalLearnerOrgSpecialNeedData[currentTestletId] !== 'undefined' && typeof globalLearnerOrgSpecialNeedData.status !== 'undefined' && globalLearnerOrgSpecialNeedData.status == true) {
                      $specialNeedData = JSON.parse(globalLearnerOrgSpecialNeedData[currentTestletId]);
                      if (typeof $specialNeedData['item_recording_time'] !== 'undefined' && $specialNeedData['item_recording_time'] != null) {
                         // learner org special need have second priority
                         timerData = me.getUpdatedTimeLeft(time, time, $specialNeedData['item_recording_time']);
                      }
                  } else if (typeof globalLearnerSpecialNeedData !== 'undefined' && globalLearnerSpecialNeedData && typeof globalLearnerSpecialNeedData.item_recording_time !== 'undefined' && globalLearnerSpecialNeedData.item_recording_time != null && globalLearnerSpecialNeedData.item_recording_time !=0) {
                      // learner special need have third highest priority
                      timerData = me.getUpdatedTimeLeft(time, time, globalLearnerSpecialNeedData.item_recording_time);
                  } else if (typeof globalLearnerAdjustmentData !== 'undefined' && globalLearnerAdjustmentData && typeof globalLearnerAdjustmentData.item_recording_time !== 'undefined' && globalLearnerAdjustmentData.item_recording_time != null && globalLearnerAdjustmentData.item_recording_time != 0) {
                      // learner adjustment have fourth priority
                      timerData = me.getUpdatedTimeLeft(time, time, globalLearnerAdjustmentData.item_recording_time);
                  }
              break;
          }
      }
      return timerData;
  }
};

$(function () {
   Sonet.am.App.beforeLoad();

   var windowOnLoadFallback = null,
   onLoadFn = function () {
      if (windowOnLoadFallback !== null) {
         window.clearInterval(windowOnLoadFallback);
      }

      Sonet.am.scorm.ScormWrapper.findLMS();
      $(document).trigger('beforeloadapp');
      Sonet.am.App.init();
      $(document).trigger('afterInit');
   };

   if (typeof (window.addEventListener) !== 'undefined') {
      window.addEventListener('load', onLoadFn, false);
   } else if (typeof (window.attachEvent) !== 'undefined') {
      window.attachEvent('onload', onLoadFn);
   } else {
      window.onload = onLoadFn;
   }

   if (typeof window.setInterval !== 'undefined') {
      windowOnLoadFallback = window.setInterval(function() {
         if (document.readyState === 'complete') {
            onLoadFn();
         }
      }, 50);
   } else {
      window.onload = function () {
         onLoadFn();
      };
   }
});
