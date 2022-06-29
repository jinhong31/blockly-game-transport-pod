/*!
 * item-manager.js
 */
Sonet.am.scorm.ItemManager = {
   types: [],
   items: {},
   undoManager: null,
   initilised: false,

   // create the item types that are required based on the body classes
   init: function () {
      let me = this;

      for (let i = 0; i < me.types.length; i++) {
         if ($('body').hasClass(me.types[i].cls)) {
            me.items[me.types[i].cls] = Sonet.am[me.types[i].type][me.types[i].obj];
            me.items[me.types[i].cls].init();
         }
      }

      me.initilised = true;
   },

   register: function (type) {
      this.types.push(type);
   },

   getId: function(el) {
      return el ? ($(el).data("id") ? $(el).data("id") : el.id) : '';
   },

   getState: function() {
      $(Sonet).trigger('am-before-save');

      // Loops over all widgets and calls their save method
      for (var key in this.items) {
         if (typeof (this.items[key].saveResults) == 'function') {
            this.items[key].saveResults();
         }
      }

      state =  Sonet.am.scorm.ScormWrapper.getState();
      // change here to return in a different format
      return JSON.stringify(state);
   },

   setState: function(serverData) {
      let me = this,
      data = {};

      // change here to parse from a different format
      try {
         data = JSON.parse(serverData);
      } catch (e) {
         // do something
      }

      // must pass the parsed data in the expected format to the wrapper
      Sonet.am.scorm.ScormWrapper.setState(data);
      
      //if we are loading the item for the first time we need to initilse the components before applying the state
      if ( !me.initilised ) {
         me.init();
         $('body').addClass('am-load-complete');
      }

      for (var key in me.items) {
         if (typeof (me.items[key].loadResults) === 'function') {
            me.items[key].loadResults(false);
         }
      }
   }
};