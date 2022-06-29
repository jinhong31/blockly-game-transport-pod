$(function () {
   Sonet.am.scorm.ItemManager.register({
      cls: 'multiple-choice',
      obj: 'MultipleChoice',
      type: 'scorm'
   });
});

Sonet.am.scorm.MultipleChoice = {
   init: function() {
      this.store = Sonet.am.scorm.ScormWrapper;
      this.trackEvents();
   },

   saveResults: function() {
      let me = this;
      
      $('.multiple-choice-group').each(function(){
         let response = [];

         $(this).find('input:checked').each(function(){
            response.push($(this).val());
         });

         let id = Sonet.am.scorm.ItemManager.getId(this),
         pos = me.store.getInteractionPos(id);

         me.store.setValue('cmi.interactions.' + pos + '.id', id);
         me.store.setValue('cmi.interactions.' + pos + '.type', 'multiple_choice');
         me.store.setValue('cmi.interactions.' + pos + '.learner_response', response.toString());
      });
   },
   
   loadResults: function(playingBack) {
      let me = this;
      
      $('.multiple-choice-group').each(function(){
         let id = Sonet.am.scorm.ItemManager.getId(this),
         responseStr = me.store.getInteraction(id);

         if (responseStr != null) {          
            responseStr.split(',').forEach(e=>{
               $(this).find(`input[type="radio"][value="${e}"],input[type="checkbox"][value="${e}"]`).prop('checked', true);
            });
         }
      });
   },

   trackEvents: function () {
      $(document).on('change', '.multiple-choice-group input', function (e) {
         let mc = $(this).closest('.multiple-choice-group');

         Sonet.am.widgets.eventTracker.saveData({
            "ts":Sonet.Util.getTimeStamp(),
            'a':$(this).is(":checked") ? 'select' : 'deselect',
            'id':Sonet.am.scorm.ItemManager.getId(mc[0]),
            'd':$(this).val()
         });
      });
   }
};