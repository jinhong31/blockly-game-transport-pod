const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M110" title="Recycling Claw Item 09" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-10 p1-check-finish p1-confirm-tutorial" data-progress="tut" data-itemid="P1M110" data-module="RobotArm" data-subtitle="1 of 2">
         <div class="task-title g-hide" data-am-translate="m110.task.title" data-am-translate-group="m1.title">Recycling Claw - Tutorial 1 of 2</div>
         <div class="g-focus-grey"></div>
         <div class="p1-m1-world-panel g-rtl-float-left p1-m1-standalone">
            <div class="p1-m1-world-container g-focus-white">
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
               <button class="g-btn-blockly g-btn-press" data-action="left">
                  <span data-am-translate="m1.codeblocks.b1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move left</span>
               </button>
               <button class="g-btn-blockly g-btn-press" data-action="right">
                  <span data-am-translate="m1.codeblocks.b2" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move right</span>
               </button>
               <div class="g-btn-holder g-hide">
                  <button class="g-btn-blockly g-btn-press" data-action="pickup">
                     <span data-am-translate="m1.codeblocks.b3" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">pick up</span>
                  </button>
               </div>
               <div class="g-btn-holder g-hide">
                  <button class="g-btn-blockly g-btn-press" data-action="place">
                     <span data-am-translate="m1.codeblocks.b4" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">place</span>
                  </button>
               </div>
            </div>
         </div>

         <div class="g-modal am-modal p1-m1-10-intro-dialog">
            <div class="g-modal-content g-tutorial-modal-content">

               <div class="g-tutorial-modal-card">
                  <div class="g-tutorial-modal-avatar">
                     <img class="g-avatar-img g-avatar-medium g-rtl-img" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png"/>
                  </div>
                  <div class="g-tutorial-modal-text">
                     <div class="g-tutorial-modal-para">
                        <span data-am-translate="m110.tutorial.modal.1" data-am-translate-group="m110.tutorial.modal" data-wysiwyg="false">
                           Let's get started — the claw can be controlled with simple instructions like ‘move left’ and ‘move right’.
                        </span>
                     </div>
                  </div>
               </div>
               <div class="g-btn-grid">
                  <button name="close" class="g-btn g-close g-tutorial-modal-close-btn">
                     <span data-am-translate="p1.tutorial.start" data-wysiwyg="false" data-am-translate-group="m110.tutorial.modal">Get started</span>
                  </button>
               </div>

            </div>
         </div>

         <div id="p1-m1-10-tutorial-window"></div>
         
         <div class="g-modal am-modal g-tutorial-finished">
            <div class="g-tutorial-window g-tutorial-window-finished g-rtl-left-pos">
               <i class="g-tutorial-window-info fas fa-check-circle g-rtl-left-pos"></i>
               <div class="g-tutorial-window-content">
                 <div class="g-tutorial-window-card">
                   <img class="g-avatar-img g-rtl-img g-avatar-medium" src="/engine/packages/PISA2025/Resources/images/fitness-avatar.png" />
                   <div>
                     <div class="g-tutorial-window-card-text g-tutorial-modal-text">
                        <span data-am-translate="p1.tutorial.back" data-wysiwyg="false" data-am-translate-group="m110.tutorial.window"></span>
                     </div>
                   </div>
                 </div>
                  <button class="g-btn g-tutorial-window-finished-button g-next">
                  <span data-am-translate="p1.tutorial.next" data-wysiwyg="false" data-am-translate-group="m110.tutorial.window">Next</span>
                  </button>
               </div>
             </div>
         </div>
    
         <div class="g-hide g-tutorial-text">
            <div class="tutorial-text" data-target="1" data-action-required="false" data-required-action-index="0" data-triangle-position="bottomRight" data-position-top="350" data-position-xpos="230"  data-is-current="true">
               <span data-am-translate="m110.tutorial.window.1" data-am-translate-group="m110.tutorial.window" data-wysiwyg="true">
                  Use the controls to match the claw with the goal state.
               </span>
            </div>
            <div class="tutorial-text-warning" data-target="1w" data-triangle-position="bottom-right" data-position-top="350" data-position-xpos="230" data-attached-to-tutorial="0">
               <span data-am-translate="m110.tutorial.window.1w" data-am-translate-group="m110.tutorial.window">
                  That’s not quite right.<br />The claw needs to move left.
               </span>
            </div>   
            <div class="tutorial-text" data-target="2" data-action-required="false" data-triangle-position="bottom-right" data-position-top="350" data-position-xpos="230">
               <span data-am-translate="m110.tutorial.window.2" data-am-translate-group="m110.tutorial.window">
                  Great! <br />Now instruct the claw to move left again.
               </span>
            </div>       
            <div class="tutorial-text" data-target="3" data-action-required="false" data-triangle-position="bottom-right" data-position-top="140" data-position-xpos="230" data-focus="claw">
               <span data-am-translate="m110.tutorial.window.3" data-am-translate-group="m110.tutorial.window" data-wysiwyg="false">
                  When the claw cannot complete an instruction, an error message will appear. 
               </span>
            </div>
            <div class="tutorial-text" data-target="4" data-action-required="false" data-triangle-position="bottom-right" data-position-top="350" data-position-xpos="200" data-focus="left50">
               <span data-am-translate="m110.tutorial.window.4" data-am-translate-group="m110.tutorial.window" data-wysiwyg="false">
                  Now instruct the claw to pick up and place the object to match the goal state.
               </span>
            </div>
            <div class="tutorial-text-warning" data-target="4w" data-action-required="false" data-triangle-position="bottom-right" data-position-top="140" data-position-xpos="200">
               <span data-am-translate="m110.tutorial.window.4w" data-am-translate-group="m110.tutorial.window" data-wysiwyg="false">
                  You have encountered an error. <br />Let’s walk through the steps together.
               </span>
            </div>
            <div class="tutorial-text-warning" data-target="5w" data-action-required="false" data-triangle-position="bottom-right" data-position-top="350" data-position-xpos="200">
               <span data-am-translate="m110.tutorial.window.5w" data-am-translate-group="m110.tutorial.window" data-wysiwyg="false">
                  Let's go through the steps together. 
               </span>
            </div>
            <div class="tutorial-text-warning" data-target="6w" data-action-required="false" data-triangle-position="bottom-right" data-position-top="350" data-position-xpos="230">
               <span data-am-translate="m110.tutorial.window.6w" data-am-translate-group="m110.tutorial.window" data-wysiwyg="false">
                  Click ‘move left’ to move the claw above the object. 
               </span>
            </div>
             <div class="tutorial-text-warning" data-target="7w" data-action-required="false" data-triangle-position="bottom-right" data-position-top="350" data-position-xpos="550">
               <span data-am-translate="m110.tutorial.window.7w" data-am-translate-group="m110.tutorial.window" data-wysiwyg="false">
                  ‘Pick up’ instructs an empty claw to grab and raise the object directly below.
               </span>
            </div>
            <div class="tutorial-text-warning" data-target="8w" data-action-required="false" data-triangle-position="bottom-right" data-position-top="350" data-position-xpos="380">
               <span data-am-translate="m110.tutorial.window.8w" data-am-translate-group="m110.tutorial.window" data-wysiwyg="false">
                  Now click ‘move right’ to match the claw with the goal state.
               </span>
            </div>
            <div class="tutorial-text-warning" data-target="9w" data-action-required="false" data-triangle-position="bottom-right" data-position-top="350" data-position-xpos="710">
               <span data-am-translate="m110.tutorial.window.9w" data-am-translate-group="m110.tutorial.window" data-wysiwyg="false">
                  ‘Place’ instructs the claw to put down an object. 
               </span>
            </div>
            
            <div class="tutorial-text-finished" data-target="finish" data-position-top="175" data-position-xpos="435">
               <span data-am-translate="m110.tutorial.window.finish" data-am-translate-group="m110.tutorial.window">
                  Well done!
               </span>
            </div>  
         </div>

      </div>
   </itemBody>
</assessmentItem>`