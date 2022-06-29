$(function() {
   Sonet.am.scorm.ItemManager.register({
      cls:'likert',
      obj:'Likert',
      type:'scorm'
   });
});

Sonet.am.scorm.Likert = {
   
   init: function() {
      this.store = Sonet.am.scorm.ScormWrapper;
      this.trackEvents();
   },

   saveResults: function() {
      let me = this;

      $('.likert-group:not(.select-disabled)').each(function() {
         let response = [];

         if ($(this).is('select')) {
            response.push($('option:selected', this).val());
         }
         $(this).find('input:checked').each(function() {
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
      
      $('.likert-group').each(function() {
         let id = Sonet.am.scorm.ItemManager.getId(this),
         responseStr = me.store.getInteraction(id);

         if (responseStr != null) {     
            if ( $(this).is('select') ) {
               $(this).val(responseStr);
            }  else {
               responseStr.split(',').forEach(e=>{
                  $(this).find(`input[type="radio"][value="${e}"],input[type="checkbox"][value="${e}"]`).prop('checked', true);
               });
            }  
         }
      });
   },   

   trackEvents: function () {
      $(document).on('change', 'select.likert-group', function (e) {
         Sonet.am.widgets.eventTracker.saveData({
            "ts":Sonet.Util.getTimeStamp(),
            'a':'select',
            'id':Sonet.am.scorm.ItemManager.getId(this),
            'd':$(this).val()
         });
      });
   }
};