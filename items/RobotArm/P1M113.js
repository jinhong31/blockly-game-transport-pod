const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M113" title="Recycling Claw Item (old) 18" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-13 p1-no-response p1-check-blockly" data-itemid="P1M113" data-max-attempts="1" data-module="RobotArm">             
         <div class="g-instructions g-no-p-margin" data-am-translate="m113.instruction.1" data-am-translate-group="m113.instruction" data-wysiwyg="false">
               Snap one 'move right' block to the 'when run' block so that the claw moves to its goal.
         </div>  
         <div class="g-reveal-bubble p1-m1-13-b1 g-activate-target">
            <span class="g-reveal-bubble-num">1</span>
            <span class="g-reveal-bubble-txt" data-am-translate="m113.bubble.1" data-am-translate-group="m113.bubble" data-wysiwyg="false">
               Drag a 'move right' block into the workspace and clip it to the ‘when run’ block
            </span>
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
                  <div class="g-btn-holder">
                     <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run">
                        <i class="g-rtl-img fas fa-play"></i>
                        <span data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run</span>
                     </button>            
                     <div class="g-reveal-bubble p1-m1-13-b2 g-activate-target g-hide">
                        <span class="g-reveal-bubble-num">2</span>
                        <span class="g-reveal-bubble-txt" data-am-translate="m113.bubble.2" data-am-translate-group="m113.bubble" data-wysiwyg="false">
                           Click run to test your program
                        </span>
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