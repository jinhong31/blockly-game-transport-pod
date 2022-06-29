const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M114" title="Recycling Claw Item 10" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-14 p1-check-finish p1-confirm-tutorial p1-help-stats" data-itemid="P1M114" data-module="RobotArm" data-progress="tut">
         <div class="task-title g-hide" data-am-translate="m114.task.title" data-am-translate-group="m1.title">Recycling Claw - Tutorial 2 of 2</div>
         <div class="g-focus-grey"></div>
         <div class="p1-m1-world-section">
            <div class="g-blockly-container">
               <div class="g-blockly-tabs g-clearfix">
                  <div class="g-rtl-float-left g-blockly-cb-title g-blockly-tab" data-am-translate="m1.codeblocks.tab.1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Code blocks</div>
                  <div class="g-rtl-float-left g-blockly-ws-title g-blockly-tab">
                     <span data-am-translate="m1.codeblocks.tab.2" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Work space</span>
                  </div>
                  <div class="g-rtl-float-left g-help-ico g-tooltip g-tooltip-ws" data-switch-target=".g-help-page0">
                     <i class="fas fa-book"></i>
                  </div>
               </div>
               <div id="blocklyDiv" data-id="P1M114" class="g-blockly g-hide-blockly-filler"></div>
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
                  <div id="robo-world2" class="p1-m1-world p1-m1-goal"></div>
               </div>      
               <div class="p1-world-btn-strip">
                  <div class="g-btn-holder">
                     <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run g-btn-blockly-main">
                        <i class="g-rtl-img fas fa-play"></i>
                        <span class="blockly-run-btn" data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run</span>
                        <span class="blockly-reset-btn g-hide" data-am-translate="m1.buttons.reset" data-am-translate-group="m1.buttons" data-wysiwyg="false">Reset</span>
                     </button>            
                     <div data-id="P1M114B2" class="g-reveal-bubble p1-m1-14-b2 g-rtl-left-pos g-bubble-disabled">
                        <span class="g-reveal-bubble-num">?</span>
                        <div class="g-reveal-bubble-txt" data-am-translate="m114.bubble.1" data-am-translate-group="m114.bubble" data-wysiwyg="false">
                           Click run to test your program
                        </div>
                     </div>
                  </div>
                  <div class="g-blockly-speed-holder"></div>
               </div>
            </div>
         </div>

         <div class="g-modal am-modal p1-m1-14-intro-dialog">
            <div class="g-modal-content g-tutorial-modal-content">

               <div class="g-tutorial-modal-card">
                  <div class="g-tutorial-modal-avatar">
                     <img class="g-avatar-img g-avatar-medium g-rtl-img" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
                  </div>
                  <div class="g-tutorial-modal-text">
                     <div class="g-tutorial-modal-para">
                        <span data-am-translate="m114.tutorial.modal.1" data-am-translate-group="m114.tutorial.modal" data-wysiwyg="false">
                           Now you will learn to control the claw by building a program using code blocks. 
                        </span>
                     </div>
                  </div>
               </div>
               <div class="g-btn-grid">
                  <button name="close" class="g-btn g-close g-tutorial-modal-close-btn">
                     <span data-am-translate="p1.tutorial.start" data-wysiwyg="false" data-am-translate-group="m114.tutorial.modal">Get started</span>
                  </button>
               </div>

            </div>
         </div>

         <div class="g-modal am-modal g-tutorial-finished">
            <div class="g-tutorial-window g-tutorial-window-finished g-rtl-left-pos">
               <i class="g-tutorial-window-info fas fa-check-circle g-rtl-left-pos"></i>
               <div class="g-tutorial-window-content">
                 <div class="g-tutorial-window-card">
                   <img class="g-avatar-img g-rtl-img g-avatar-medium" src="/engine/packages/PISA2025/Resources/images/fitness-avatar.png" />
                   <div>
                     <div class="g-tutorial-window-card-text g-tutorial-modal-text">
                        <span data-am-translate="p1.tutorial.back" data-wysiwyg="false" data-am-translate-group="m114.tutorial.window"></span>
                     </div>
                   </div>
                 </div>
                  <button class="g-btn g-tutorial-window-finished-button g-next">
                  <span data-am-translate="p1.tutorial.next" data-wysiwyg="false" data-am-translate-group="m114.tutorial.window">Next</span>
                  </button>
               </div>
             </div>
         </div>

         <div id="p1-m1-14-tutorial-window"></div>
    
         <div class="g-hide g-tutorial-text">
            <div class="tutorial-text" data-target="1" data-action-required="false" data-required-action-index="0" data-triangle-position="left" data-position-top="10" data-position-xpos="380"  data-is-current="true">
               <span data-am-translate="m114.tutorial.window.1" data-am-translate-group="m114.tutorial.window">
                  To build the program, drag four ‘move right’ blocks into the work space and clip them to the ‘when run’ block.
               </span>
            </div>
            <div class="tutorial-text" data-target="2" data-triangle-position="bottom-right" data-position-top="395" data-position-xpos="340" data-focus="left57">
               <span data-am-translate="m114.tutorial.window.2" data-am-translate-group="m114.tutorial.window" data-wysiwyg="false" >
                  Click ‘Run’ to test your program. 
               </span>
            </div>   
            <div class="tutorial-text" data-target="3" data-triangle-position="left" data-position-top="10" data-position-xpos="380" data-focus="right43">
               <span data-am-translate="m114.tutorial.window.3" data-am-translate-group="m114.tutorial.window">
                  We can improve this program by using a ‘repeat’ block to reduce the total number of code blocks.<br />
                  Drag the four ‘move right’ blocks into the trash can.
               </span>
            </div>   
            <div class="tutorial-text" data-target="4" data-triangle-position="left" data-position-top="200" data-position-xpos="180" >
               <span data-am-translate="m114.tutorial.window.4" data-am-translate-group="m114.tutorial.window" data-wysiwyg="false" >
                  Drag a ‘repeat’ block into the work space and clip to the ‘when run’ block. 
               </span>
            </div>   
            <div class="tutorial-text" data-target="5" data-triangle-position="left" data-position-top="10" data-position-xpos="380">
               <span data-am-translate="m114.tutorial.window.5" data-am-translate-group="m114.tutorial.window" data-wysiwyg="false" >
                  Replace the ‘0’ with ‘4’ in the ‘repeat’ block.
               </span>
            </div>   
            <div class="tutorial-text" data-target="6" data-triangle-position="left" data-position-top="35" data-position-xpos="380">
               <span data-am-translate="m114.tutorial.window.6" data-am-translate-group="m114.tutorial.window" data-wysiwyg="false" >
                  Now clip a ‘move right’ block into the ‘repeat’ block. 
               </span>
            </div>
            <div class="tutorial-text" data-target="7" data-triangle-position="bottom-right" data-position-top="395" data-position-xpos="340" data-focus="none">
               <span data-am-translate="m114.tutorial.window.7" data-am-translate-group="m114.tutorial.window" data-wysiwyg="false" >
                  Click ‘Reset’ to return the claw to its starting position. Then click ‘Run’ to test your program. 
               </span>
            </div>  
            <div class="tutorial-text" data-target="8" data-triangle-position="top-right" data-position-top="10" data-position-xpos="10">
               <span data-am-translate="m114.tutorial.window.8" data-am-translate-group="m114.tutorial.window" data-wysiwyg="false" >
                  During the tasks, you can view examples to help you make progress. Click on <i class="fas fa-book"></i> to view an example of a similar task. I will offer you a hint after you have spent some time working on your own with the examples.
               </span>
            </div>  
            <div class="tutorial-text-finished" data-target="finish" data-position-top="175" data-position-xpos="435">
               <span data-am-translate="m114.tutorial.window.finish" data-am-translate-group="m114.tutorial.window">
                  Well done! <br />You have finished this tutorial.
               </span>
            </div>  
         </div>  

      </div>
   </itemBody>
</assessmentItem>`