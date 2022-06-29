const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M128" title="Recycling Claw Item 20" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-28 p1-check-finish p1-confirm-finish p1-help-stats" data-itemid="P1M128" data-module="RobotArm" data-progress="bc">      
         <div class="task-title g-hide" data-am-translate="m128.task.title" data-am-translate-group="m1.title">Recycling Claw - Challenge</div>
         <div class="g-instructions-help-wrapper">
            <div class="g-instructions g-avatar">
               <img class="g-avatar-img g-rtl-img g-avatar-medium g-avatar-intro" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
               <i class="fas fa-info-circle intro-info"></i>
               <div>
                  <p class="g-text-top" data-am-translate="m128.instructions.1" data-am-translate-group="m128.instructions">
                     Sort the objects into their goal state positions using as few blocks as possible.
                  </p>
               </div>
            </div>       
         </div>             
         <div class="p1-m1-world-section">
            <div class="g-blockly-container">
               <div class="g-blockly-tabs g-clearfix">
                  <div class="g-rtl-float-left g-blockly-cb-title g-blockly-tab" data-am-translate="m1.codeblocks.tab.1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Code blocks</div>
                  <div class="g-rtl-float-left g-blockly-ws-title-ext g-blockly-tab">
                     <span data-am-translate="m1.codeblocks.tab.2" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Work space</span>
                  </div>
                  <div class="g-rtl-float-left g-help-ico g-tooltip g-tooltip-ws" data-switch-target=".g-help-page1">
                     <i class="fas fa-book"></i> 1
                     <span class="tooltiptext">Using repeat blocks</span>
                  </div>
                  <div class="g-rtl-float-left g-help-ico g-tooltip g-tooltip-ws" data-switch-target=".g-help-page3">
                     <i class="fas fa-book"></i> 2
                     <span class="tooltiptext">Using if/else blocks</span>
                  </div>
                  <div class="g-rtl-float-left g-help-ico g-tooltip g-tooltip-ws" data-switch-target=".g-help-page4">
                     <i class="fas fa-book"></i> 3
                     <span class="tooltiptext">Using fewer code blocks</span>
                  </div>
               </div>
               <div id="blocklyDiv" class="g-blockly" data-id="P1M128"></div>
               <div class="g-blockly-undo"><i class="fas fa-undo g-btn-blockly-undo"></i><i class="fas fa-redo g-btn-blockly-redo"></i></div>
               <div class="g-blockly-label">
                  <span data-am-translate="m1.codeblocks.tab.3" data-am-translate-group="m1.codeblocks">Undo</span>
                  <span data-am-translate="m1.codeblocks.tab.4" data-am-translate-group="m1.codeblocks">Redo</span>
                  <span data-am-translate="m1.codeblocks.tab.5" data-am-translate-group="m1.codeblocks">Delete</span>
               </div>
               <div class="g-rtl-float-left g-blockly-count">
                     <span data-am-translate="m1.codeblocks.tab.6" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Blocks used: </span>
                     <span id="blocksCount">1</span>
               </div>
            </div>

            <div class="p1-m1-world-panel">
               <div class="g-blockly-tab-content">
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
                     <div id="robo-world2" class="p1-m1-world p1-m1-goal"></div>
                  </div>  
               </div>
               <div class="p1-world-btn-strip">
                  <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run g-btn-blockly-main">
                     <i class="g-rtl-img fas fa-play"></i>
                     <span class="blockly-run-btn" data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run</span>
                     <span class="blockly-reset-btn g-hide" data-am-translate="m1.buttons.reset" data-am-translate-group="m1.buttons" data-wysiwyg="false">Reset</span>
                  </button>
                  <div class="g-blockly-speed-holder"></div>
               </div>
            </div>
         </div>         
         <!-- Hint --> 
         <div class="g-hide g-task-hint">
            <div class="g-hint-page3 g-switch-content g-invisible">
               <p class="g-text-top" data-am-translate="m1.popup.hint.3.1" data-wysiwyg="false" data-am-translate-group="m1.hint">There are several parts to the problem:</p>
               <ul><li data-am-translate="m1.popup.hint.3.2" data-wysiwyg="false" data-am-translate-group="m1.hint">Move a jar or can to its goal state position, depending on which object the claw is holding, then return the claw to the column that needs sorting.</li>
                   <li data-am-translate="m1.popup.hint.3.3" data-wysiwyg="false" data-am-translate-group="m1.hint">Repeat the actions above for all the objects in one column.</li>
                   <li data-am-translate="m1.popup.hint.3.4" data-wysiwyg="false" data-am-translate-group="m1.hint">Repeat all of the actions to sort the objects in the other column.</li>
               </ul>
               <p data-am-translate="m1.popup.hint.3.5" data-wysiwyg="false" data-am-translate-group="m1.hint">Think about how to do this using the fewest code blocks. You can also view examples to help you.</p>
               <p class="g-text-bottom" data-am-translate="m1.popup.hint.3.6" data-wysiwyg="false" data-am-translate-group="m1.hint">Click on 
                  <img class="g-avatar-img g-avatar-xsmall" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
                  <i class="fas fa-info-circle help-info"></i>to view this hint again.
               </p>
            </div>
         </div>        
      </div>
   </itemBody>
</assessmentItem>`