const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M115" title="Recycling Claw Item (old) 14" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-15 p1-check-finish p1-check-blockly" data-itemid="P1M115" data-max-attempts="1" data-module="RobotArm" data-progress="tut">
         <div class="g-instructions g-avatar">
            <img class="g-avatar-img g-rtl-img g-avatar-medium" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
            <div>
               <p class="g-text-top" data-am-translate="m115.instruction.1" data-am-translate-group="m115.instruction" data-wysiwyg="false">
                  Some types of code blocks wrap around other code blocks.
               </p>
               <p class="g-text-bottom g-no-p-margin" data-am-translate="m115.instruction.2" data-am-translate-group="m115.instruction" data-wysiwyg="true">
                  Click on <i class="fas fa-question-circle g-reveal-bubble-ico"></i> to find out how.
               </p>
            </div>
         </div>  
         <div class="p1-m1-world-section">
            <div data-id="P1M115B1" class="g-reveal-bubble p1-m1-15-b1 g-bubble-focused g-rtl-left-pos g-bubble-conditional" data-next=".p1-m1-15-b2">
               <span class="g-reveal-bubble-num">?</span>
               <div class="g-reveal-bubble-txt" data-am-translate="m115.bubble.1" data-am-translate-group="m115.bubble" data-wysiwyg="false">
                  Drag the four action blocks into the trash can.
               </div>
            </div>
            <div data-id="P1M115B2" class="g-reveal-bubble p1-m1-15-b2 g-bubble-focused g-rtl-left-pos g-bubble-conditional g-bubble-disabled" data-next=".p1-m1-15-b3">
               <span class="g-reveal-bubble-num">?</span>
               <div class="g-reveal-bubble-txt" data-am-translate="m115.bubble.2" data-am-translate-group="m115.bubble" data-wysiwyg="false">
                  Clip a 'repeat' block to the 'when run' block
               </div>
            </div>
            <div data-id="P1M115B3" class="g-reveal-bubble p1-m1-15-b3 g-bubble-focused g-rtl-left-pos g-bubble-conditional g-bubble-disabled" data-next=".p1-m1-15-b4">
               <span class="g-reveal-bubble-num">?</span>
               <div class="g-reveal-bubble-txt" data-am-translate="m115.bubble.3" data-am-translate-group="m115.bubble" data-wysiwyg="false">
                  Replace the number 0 with 4 in the 'repeat' block
               </div>
            </div>
            <div data-id="P1M115B4" class="g-reveal-bubble p1-m1-15-b4 g-bubble-focused g-rtl-left-pos g-bubble-conditional g-bubble-disabled" data-next=".p1-m1-15-b5">
               <span class="g-reveal-bubble-num">?</span>
               <div class="g-reveal-bubble-txt" data-am-translate="m115.bubble.4" data-am-translate-group="m115.bubble" data-wysiwyg="false">
                  Clip a 'move right' block into the 'repeat' block
               </div>
            </div>
            <div class="g-blockly-container">
               <div class="g-blockly-tabs g-clearfix">
                  <div class="g-rtl-float-left g-blockly-cb-title g-blockly-tab" data-am-translate="m1.codeblocks.tab.1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Code Blocks</div>
                  <div class="g-rtl-float-left g-blockly-ws-title g-blockly-tab">
                     <span data-am-translate="m1.codeblocks.tab.2" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Work space</span>
                  </div>
               </div>
               <div id="blocklyDiv" data-id="P1M115" class="g-blockly g-hide-blockly-filler"></div>
               <div class="g-blockly-undo"><i class="fas fa-undo g-btn-blockly-undo"></i><i class="fas fa-redo g-btn-blockly-redo"></i></div>
               <div class="g-rtl-float-left g-blockly-count">
                     <span id="blocksCount">1</span>
                     <span data-am-translate="m1.codeblocks.tab.5" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">block used</span>
               </div>
            </div>
            <div class="p1-m1-world-panel">
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
               <div class="p1-m1-world-btn-strip">
                  <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run g-btn-blockly-main">
                     <i class="g-rtl-img fas fa-play"></i>
                     <span data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run program</span>
                  </button> 
                  <div data-id="P1M115B5" class="g-reveal-bubble p1-m1-15-b5 g-bubble-focused g-rtl-left-pos g-bubble-conditional g-bubble-disabled">
                        <span class="g-reveal-bubble-num">?</span>
                        <div class="g-reveal-bubble-txt" data-am-translate="m115.bubble.5" data-am-translate-group="m115.bubble" data-wysiwyg="false">
                           Click run to test your program
                        </div>
                  </div>
                  <div class="g-blockly-speed-holder"></div>
               </div>
            </div>
         </div>    
      </div>
   </itemBody>
</assessmentItem>`