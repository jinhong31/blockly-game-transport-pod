$(function () {
   Sonet.am.scorm.ItemManager.register({
      cls: 'short-answer',
      obj: 'ShortAnswer',
      type: 'scorm'
   });
});

Sonet.am.scorm.ShortAnswer = {

   init: function () {
      this.store = Sonet.am.scorm.ScormWrapper;
      this.trackEvents();
   },

   saveResults: function () {
      let me = this;

      $('.short-answer-response').each(function() {
         let id = Sonet.am.scorm.ItemManager.getId(this),
         pos = me.store.getInteractionPos(id);

         me.store.setValue('cmi.interactions.' + pos + '.id', id);
         me.store.setValue('cmi.interactions.' + pos + '.type', 'long_fill_in');
         me.store.setValue('cmi.interactions.' + pos + '.learner_response', $(this).val());
      });
   },

   loadResults: function (playingBack) {
      let me = this;
      
      $('.short-answer-response').each(function(){
         let id = Sonet.am.scorm.ItemManager.getId(this),
         responseStr = me.store.getInteraction(id);

         if (responseStr != null) {          
            $(this).val(responseStr);
         }
      });
   },

   trackEvents: function () {
      $(document).on('change', '.short-answer-response', function (e) {
         Sonet.am.widgets.eventTracker.saveData({
            "ts":Sonet.Util.getTimeStamp(),
            'a':'change',
            'id':Sonet.am.scorm.ItemManager.getId(this),
            'd':$(this).val()
         });
      });
   }
};