Sonet.am.scorm.ScormWrapper = {
   data: [],
   store: {},
   events: [],

   setState: function(serverData) {
      this.data = [];
      this.store = {};
      this.events = [];

      if ( serverData ) {
         if ( serverData['response'] ) {
            this.data = serverData['response'];
         }
         if ( serverData['common'] ) {
            this.store = serverData['common'];
         }
         if ( serverData['event'] ) {
            this.events = serverData['event'];
         }
      }
   },

   getState: function() {
      return {
         id: $('#task').data('itemid') ? $('#task').data('itemid') : null,
         response: this.data,
         common: this.store,
         event: this.events
      }
   },

   setValue: function(element, value) {
      let parts = element.split(".");

      if ( this.data[parts[2]] == null ) {
         this.data[parts[2]] = {};
      }
      this.data[parts[2]][parts[3]] = value;
   },

   getValue: function(element) {
      alert('whats calling this?');
   },

   getInteractionPos: function(id) {
      if ( id == null ) {
         alert('ID should not be null');
      }
      let idx = this.data.findIndex(e=>e.id==id);
      return idx == -1 ? this.data.length : idx;
   },

   getInteraction: function(id) {
      let i = this.data.find(e=>e.id==id);
      return i == null ? i : i.learner_response;
   },

   getDataStore: function(id) {
      return this.store[id];
   },

   setDataStore: function(id, value) {
      this.store[id] = value;
   },
   
   setEventData: function (value) {

      if ( !Array.isArray(value) ) {
         value = [value];
      }
      this.events = this.events.concat(value);
   }
};