const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M122" title="Recycling Claw Item (old) 20" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-22 g-show-hint g-show-resources p1-check-finish p1-confirm-finish" data-itemid="P1M122" data-blocks="7" data-module="RobotArm">
         <div class="g-instructions g-avatar">
            <img class="g-avatar-img g-rtl-img g-avatar-medium" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
            <div>
               <p class="g-text-top g-no-p-margin" data-am-translate="m122.instruction.1" data-am-translate-group="m122.instruction" data-wysiwyg="true">
                     Build <b>one</b> program that makes the claw meet the goal for <b>both</b> the metal can and the glass jar.
               </p>
               <p class="g-text-bottom" data-am-translate="m122.instruction.2" data-am-translate-group="m122.instruction" data-wysiwyg="false">
                     The claw can finish in any position, as long as the can and the jar end up in their goal positions.
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
               <div id="blocklyDiv" class="g-blockly"></div>
            </div>
            <div class="p1-m1-world-panel p1-m1-22-world1 p1-m1-world-switch">
               <div class="p1-m1-world-switch-holder">
                  <button class="p1-m1-world-switch-btn p1-m1-active" data-target=".g-blockly-content1">
                     <div class="p1-m1-world-switch-btn-ico"><i class="fas fa-check p1-m1-correct"></i><i class="fas fa-times p1-m1-incorrect"></i></div>
                     <div class="p1-m1-world-switch-btn-lbl" data-am-translate="m122.world.3" data-am-translate-group="m122.world" data-wysiwyg="false">Can</div>
                  </button>
                  <button class="p1-m1-world-switch-btn" data-target=".g-blockly-content2">
                     <div class="p1-m1-world-switch-btn-lbl" data-am-translate="m122.world.4" data-am-translate-group="m122.world" data-wysiwyg="false">Jar</div>
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
               <div class="p1-world-btn-strip">
                  <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run">
                     <i class="g-rtl-img fas fa-play"></i>
                     <span data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run</span>
                  </button>
                  <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-reset">
                     <i class="g-rtl-img fas fa-undo"></i>
                     <span data-am-translate="m1.buttons.reset" data-am-translate-group="m1.buttons" data-wysiwyg="false">Reset</span>
                  </button>
                  <div class="g-blockly-speed-holder"></div>
               </div>
            </div>
         </div>    
         <div class="g-modal g-hint-dialog p1-m1 am-modal">
            <div class="g-modal-content">
               <div class="g-clearfix">
                  <button name="close" class="g-dialog-btn g-close g-rtl-float-right"><i class="far fa-window-close"></i></button>
               </div>
               <div class="g-hint-block">
                  <button name="show-hint1" class="g-btn">
                     <span data-am-translate="m1.popup.hint.1" data-wysiwyg="false" data-am-translate-group="m1.popup.hint">Show Hint 1</span>
                  </button>
                  <div class="g-hint-text">
                     <div class="g-hint-number">1.</div>
                     <div class="g-hint-content">
                        <p class="g-text-top g-no-p-margin" data-am-translate="m122.hint1.1" data-am-translate-group="m122.hint1" data-wysiwyg="true">
                           Check that your program meets the goal in both the 
                           <img class="p1-m1-ra-obj-ico" src="/engine/packages/PISA2025/Resources/images/objA.png" /> world and the <img class="p1-m1-ra-obj-ico" src="/engine/packages/PISA2025/Resources/images/objB.png" /> world.
                        </p>
                     </div>
                  </div>
               </div>
               <div class="g-hint-block g-invisible">
                  <button name="show-hint2" class="g-btn">
                     <span data-am-translate="m1.popup.hint.2" data-wysiwyg="false" data-am-translate-group="m1.popup.hint">Show Hint 2</span>
                  </button>
                  <div class="g-hint-text">
                     <div class="g-hint-number">2.</div>
                     <div class="g-hint-content">
                        <p class="g-text-top" data-am-translate="m122.hint2.1" data-am-translate-group="m122.hint2" data-wysiwyg="false">
                           Check that your program contains two "if" blocks.</p>
                        <div id="blocklyHint2" class="g-blockly-subsitute p1-m1-blockly-tripple-h"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </itemBody>
</assessmentItem>`