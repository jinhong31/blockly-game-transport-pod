const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M304" title="Transport Pod Item 04" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m3 p1-m3-04 g-fill p1-check-mcq p1-check-finish p1-confirm-finish multiple-choice" data-itemid="P1M304" data-module="TransportPod" data-progress="quiz">
         <div class="task-title g-hide" data-am-translate="m304.task.title" data-am-translate-group="m3.title">Transport Pod - Quiz 2 of 5</div>
         <div class="g-quiz">
            <div class="g-instructions">
               <p class="g-text-top" data-am-translate="m304.question.1" data-am-translate-group="m304.question" data-wysiwyg="false">
                  The program below contains the instructions for moving the rover along the tracks.
               </p>
               <div class="g-code-instruction" data-am-translate="m304.question.code.1" data-am-translate-group="m304.question" data-wysiwyg="false">Program:</div>
               <div class="g-blockly" id="blocklyDiv"></div>  
            </div>
            <div class="g-quiz-a">
               <p class="g-quiz-header" data-am-translate="m304.question.2" data-am-translate-group="m304.question" data-wysiwyg="false">
                  Which box will the rover finish at when the program is run?
               </p>
               <img class="track" src="/engine/packages/PISA2025/Resources/images/P1M304.png"/>
               <img class="rover" src="/engine/packages/PISA2025/Resources/images/rover.png"/>
               <div id="P1M304" class="g-mcg multiple-choice-group input-align-bottom">
                  <label class="g-mcq-label">
                     <span class="g-mcq-radio-wrapper">
                        <input type="radio" class="g-mcq-radio" name="P1M304" id="rA" value="1" tabindex="1"/>
                        <span class="g-mcq-radio-styled"></span>
                     </span>
                  </label>  
                  <label class="g-mcq-label">
                     <span class="g-mcq-radio-wrapper">
                        <input type="radio" class="g-mcq-radio" name="P1M304" id="rB" value="2" tabindex="2" />
                        <span class="g-mcq-radio-styled"></span>
                     </span>
                  </label>  
                  <label class="g-mcq-label">
                     <span class="g-mcq-radio-wrapper">
                        <input type="radio" class="g-mcq-radio" name="P1M304" id="rC" value="3" tabindex="3" />
                        <span class="g-mcq-radio-styled"></span>
                     </span>
                  </label>  
                  <label class="g-mcq-label">
                     <span class="g-mcq-radio-wrapper">
                        <input type="radio" class="g-mcq-radio" name="P1M304" id="rD" value="4" tabindex="4" />
                        <span class="g-mcq-radio-styled"></span>
                     </span>
                  </label>    
               </div>  
            </div>
         </div>
      </div> 
      <div class="g-hide">
         <span data-am-translate="m304.codeblocks.1" data-wysiwyg="false" data-am-translate-group="m304.codeblocks" id="repeat-lbl">repeat until rover is at</span>
         <span data-am-translate="m304.codeblocks.2" data-wysiwyg="false" data-am-translate-group="m304.codeblocks" id="option-lbl-1">grey box</span>
         <span data-am-translate="m304.codeblocks.3" data-wysiwyg="false" data-am-translate-group="m304.codeblocks" id="option-lbl-2">yellow circle</span>
     </div> 
   </itemBody>
</assessmentItem>`