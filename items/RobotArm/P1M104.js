const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M104" title="Recycling Claw Item 04" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-04 g-fill p1-check-select p1-check-finish p1-confirm-finish likert" data-itemid="P1M104" data-module="RobotArm" data-progress="quiz">
         <div class="task-title g-hide" data-am-translate="m104.task.title" data-am-translate-group="m1.title">Recycling Claw - Quiz 2 of 5</div>
         <div class="g-quiz">
            <div class="g-instructions">
               <p class="g-text-top" data-am-translate="m104.question.1" data-am-translate-group="m104.question" data-wysiwyg="false">
                  The program (below) should move &#x25CF; to the grey square while avoiding the black squares.               </p>
               <p data-am-translate="m104.question.2" data-am-translate-group="m104.question" data-wysiwyg="false">
                  An arrow moves &#x25CF; by one square in the direction indicated by the arrow.
               </p>
               <div class="g-text-code-block">
                  <span class="g-code-instruction" data-am-translate="m104.question.code.1" data-am-translate-group="m104.question" data-wysiwyg="false">Program:</span><br />
                  <span class="g-code-line" data-am-translate="m104.question.code.2" data-am-translate-group="m104.question" data-wysiwyg="false">Line 1</span>&#160;
                     <span data-am-translate="m104.action.1" data-am-translate-group="m104.question" data-wysiwyg="false">start</span><br />
                  <span class="g-code-line" data-am-translate="m104.question.code.3" data-am-translate-group="m104.question" data-wysiwyg="false">Line 2</span>&#160;
                     <span data-am-translate="m1.codeblocks.b9" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move up</span><br />
                  <span class="g-code-line" data-am-translate="m104.question.code.4" data-am-translate-group="m104.question" data-wysiwyg="false">Line 3</span>&#160;
                     <span data-am-translate="m1.codeblocks.b1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move left</span><br />
                  <span class="g-code-line" data-am-translate="m104.question.code.5" data-am-translate-group="m104.question" data-wysiwyg="false">Line 4</span>&#160;
                  <span data-am-translate="m1.codeblocks.b9" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move up</span><br />
                  <span class="g-code-line" data-am-translate="m104.question.code.6" data-am-translate-group="m104.question" data-wysiwyg="false">Line 5</span>&#160;
                  <span data-am-translate="m1.codeblocks.b1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move left</span><br />
                  <span class="g-code-line" data-am-translate="m104.question.code.7" data-am-translate-group="m104.question" data-wysiwyg="false">Line 6</span>&#160;
                  <span data-am-translate="m1.codeblocks.b9" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move up</span><br />
                  <span class="g-code-line" data-am-translate="m104.question.code.8" data-am-translate-group="m104.question" data-wysiwyg="false">Line 7</span>&#160;
                     <span data-am-translate="m104.action.4" data-am-translate-group="m104.question" data-wysiwyg="false">end</span><br />      
               </div>
               <div class='g-grid-container g-grid-block-medium'>
                  <div class='g-grid-block g-grid-block-grey'></div>
                  <div class='g-grid-block g-grid-block-black'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block g-grid-block-black'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block g-grid-block-black'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block g-grid-block-black'></div>
                  <div class='g-grid-block g-grid-block-dot'>&#x25CF;</div>
               </div> 
            </div>
            <div class="g-quiz-a">
               <p class="g-quiz-header" data-am-translate="m104.question.3" data-am-translate-group="m104.question" data-wysiwyg="false">There is one mistake in the program. What change would fix the mistake? </p>
               &#160;<span data-am-translate="m104.question.4" data-am-translate-group="m104.question" data-wysiwyg="false">The instruction in</span>&#160;
               <div class="g-styled-select g-quiz-content">
                  <select id="P1M104A" class="g-inline-select" data-save="true">
                     <option value="" selected="selected" data-am-likert-option-incomplete="true"></option>
                     <option value="1" data-am-translate="m104.question.code.3" data-am-translate-group="m104.question" data-wysiwyg="false">Line 2</option>
                     <option value="2" data-am-translate="m104.question.code.4" data-am-translate-group="m104.question" data-wysiwyg="false">Line 3</option>
                     <option value="3" data-am-translate="m104.question.code.5" data-am-translate-group="m104.question" data-wysiwyg="false">Line 4</option>
                     <option value="4" data-am-translate="m104.question.code.6" data-am-translate-group="m104.question" data-wysiwyg="false">Line 5</option>
                     <option value="5" data-am-translate="m104.question.code.7" data-am-translate-group="m104.question" data-wysiwyg="false">Line 6</option>
                  </select>
                  <span class="focus"></span>
               </div>
               &#160;<span data-am-translate="m104.question.5" data-am-translate-group="m104.question" data-wysiwyg="false">should be</span>&#160;
               <div class="g-styled-select">
                  <select id="P1M104B" class="g-inline-select" data-save="true">
                     <option value="" selected="selected" data-am-likert-option-incomplete="true"></option>
                     <option value="1" data-am-translate="m1.codeblocks.b9" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move up</option>
                     <option value="2" data-am-translate="m1.codeblocks.b10" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move down</option>
                     <option value="3" data-am-translate="m1.codeblocks.b1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move left</option>
                     <option value="4" data-am-translate="m1.codeblocks.b2" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move right</option>
                  </select>
                  <span class="focus"></span>
               </div>
            </div>
         </div>
      </div>
   </itemBody>
</assessmentItem>`