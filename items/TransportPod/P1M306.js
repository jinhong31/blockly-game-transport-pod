const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M306" title="Transport Pod Item 06" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m3 p1-m3-06 g-fill p1-check-mcq p1-check-finish p1-confirm-finish multiple-choice" data-itemid="P1M306" data-module="TransportPod" data-progress="quiz">
      <div class="task-title g-hide" data-am-translate="m306.task.title" data-am-translate-group="m3.title">Transport Pod - Quiz 4 of 5</div>
         <div class="g-quiz">
            <div class="g-instructions">
               <p class="g-text-top" data-am-translate="m306.question.1" data-am-translate-group="m306.question" data-wysiwyg="false">
                  The program below contains instructions for moving the rover one space at a time along the lines of the grid and ending at the <span class="yellow-circle"></span>
               </p>
               <div class="g-code-instruction" data-am-translate="m306.question.code.1" data-am-translate-group="m306.question" data-wysiwyg="false">Program:</div>
               <div class="g-blockly" id="blocklyDiv"></div>     
               <div class='g-grid-container g-grid-block-small'>
                  <i class="label fas fa-arrows-alt-v"></i>
                  <span data-am-translate="m306.label.1" data-am-translate-group="m306.label" data-wysiwyg="false" class="label label-v">one unit</span>
                  <i class="label fas fa-arrows-alt-h"></i>
                  <span data-am-translate="m306.label.2" data-am-translate-group="m306.label" data-wysiwyg="false" class="label label-rover">rover</span>

                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'><img class="g-grid-rover" src="/engine/packages/PISA2025/Resources/images/rover.png"/></div>
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
                  <div class='g-grid-block'><span class="yellow-circle g-grid-square"></span></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
               </div>
            </div>
            <div class="g-quiz-a">
               <p class="g-quiz-header" data-am-translate="m306.question.3" data-am-translate-group="m306.question" data-wysiwyg="false">Select the path the rover takes when the program runs.</p>
               <div id="P1M306" class="g-mcg multiple-choice-group input-align-bottom">
                  <label class="g-mcq-label">
                     <span class="g-mcq-radio-wrapper">
                        <input type="radio" class="g-mcq-radio" name="P1M306" id="rA" value="1" tabindex="1"/>
                        <span class="g-mcq-radio-styled"></span>
                     </span>
                     <span class="g-mcq-label-styled" data-am-translate="m3.codeblocks.b9" data-wysiwyg="false" data-am-translate-group="m3.codeblocks">
                        <div class='g-grid-container g-grid-block-small'>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-dash-right g-grid-dash-bottom'><img class="g-grid-rover" src="/engine/packages/PISA2025/Resources/images/rover.png"/></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-dash-right g-grid-dash-bottom'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-dash-bottom'></div>
                           <div class='g-grid-block g-grid-dash-right g-grid-dash-bottom'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'><span class="yellow-circle g-grid-square"></span></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                        </div> 
                     </span>
                  </label>  
                  <label class="g-mcq-label">
                     <span class="g-mcq-radio-wrapper">
                        <input type="radio" class="g-mcq-radio" name="P1M306" id="rB" value="2" tabindex="2" />
                        <span class="g-mcq-radio-styled"></span>
                     </span>
                     <span class="g-mcq-label-styled" data-am-translate="m3.codeblocks.b10" data-wysiwyg="false" data-am-translate-group="m3.codeblocks">
                        <div class='g-grid-container g-grid-block-small'>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-dash-bottom'></div>
                           <div class='g-grid-block g-grid-dash-right g-grid-dash-bottom'></div>
                           <div class='g-grid-block g-grid-dash-top'></div>
                           <div class='g-grid-block g-grid-dash-top'><img class="g-grid-rover" src="/engine/packages/PISA2025/Resources/images/rover.png"/></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-dash-right'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-dash-right'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'><span class="yellow-circle g-grid-square"></span></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                        </div> 
                     </span>
                  </label>  
                  <label class="g-mcq-label">
                     <span class="g-mcq-radio-wrapper">
                        <input type="radio" class="g-mcq-radio" name="P1M306" id="rC" value="3" tabindex="3" />
                        <span class="g-mcq-radio-styled"></span>
                     </span>
                     <span class="g-mcq-label-styled" data-am-translate="m3.codeblocks.b1" data-wysiwyg="false" data-am-translate-group="m3.codeblocks">
                        <div class='g-grid-container g-grid-block-small'>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-dash-right'><img class="g-grid-rover" src="/engine/packages/PISA2025/Resources/images/rover.png"/></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-dash-bottom'></div>
                           <div class='g-grid-block g-grid-dash-bottom'></div>
                           <div class='g-grid-block g-grid-dash-bottom'></div>
                           <div class='g-grid-block g-grid-dash-bottom g-grid-dash-right'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-dash-right'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'><span class="yellow-circle g-grid-square"></span></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                        </div> 
                     </span>
                  </label>  
                  <label class="g-mcq-label">
                     <span class="g-mcq-radio-wrapper">
                        <input type="radio" class="g-mcq-radio" name="P1M306" id="rD" value="4" tabindex="4" />
                        <span class="g-mcq-radio-styled"></span>
                     </span>
                     <span class="g-mcq-label-styled" data-am-translate="m3.codeblocks.b2" data-wysiwyg="false" data-am-translate-group="m3.codeblocks">
                        <div class='g-grid-container g-grid-block-small'>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-dash-bottom'></div>
                           <div class='g-grid-block g-grid-dash-bottom g-grid-dash-right'><img class="g-grid-rover" src="/engine/packages/PISA2025/Resources/images/rover.png"/></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-dash-bottom'></div>
                           <div class='g-grid-block g-grid-dash-bottom g-grid-dash-right'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-dash-right'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'><span class="yellow-circle"></span></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                        </div> 
                     </span>
                  </label>    
               </div>
            </div>
         </div>
      </div> 
   </itemBody>
</assessmentItem>`