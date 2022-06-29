const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M112" title="Recycling Claw Item (old) 12" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-12" data-itemid="P1M112" data-module="RobotArm" data-progress="tut">
         <!-- <div class="g-instructions g-avatar">
            <img class="g-avatar-img g-rtl-img g-avatar-medium" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
            <div>
               <p class="g-text-top" data-am-translate="m112.instructions.1" data-am-translate-group="m112.instructions" data-wysiwyg="false">
                  These are some important buttons you will need.
               </p>                  
               <p data-am-translate="m112.instructions.2 g-no-p-margin" data-am-translate-group="m112.instructions" data-wysiwyg="true">
                  Click on <i class="fas fa-question-circle g-reveal-bubble-ico"></i> to learn. 
                  When you are ready, click <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i> to try some simple programming!
               </p>
            </div>
         </div>      -->
         <div class="p1-m1-world-section">
            <div class="g-blockly-container">
               <div class="p1-m1-info-layer"></div>
               <div class="g-blockly-tabs g-clearfix">
                  <div class="g-rtl-float-left g-blockly-cb-title g-blockly-tab" data-am-translate="m1.codeblocks.tab.1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Code Blocks</div>
                  <div class="g-rtl-float-left g-blockly-ws-title g-blockly-tab">
                     <span data-am-translate="m1.codeblocks.tab.2" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Work space</span>
                  </div>
               </div>
               <div id="blocklyDiv" class="g-blockly g-hide-blockly-filler"></div>
               <div class="g-blockly-undo"><i class="fas fa-undo g-btn-blockly-undo"></i><i class="fas fa-redo g-btn-blockly-redo"></i></div>
               <div class="g-rtl-float-left g-blockly-count">
                     <span id="blocksCount">1</span>
                     <span data-am-translate="m1.codeblocks.tab.5" data-am-translate-group="m1.codeblocks" data-wysiwyg="false"> block used</span>
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
                  <div class="g-btn-holder">
                     <button class="g-btn-blockly g-btn-ico g-btn-blockly-b">
                        <i class="g-rtl-img fas fa-play"></i>
                        <span data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run program</span>
                     </button>            
                     <div data-id="P1M112B1" class="g-reveal-bubble p1-m1-12-b1 g-activate-target g-bubble-focused g-rtl-left-pos" data-next=".p1-m1-12-b2" data-target=".g-btn-blockly-b">
                        <span class="g-reveal-bubble-num">?</span>
                        <div class="g-reveal-bubble-txt g-no-p-margin" data-am-translate="m112.bubble.1" data-am-translate-group="m112.bubble" data-wysiwyg="true">
                           The 'Run' button allows you to test your program as many times as you want. You can change your program even after you click run. 
                           Once your are satisfied with your solution, click <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i> to submit it.
                        </div>
                     </div>
                  </div>
                  <div class="g-btn-holder">
                     <button class="g-btn-blockly g-btn-ico g-btn-blockly-a">
                        <i class="g-rtl-img fas fa-undo"></i>
                        <span data-am-translate="m1.buttons.reset" data-am-translate-group="m1.buttons" data-wysiwyg="false">Reset</span>
                     </button>            
                     <div data-id="P1M112B2" class="g-reveal-bubble p1-m1-12-b2 g-activate-target g-bubble-disabled g-rtl-left-pos" data-next=".p1-m1-12-b3" data-target=".g-btn-blockly-a">
                        <span class="g-reveal-bubble-num">?</span>
                        <div class="g-reveal-bubble-txt" data-am-translate="m112.bubble.2" data-am-translate-group="m112.bubble" data-wysiwyg="false">
                           The 'Reset' button resets the claw to its original state.
                        </div>
                     </div>
                  </div>
                  <div class="g-blockly-speed-holder">        
                      <div data-id="P1M112B3" class="g-reveal-bubble p1-m1-12-b3 g-activate-target g-bubble-disabled g-rtl-right-pos" data-next=".g-next" data-target=".g-blockly-speed, .g-blockly-speed-bar, .g-blockly-speed-hare, .g-blockly-speed-turtle">
                        <span class="g-reveal-bubble-num">?</span>
                        <div class="g-reveal-bubble-txt" data-am-translate="m112.bubble.3" data-am-translate-group="m112.bubble" data-wysiwyg="false">
                           The slider allows you to set the speed of the claw.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>  
         
        
      </div>
   </itemBody>
</assessmentItem>`