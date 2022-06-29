const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M121" title="Recycling Claw Item 13 (old)" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-21 p1-check-finish p1-confirm-finish p1-check-efficiency p1-help-stats" data-progress="lc" data-blocks="6" data-itemid="P1M121" data-module="RobotArm">
         <div class="task-title g-hide" data-am-translate="m121.task.title" data-am-translate-group="m1.title">Recycling Claw - Learning task 2 of 4</div>
         <div class="g-instructions-help-wrapper">
            <div class="g-instructions g-avatar">
               <img class="g-avatar-img g-rtl-img g-avatar-medium g-avatar-intro" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
               <i class="fas fa-info-circle intro-info"></i>
               <div>
                  <p class="g-text-top">
                     <span data-am-translate="m121.instruction.1" data-am-translate-group="m121.instruction" data-wysiwyg="false">Build a </span>
                     <span class="g-tooltip" data-am-translate="m121.tooltip.1" data-am-translate-group="m121.tooltip">program<span class="tooltiptext"> a series of coded instructions that control the operation of a machine, like the claw. </span></span> 
                     <span data-am-translate="m121.instruction.2" data-am-translate-group="m121.instruction" data-wysiwyg="false"> that instructs the claw to move to the far right column then back to the starting position, 5 times.</span>
                  </p>
                  <p class="g-text-bottom" data-am-translate="m121.instruction.3" data-am-translate-group="m121.instruction" data-wysiwyg="false">
                     Your program should use as few blocks as possible.
                  </p>
               </div>
            </div>
         </div>         
         <div class="p1-m1-world-section">
            <div class="g-blockly-container">
               <div class="g-blockly-tabs g-clearfix">
                  <div class="g-rtl-float-left g-blockly-cb-title g-blockly-tab" data-am-translate="m1.codeblocks.tab.1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Code blocks</div>
                  <div class="g-rtl-float-left g-blockly-ws-title g-blockly-tab">
                     <span data-am-translate="m1.codeblocks.tab.2" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Work space</span>
                  </div>
                  <div class="g-rtl-float-left g-help-ico g-tooltip g-tooltip-ws" data-switch-target=".g-help-page2">
                     <i class="fas fa-book"></i> 2
                     <span class="tooltiptext">Example: moving the claw side-to-side</span>
                  </div>
               </div>
               <div id="blocklyDiv" data-id="P1M121" class="g-blockly"></div>
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
                  <div class="p1-m1-21-txt" data-am-translate="m121.goal.1" data-am-translate-group="m1.world" data-wysiwyg="false">x5</div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="55" viewBox="0 0 150 50" class="p1-m1-21-arrow-right">
                     <polygon points="1.266 24.704 125.3 24.704" stroke-width="6" />
                     <polygon points="124.4 14.284 124.4 34.606 148.35 23.69" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="55" viewBox="0 0 150 50" class="p1-m1-21-arrow-left">
                     <polygon points="1.266 24.704 125.3 24.704" stroke-width="6" />
                     <polygon points="124.4 14.284 124.4 34.606 148.35 23.69" />
                  </svg>
                  <div id="robo-world2" class="p1-m1-world p1-m1-goal"></div>
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
           <!-- LC starting introduction modal client change Feb 2020 -->
           <div class="g-modal am-modal g-lc-intro-dialog">
            <div class="g-lc-introduction-window g-tutorial-window-normal g-rtl-left-pos">

               <span class="g-tutorial-window-top-right-tri-group">
               <span class="g-tutorial-window-tri-big g-tutorial-window-top-right-tri-big g-rtl-left-pos"></span>
               <span class="g-tutorial-window-tri-big  g-tutorial-window-top-right-tri-big g-tutorial-window-top-tri-border-big g-rtl-left-pos"></span>
               </span>
            
            
               <div class="g-tutorial-window-content">
               <div class="g-introduction-card">
                  <img class="g-avatar-img g-rtl-img g-avatar-medium" src="/engine/packages/PISA2025/Resources/images/fitness-avatar.png" />
                  <div class="g-tutorial-window-card-text-lc-introduction g-tutorial-modal-text">
                     <div>
                        <span data-am-translate="lc.instruction.1" data-am-translate-group="lc.instruction" data-wysiwyg="false">The claw is controlled by a small computer with very limited memory. It can store only a few instructions.</span>
                     </div>
            
                     <div>
                        <span data-am-translate="lc.instruction.2" data-am-translate-group="lc.instruction">In some of the following tasks I will ask you to <b>use as few code blocks as possible.</b></span>            
                     </div>

                  </div>
               </div>
            
               <div class="g-tutorial-window-buttom-group">
            
                  <button class="g-btn  g-tutorial-window-next-button  g-close g-tutorial-modal-close-btn">
                     <span data-am-translate="lc.instruction.got.it" data-am-translate-group="lc.instruction" data-wysiwyg="false">Got it!</span>
                  </button>
            
               </div>
               </div>
            </div>
         </div>
         <!-- END LC starting introduction modal client change Feb 2020 -->  
         
         <!-- Hint --> 
         <div class="g-hide g-task-hint">
            <div class="g-hint-page3 g-switch-content g-invisible">
               <p class="g-text-top" data-am-translate="m1.popup.hint.3.1" data-wysiwyg="false" data-am-translate-group="m1.hint">There are two main parts to the problem:</p>
               <ul><li data-am-translate="m1.popup.hint.3.2" data-wysiwyg="false" data-am-translate-group="m1.hint">Move the claw four columns to the right, then return the claw to its starting position.</li>
                     <li data-am-translate="m1.popup.hint.3.3" data-wysiwyg="false" data-am-translate-group="m1.hint">Repeat the actions above five times</li></ul>
               <p data-am-translate="m1.popup.hint.3.4" data-wysiwyg="false" data-am-translate-group="m1.hint">Try to put together the code blocks for each part of the problem separately. Then, think about how the two parts join together. See example <i class="fas fa-book"></i></p>
               <p class="g-text-bottom" data-am-translate="m1.popup.hint.3.5" data-wysiwyg="false" data-am-translate-group="m1.hint">Click on 
                  <img class="g-avatar-img g-avatar-xsmall" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
                  <i class="fas fa-info-circle help-info"></i>to view this hint again.
               </p>
            </div>
         </div>

         <!-- Solution --> 
         <div class="g-hide g-task-solution">
            <div class="g-solution-page g-switch-content g-invisible" data-init="P1M121_P1H3">
               <div class="p1-m1-world-section">
                  <div class="g-blockly-container g-solution-correct">            
                     <div class="g-blockly-tabs g-clearfix">
                        <div class="g-rtl-float-left g-blockly-tab">
                           <span data-am-translate="m1.codeblocks.solution.1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Correct solution</span>
                        </div>
                     </div>
                     <div class="g-blockly" id="blocklyDivH121"></div>
                     <div class="p1-world-btn-strip">
                        <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run-h121" reset-target=".g-blockly-target-h121">
                           <i class="g-rtl-img fas fa-play"></i>
                           <span class="blockly-run-btn" data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run</span>
                           <span class="blockly-reset-btn g-hide" data-am-translate="m1.buttons.reset" data-am-translate-group="m1.buttons" data-wysiwyg="false">Reset</span>
                        </button>
                     </div>
                  </div>
                  <div class="g-blockly-container">            
                     <div class="g-blockly-tabs g-clearfix">
                        <div class="g-rtl-float-left g-blockly-tab">
                           <span data-am-translate="m1.codeblocks.solution.2" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Your solution</span>
                        </div>
                     </div>
                     <div class="g-blockly" id="blocklyDivHsa"></div>
                     <div class="p1-world-btn-strip">
                        <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run-hsa" reset-target=".g-blockly-target-h121">
                           <i class="g-rtl-img fas fa-play"></i>
                           <span class="blockly-run-btn" data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run</span>
                           <span class="blockly-reset-btn g-hide" data-am-translate="m1.buttons.reset" data-am-translate-group="m1.buttons" data-wysiwyg="false">Reset</span>
                        </button>
                     </div>
                  </div>
                  <div class="p1-m1-world-panel">
                     <div class="p1-m1-world-container">
                        <div class="p1-m1-world-tabs g-clearfix">
                           <div class="g-rtl-float-left p1-m1-world-title g-blockly-tab" data-am-translate="m1.world.1" data-am-translate-group="m1.world" data-wysiwyg="false">Recycling claw</div>
                        </div>
                        <div class="p1-m1-world-header"></div>
                        <div id="robo-world1-h121" class="p1-m1-world g-blockly-target-h121 g-blockly-target-hsa"></div>
                     </div>
                     <div class="p1-m1-world-container">
                        <div class="p1-m1-world-tabs g-clearfix">
                           <div class="g-rtl-float-left p1-m1-goal-title g-blockly-tab" data-am-translate="m1.world.2" data-am-translate-group="m1.world" data-wysiwyg="false">Goal state</div>
                        </div>                 
                        <div class="p1-m1-world-header"></div>
                           <div class="p1-m1-21-txt" data-am-translate="m121.goal.1" data-am-translate-group="m1.world" data-wysiwyg="false">x5</div>
                           <svg xmlns="http://www.w3.org/2000/svg" height="55" viewBox="0 0 150 50" class="p1-m1-21-arrow-right">
                              <polygon points="1.266 24.704 125.3 24.704" stroke-width="6" />
                              <polygon points="124.4 14.284 124.4 34.606 148.35 23.69" />
                           </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" height="55" viewBox="0 0 150 50" class="p1-m1-21-arrow-left">
                              <polygon points="1.266 24.704 125.3 24.704" stroke-width="6" />
                              <polygon points="124.4 14.284 124.4 34.606 148.35 23.69" />
                           </svg>
                        <div id="robo-world2-h121" class="p1-m1-world p1-m1-goal"></div>
                     </div>      
                     <div class="p1-world-btn-strip">
                        <div class="g-blockly-speed-holder"></div>
                     </div>
                  </div>
               </div>                                                          
            </div> 
         </div>
      </div>
   </itemBody>
</assessmentItem>`