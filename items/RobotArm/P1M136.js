const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M136" title="Recycling Claw Item (old) 12" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-36 g-fill p1-no-response p1-check-mcq" data-itemid="P1M136" data-module="RobotArm">
         <div class="g-instructions">
            <div>
               <p class="g-text-top" data-am-translate="m136.question.1" data-am-translate-group="m136.question" data-wysiwyg="false">
                  The program contains the instructions for moving &#x25CF; around the grid, and for placing &#x25C7;.    
               </p>
               <div class="g-code-instruction" data-am-translate="m136.question.code.1" data-am-translate-group="m136.question" data-wysiwyg="false">Program:</div>
               <div class="g-blockly " id="blocklyDiv"></div>
            </div>
            <div>
               <div class='g-grid-container g-grid-block-small'>
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
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block g-grid-block-dot'>&#x25CF;</div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
                  <div class='g-grid-block'></div>
               </div> 
               <div class="p1-m1-36-response-box">
                  <p data-am-translate="m136.question.2" data-am-translate-group="m136.question" data-wysiwyg="false">
                     Which of these show what will result after the program is run?
                  </p>
                  <div data-id="MixedInlineInteraction-RESPONSE1"  id="P1M136" class="g-mcg">
                     <label class="g-mcq-label g-rtl-float-left">
                        <span class="g-mcq-radio-wrapper">
                           <input type="radio" class="g-mcq-radio" name="P1M136" id="rA" value="A" tabindex="1"/>
                           <span class="g-mcq-radio-styled"></span>
                        </span>
                        <div class='g-grid-container g-grid-block-small'>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-dot'>&#x25CF;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                        </div> 
                     </label>  
                     <label class="g-mcq-label g-rtl-float-left">
                        <span class="g-mcq-radio-wrapper">
                           <input type="radio" class="g-mcq-radio" name="P1M136" id="rB" value="B" tabindex="2"/>
                           <span class="g-mcq-radio-styled"></span>
                        </span>
                        <div class='g-grid-container g-grid-block-small'>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-dot'>&#x25CF;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                        </div> 
                     </label>  
                     <label class="g-mcq-label g-rtl-float-left">
                        <span class="g-mcq-radio-wrapper">
                           <input type="radio" class="g-mcq-radio" name="P1M136" id="rC" value="C" tabindex="3"/>
                           <span class="g-mcq-radio-styled"></span>
                        </span>
                        <div class='g-grid-container g-grid-block-small'>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-dot'>&#x25CF;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                        </div> 
                     </label>  
                     <label class="g-mcq-label g-rtl-float-left">
                        <span class="g-mcq-radio-wrapper">
                           <input type="radio" class="g-mcq-radio" name="P1M136" id="rD" value="D" tabindex="4"/>
                           <span class="g-mcq-radio-styled"></span>
                        </span>
                        <div class='g-grid-container g-grid-block-small'>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-dot'>&#x25CF;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block'></div>
                           <div class='g-grid-block g-grid-block-diamond'>&#x25C7;</div>
                        </div> 
                     </label>  
                  </div>     

               </div>
            </div>    
         </div>
      </div>   
      <div class="g-hide">
         <span data-am-translate="m136.codeblocks.1" data-wysiwyg="false" data-am-translate-group="m136.codeblocks" id="ra-move-down-lbl">place &#x25C7; on grid</span>
         <span data-am-translate="m136.codeblocks.2" data-wysiwyg="false" data-am-translate-group="m136.codeblocks" id="ra-if-shape-holding-lbl">if</span>
         <span data-am-translate="m136.codeblocks.3" data-wysiwyg="false" data-am-translate-group="m136.codeblocks" id="ra-square-lbl">no grid square to left</span>
         <span data-am-translate="m136.codeblocks.4" data-wysiwyg="false" data-am-translate-group="m136.codeblocks" id="ra-else-lbl">else</span>
     </div>
   </itemBody>
</assessmentItem>`