/*!
 * Event Tracker .js
 */
$(function () {
   Sonet.am.scorm.ItemManager.register({
      cls: 'track-events',
      obj: 'eventTracker',
      type: 'widgets'
   });
});

Sonet.am.widgets.eventTracker = {   
   initialised: false,

   init: function () {
      this.initialised = true;
   },   

   saveData: function (data) {
      // don't track the data if the component isn't initialised. It will be initialised
      // only in tests where we are interested in the data.
      if ( this.initialised ) {
         Sonet.am.scorm.ScormWrapper.setEventData(data);      
      }
   },

   getUTCTime: function () {
      return Sonet.Util.getTimeStamp();
   }
   
};
