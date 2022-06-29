const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M137" title="Recycling Claw Item 22" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-37  p1-check-finish p1-check-mcq multiple-choice" data-itemid="P1M137" data-module="RobotArm" data-progress="bc" data-count-answer="1">
         <div class="task-title g-hide" data-am-translate="m137.task.title" data-am-translate-group="m1.title">Recycling Claw - Self-evaluation 2 of 4</div>
         <div class="g-quiz">
            <div class="g-instructions">
               <p class="g-text-top" data-am-translate="m137.question.1" data-am-translate-group="m137.question" data-wysiwyg="false">
                  Your friend needs help to solve the Challenge.
               </p>
               <p class="g-text-bottom" data-am-translate="m137.question.2" data-am-translate-group="m137.question" data-wysiwyg="false">
                  One possible solution is shown below.
               </p>
               <div class="p1-m1-world-panel">
                  <div>
                     <div class="p1-m1-world-container">
                        <div class="p1-m1-world-tabs g-clearfix">
                           <div class="g-rtl-float-left p1-m1-world-title g-blockly-tab" data-am-translate="m1.world.1" data-am-translate-group="m1.world" data-wysiwyg="false">Recycling claw</div>
                        </div>
                        <div class="p1-m1-world-header"></div>
                        <div id="robo-world1" class="p1-m1-world g-blockly-target"></div>
                     </div>
                     <div class="p1-m1-world-container">
                        <div class="p1-m1-world-tabs g-clearfix">
                           <div class="g-rtl-float-left p1-m1-goal-title g-blockly-tab" data-am-translate="m1.world.2" data-am-translate-group="m1.world" data-wysiwyg="false">Goal state</div>
                        </div>                 
                        <div class="p1-m1-world-header"></div>
                        <div id="robo-world6" class="p1-m1-world p1-m1-goal"></div>
                     </div>
                  </div>
                  <div class="g-blockly-main" id="blocklyDiv"></div>    
               </div>
            </div>  
            <div class="g-quiz-a">
               <p class="g-quiz-header" data-am-translate="m137.question.3" data-am-translate-group="m137.question" data-wysiwyg="false">
                  Identify the part of the program that instructs the claw when holding a jar and/or a can (select on option).
               </p>
               <div id="P1M137" class="g-mcg multiple-choice-group">
                  <label class="g-mcq-label">
                     <span class="g-mcq-radio-wrapper">
                        <input type="radio" class="g-mcq-radio" name="P1M137" id="rA" value="1" tabindex="1"/>
                        <span class="g-mcq-radio-styled"></span>
                     </span>
                     <div id="blocklyDiv2"></div>  
                  </label>  
                  <label class="g-mcq-label g-mcq-label-extend">
                     <span class="g-mcq-radio-wrapper">
                        <input type="radio" class="g-mcq-radio" name="P1M137" id="rB" value="2" tabindex="2" />
                        <span class="g-mcq-radio-styled"></span>
                     </span>
                     <div id="blocklyDiv3"></div>
                  </label>  
                  <label class="g-mcq-label">
                     <span class="g-mcq-radio-wrapper">
                        <input type="radio" class="g-mcq-radio" name="P1M137" id="rC" value="3" tabindex="3" />
                        <span class="g-mcq-radio-styled"></span>
                     </span>
                     <div id="blocklyDiv4"></div>
                  </label>  
                  <label class="g-mcq-label">
                     <span class="g-mcq-radio-wrapper">
                        <input type="radio" class="g-mcq-radio" name="P1M137" id="rD" value="4" tabindex="4" />
                        <span class="g-mcq-radio-styled"></span>
                     </span>
                     <div id="blocklyDiv5"></div>
                  </label>    
               </div>  
            </div>
         </div>
      </div>
      <div class="g-hide">
         <span data-am-translate="m137.codeblocks.1" data-wysiwyg="false" data-am-translate-group="m137.codeblocks" id="ra-if-claw-holding-lbl">if claw is holding </span>
     </div> 
   </itemBody>
</assessmentItem>`