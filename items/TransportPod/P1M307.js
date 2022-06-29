const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M307" title="Transport Pod Item 07" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m3 p1-m3-07 g-fill p1-check-input p1-check-finish p1-confirm-finish short-answer" data-itemid="P1M307" data-module="TransportPod" data-progress="quiz">
      <div class="task-title g-hide" data-am-translate="m307.task.title" data-am-translate-group="m3.title">Transport Pod - Quiz 5 of 5</div>
         <div class="g-quiz">
            <div class="g-instructions">
               <p class="g-text-top" data-am-translate="m307.question.1" data-am-translate-group="m307.question" data-wysiwyg="false">
                  The program below contains instructions for moving the rover one space at a time along the lines of the grid.
               </p>
               <div class="g-code-instruction" data-am-translate="m307.question.code.1" data-am-translate-group="m307.question" data-wysiwyg="false">Program:</div>
               <div class="g-blockly" id="blocklyDiv"></div>  
            </div>
            <div class="g-quiz-a">
               <p class="g-quiz-header" data-am-translate="m307.question.2" data-am-translate-group="m307.question" data-wysiwyg="false">
                  Click on the intersection on the grid where the rover ends stops after the program runs.            
               </p>
               <i class="label fas fa-arrow-up"></i>
               <i class="label fas fa-arrow-down"></i>
               <span data-am-translate="m307.label.1" data-am-translate-group="m307.label" data-wysiwyg="false" class="label label-v">one unit</span>
               <i class="label fas fa-arrow-left"></i>
               <i class="label fas fa-arrow-right"></i>
               <span data-am-translate="m307.label.1" data-am-translate-group="m307.label" data-wysiwyg="false" class="label label-h">one unit</span>
               <span data-am-translate="m307.label.2" data-am-translate-group="m307.label" data-wysiwyg="false" class="label label-rover">rover</span>
               
               <div class='g-selection-container g-grid-container-selectable'>
                  <div class='selection-box yellow-circle'></div>
                  <div><img class="g-grid-rover" src="/engine/packages/PISA2025/Resources/images/rover.png"/></div>
                  <div class='selection-box yellow-circle'></div>
                  <div class='selection-box white-circle'></div>
                  <div class='selection-box yellow-circle'></div>
                  <div class='selection-box white-circle'></div>
                  <div class='selection-box yellow-circle'></div>
                  <div class='selection-box white-circle'></div>
                  <div class='selection-box yellow-circle'></div>
                  <div class='selection-box white-circle'></div>
                  <div class='selection-box yellow-circle'></div>
                  <div class='selection-box white-circle'></div>
                  <div class='selection-box yellow-circle'></div>
                  <div class='selection-box white-circle'></div>
                  <div class='selection-box yellow-circle'></div>
                  <div class='selection-box white-circle'></div>
                  <div class='selection-box yellow-circle'></div>
                  <div class='selection-box white-circle'></div>
                  <div class='selection-box yellow-circle'></div>
                  <div class='selection-box white-circle'></div>
                  <div class='selection-box yellow-circle'></div>                     
                  <div class='selection-box white-circle'></div>
                  <div class='selection-box yellow-circle'></div>
                  <div class='selection-box white-circle'></div>
                  <div class='selection-box yellow-circle'></div>
                  <div class='selection-box white-circle'></div>
                  <div class='selection-box yellow-circle'></div>
                  <div class='selection-box white-circle'></div>
                  <input type="text" class="g-grid-response g-inline-input short-answer-response" name="P1M307" id="P1M307" value="" />
               </div>

               <div class='g-grid-container'>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
               </div>
            </div>
         </div>   
      </div>
      <div class="g-hide">
         <span data-am-translate="m307.codeblocks.1" data-wysiwyg="false" data-am-translate-group="m307.codeblocks" id="if-lbl">if </span>
         <span data-am-translate="m307.codeblocks.2" data-wysiwyg="false" data-am-translate-group="m307.codeblocks" id="text-lbl"> is on </span>
         <span data-am-translate="m307.codeblocks.3" data-wysiwyg="false" data-am-translate-group="m307.codeblocks" id="option-lbl">rover</span>
         <span data-wysiwyg="false" id="colour-lbl">#ffc000</span>
     </div> 
   </itemBody>
</assessmentItem>`