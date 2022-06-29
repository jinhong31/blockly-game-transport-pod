const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M116" title="Recycling Claw Item (old) 15" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-16 p1-check-finish" data-itemid="P1M116" data-max-attempts="1" data-module="RobotArm">
         <div class="g-instructions g-avatar">
            <img class="g-avatar-img g-rtl-img g-avatar-medium" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
            <div>
               <p class="g-text-top" data-am-translate="m116.instruction.1" data-am-translate-group="m116.instruction" data-wysiwyg="false">
                  Sometimes, we want to test if our program works on different problems.
               </p>
               <p class="g-text-bottom g-no-p-margin" data-am-translate="m116.instruction.2" data-am-translate-group="m116.instruction" data-wysiwyg="true">
                  Click on <i class="fas fa-question-circle g-reveal-bubble-ico"></i> to find out how.
               </p>
            </div>
         </div>              
         <div class="p1-m1-world-section">
            <div class="g-blockly-container">
               <div class="g-blockly-tabs g-clearfix">
                  <div class="g-rtl-float-left g-blockly-cb-title g-blockly-tab" data-am-translate="m1.codeblocks.tab.1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Code Blocks</div>
                  <div class="g-rtl-float-left g-blockly-ws-title g-blockly-tab">
                     <span data-am-translate="m1.codeblocks.tab.2" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Work space: </span>
                     <span id="blocksCount">1</span>
                  </div>
               </div>
               <div id="blocklyDiv" class="g-blockly g-hide-blockly-filler"></div>
            </div>
            <div class="p1-m1-world-panel p1-m1-16-world1 p1-m1-world-switch">
               <div class="g-reveal-bubble p1-m1-16-b2 g-bubble-disabled g-rtl-left-pos g-bubble-conditional">
                  <span class="g-reveal-bubble-num">?</span>
                  <div class="g-reveal-bubble-txt" data-am-translate="m115.bubble.2" data-am-translate-group="m115.bubble" data-wysiwyg="false">
                     Toggle to task 2 by clicking the 'Task 2' tab below, then click run to see if the program meets the goal for Task 2.
                  </div>
               </div>
               <div class="p1-m1-world-switch-holder">
                  <button class="p1-m1-world-switch-btn p1-m1-active" data-target=".g-blockly-content1">
                     <div class="p1-m1-world-switch-btn-ico"><i class="fas fa-check p1-m1-correct"></i><i class="fas fa-times p1-m1-incorrect"></i></div>
                     <div class="p1-m1-world-switch-btn-lbl" data-am-translate="m116.world.3" data-am-translate-group="m116.world" data-wysiwyg="false">Task 1</div>
                  </button>
                  <button class="p1-m1-world-switch-btn" data-target=".g-blockly-content2">
                     <div class="p1-m1-world-switch-btn-lbl" data-am-translate="m116.world.4" data-am-translate-group="m116.world" data-wysiwyg="false">Task 2</div>
                     <div class="p1-m1-world-switch-btn-ico"><i class="fas fa-check p1-m1-correct"></i><i class="fas fa-times p1-m1-incorrect"></i></div>
                  </button>
               </div>
               <div class="g-blockly-tab-content g-blockly-content1">
                  <div class="p1-m1-world-container">
                     <div class="p1-m1-world-tabs g-clearfix">
                        <div class="g-rtl-float-left p1-m1-world-title g-blockly-tab" data-am-translate="m1.world.1" data-am-translate-group="m1.world" data-wysiwyg="false">Claw</div>
                     </div>
                     <div class="p1-m1-world-header"></div>
                     <div id="robo-world1" class="p1-m1-world g-blockly-target"></div>
                  </div>
                  <div class="p1-m1-world-container">
                     <div class="p1-m1-world-tabs g-clearfix">
                        <div class="g-rtl-float-left p1-m1-goal-title g-blockly-tab" data-am-translate="m1.world.2" data-am-translate-group="m1.world" data-wysiwyg="false">Goal</div>
                     </div>                 
                     <div class="p1-m1-world-header"></div>
                     <div id="robo-world2" class="p1-m1-world p1-m1-goal"></div>
                  </div>  
               </div>
               <div class="g-blockly-tab-content g-blockly-content2 g-hide">
                  <div class="p1-m1-world-container">
                     <div class="p1-m1-world-tabs g-clearfix">
                        <div class="g-rtl-float-left p1-m1-world-title g-blockly-tab" data-am-translate="m1.world.1" data-am-translate-group="m1.world" data-wysiwyg="false">Claw</div>
                     </div>
                     <div class="p1-m1-world-header"></div>
                     <div id="robo-world3" class="p1-m1-world"></div>
                  </div>
                  <div class="p1-m1-world-container">
                     <div class="p1-m1-world-tabs g-clearfix">
                        <div class="g-rtl-float-left p1-m1-goal-title g-blockly-tab" data-am-translate="m1.world.2" data-am-translate-group="m1.world" data-wysiwyg="false">Goal</div>
                     </div>                 
                     <div class="p1-m1-world-header"></div>
                     <div id="robo-world4" class="p1-m1-world p1-m1-goal"></div>
                  </div>
               </div>
               <div class="p1-m1-world-btn-strip">
                  <div class="g-btn-holder">
                     <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run">
                        <i class="g-rtl-img fas fa-play"></i>
                        <span data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run</span>
                     </button>            
                     <div class="g-reveal-bubble p1-m1-16-b1 g-bubble-focused g-rtl-left-pos g-bubble-conditional" data-next=".p1-m1-16-b2" data-target=".g-btn-ico g-btn-blockly-run">
                        <span class="g-reveal-bubble-num">?</span>
                        <div class="g-reveal-bubble-txt" data-am-translate="m116.bubble.1" data-am-translate-group="m116.bubble" data-wysiwyg="false">
                           Click run to see if the program meets the goal for Task 1.
                        </div>
                     </div>
                  </div>
                  <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-reset">
                     <i class="g-rtl-img fas fa-undo"></i>
                     <span data-am-translate="m1.buttons.reset" data-am-translate-group="m1.buttons" data-wysiwyg="false">Reset</span>
                  </button>
                  <div class="g-blockly-speed-holder"></div>
               </div>
            </div>
         </div>    
      </div>
   </itemBody>
</assessmentItem>`