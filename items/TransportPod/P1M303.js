const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M303" title="Transport Pod Item 03" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m3 p1-m3-03 g-fill p1-check-select p1-check-finish p1-confirm-finish likert" data-itemid="P1M303" data-module="TransportPod" data-progress="quiz">
         <div class="task-title g-hide" data-am-translate="m303.task.title" data-am-translate-group="m3.title">Transport Pod - Quiz 1 of 5</div>
         <div class="g-quiz">
            <div class="g-instructions">
               <p class="g-text-top" data-am-translate="m303.question.1" data-am-translate-group="m303.question" data-wysiwyg="false">
                  The program below contains instructions for moving the rover along the gridlines.
               </p>
               <p data-am-translate="m303.question.2" data-am-translate-group="m303.question" data-wysiwyg="false">
                  The program should move the rover to the <span class="yellow-circle"></span> while avoiding the rocks.​ There is one mistake in the program.​
               </p> 
               <div class="g-flex-center-row">
                  <div class="g-text-code-block">
                     <span class="g-code-instruction" data-am-translate="m303.question.code.1" data-am-translate-group="m303.question" data-wysiwyg="false">Program:</span><br />
                     <span class="g-code-line" data-am-translate="m303.question.code.2" data-am-translate-group="m303.question" data-wysiwyg="false">Line 1</span>&#160;
                     <span data-am-translate="m303.question.code.action.1" data-am-translate-group="m303.question" data-wysiwyg="false">start</span><br />
                     <span class="g-code-line" data-am-translate="m303.question.code.3" data-am-translate-group="m303.question" data-wysiwyg="false">Line 2</span>&#160;
                     <span data-am-translate="m303.question.code.action.2" data-am-translate-group="m303.question" data-wysiwyg="false">Move left</span><br />
                     <span class="g-code-line" data-am-translate="m303.question.code.4" data-am-translate-group="m303.question" data-wysiwyg="false">Line 3</span>&#160;
                     <span data-am-translate="m303.question.code.action.3" data-am-translate-group="m303.question" data-wysiwyg="false">Move up</span><br />
                     <span class="g-code-line" data-am-translate="m303.question.code.5" data-am-translate-group="m303.question" data-wysiwyg="false">Line 4</span>&#160;
                     <span data-am-translate="m303.question.code.action.2" data-am-translate-group="m303.question" data-wysiwyg="false">Move up</span><br />
                     <span class="g-code-line" data-am-translate="m303.question.code.6" data-am-translate-group="m303.question" data-wysiwyg="false">Line 5</span>&#160;
                     <span data-am-translate="m303.question.code.action.3" data-am-translate-group="m303.question" data-wysiwyg="false">Move left</span><br />
                     <span class="g-code-line" data-am-translate="m303.question.code.7" data-am-translate-group="m303.question" data-wysiwyg="false">Line 6</span>&#160;
                     <span data-am-translate="m303.question.code.action.2" data-am-translate-group="m303.question" data-wysiwyg="false">Move left</span><br />
                     <span class="g-code-line" data-am-translate="m303.question.code.8" data-am-translate-group="m303.question" data-wysiwyg="false">Line 7</span>&#160;
                     <span data-am-translate="m303.question.code.action.4" data-am-translate-group="m303.question" data-wysiwyg="false">Move down</span><br />  
                     <span class="g-code-line" data-am-translate="m303.question.code.9" data-am-translate-group="m303.question" data-wysiwyg="false">Line 8</span>&#160;
                     <span data-am-translate="m303.question.code.action.4" data-am-translate-group="m303.question" data-wysiwyg="false">Move up</span><br />  
                     <span class="g-code-line" data-am-translate="m303.question.code.10" data-am-translate-group="m303.question" data-wysiwyg="false">Line 9</span>&#160;
                     <span data-am-translate="m303.question.code.action.4" data-am-translate-group="m303.question" data-wysiwyg="false">end</span><br />      
                  </div>
                  <div class='g-grid-container g-grid-block-medium'>
                     <div class='g-grid-block'><span class="yellow-circle"></span></div>
                     <div class='g-grid-block'><img class="g-grid-rock g-grid-top-left" src="/engine/packages/PISA2025/Resources/images/rock.png"/></div>
                     <div class='g-grid-block'></div>
                     <div class='g-grid-block'></div>
                     <div class='g-grid-block'></div>
                     <div class='g-grid-block'><img class="g-grid-rock g-grid-bottom-right" src="/engine/packages/PISA2025/Resources/images/rock.png"/></div>
                     <div class='g-grid-block'></div>
                     <div class='g-grid-block'><img class="g-grid-rock g-grid-bottom-right" src="/engine/packages/PISA2025/Resources/images/rock.png"/></div>
                     <div class='g-grid-block'></div>
                     <div class='g-grid-block'><img class="g-grid-rock g-grid-bottom-right" src="/engine/packages/PISA2025/Resources/images/rock.png"/></div>
                     <div class='g-grid-block'></div>
                     <div class='g-grid-block'><img class="g-grid-rover" src="/engine/packages/PISA2025/Resources/images/rover.png"/></div>
                  </div> 
               </div>          
            </div>
            <div class="g-quiz-a">
               <p class="g-quiz-header" data-am-translate="m303.question.3" data-am-translate-group="m303.question" data-wysiwyg="false">What change should be made to fix the mistake? </p>
               &#160;<span data-am-translate="m303.response.4" data-am-translate-group="m303.response" data-wysiwyg="false">For</span>&#160;
               <div class="g-styled-select g-quiz-content">
                  <select id="P1M303A" class="g-inline-select likert-group" data-save="true">
                     <option value="" selected="selected" data-am-likert-option-incomplete="true"></option>
                     <option value="1" data-am-translate="m303.question.code.3" data-am-translate-group="m303.question" data-wysiwyg="false">Line 2</option>
                     <option value="2" data-am-translate="m303.question.code.4" data-am-translate-group="m303.question" data-wysiwyg="false">Line 3</option>
                     <option value="3" data-am-translate="m303.question.code.5" data-am-translate-group="m303.question" data-wysiwyg="false">Line 4</option>
                     <option value="4" data-am-translate="m303.question.code.6" data-am-translate-group="m303.question" data-wysiwyg="false">Line 5</option>
                     <option value="5" data-am-translate="m303.question.code.2" data-am-translate-group="m303.question" data-wysiwyg="false">Line 6</option>
                     <option value="6" data-am-translate="m303.question.code.6" data-am-translate-group="m303.question" data-wysiwyg="false">Line 7</option>
                     <option value="7" data-am-translate="m303.question.code.2" data-am-translate-group="m303.question" data-wysiwyg="false">Line 8</option>
                  </select>
                  <span class="focus"></span>
               </div>
               <span data-am-translate="m303.response.5" data-am-translate-group="m303.response" data-wysiwyg="false">the instruction should be</span>&#160;
               <div class="g-styled-select">
                  <select id="P1M303B" class="g-inline-select likert-group" data-save="true">
                     <option value="" selected="selected" data-am-likert-option-incomplete="true"></option>
                     <option value="1" data-am-translate="m303.response.dropdown2.1" data-am-translate-group="m303.response">move up</option>
                     <option value="2" data-am-translate="m303.response.dropdown2.2" data-am-translate-group="m303.response">move down</option>
                     <option value="3" data-am-translate="m303.response.dropdown2.3" data-am-translate-group="m303.response">move left</option>
                     <option value="4" data-am-translate="m303.response.dropdown2.4" data-am-translate-group="m303.response">move right</option>
                  </select>
                  <span class="focus"></span>
               </div>
            </div>
         </div>
      </div>
   </itemBody>
</assessmentItem>`
