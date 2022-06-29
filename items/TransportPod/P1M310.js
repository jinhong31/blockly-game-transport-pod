const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd"
   identifier="P1M310" title="Transport Pod Item 16" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m3 p1-m3-10 p1-check-finish p1-confirm-finish p1-help-stats p1-check-efficiency"
         data-itemid="P1M310" data-blocks="3" data-module="TransportPod" data-progress="tut">
         <div class="task-title g-hide" data-am-translate="m316.task.title" data-am-translate-group="m3.title">Transport
            pod - Tutorial 2 of 2</div>
         <div id="background-cover"></div>
         <div class="p1-m3-world-section">
            <div class="g-blockly-container">
               <div class="g-blockly-tabs g-clearfix">
                  <div class="g-rtl-float-left g-blockly-cb-title g-blockly-tab" data-am-translate="m3.codeblocks.tab.1"
                     data-am-translate-group="m3.codeblocks" data-wysiwyg="false">Code blocks</div>
                  <div class="g-rtl-float-left g-blockly-ws-title g-blockly-tab">
                     <span data-am-translate="m3.codeblocks.tab.2" data-am-translate-group="m3.codeblocks"
                        data-wysiwyg="false">Workspace </span>
                  </div>
               </div>
               <div id="blocklyDiv" data-id="P1M310" class="g-blockly"></div>
               <div class="g-blockly-undo">
                  <i class="fas fa-undo g-btn-blockly-undo"></i>
                  <i class="fas fa-redo g-btn-blockly-redo"></i>
               </div>
               <div class="g-blockly-label">
                  <span data-am-translate="m1.codeblocks.tab.3" data-am-translate-group="m1.codeblocks">Undo</span>
                  <span data-am-translate="m1.codeblocks.tab.4" data-am-translate-group="m1.codeblocks">Redo</span>
                  <span data-am-translate="m1.codeblocks.tab.5" data-am-translate-group="m1.codeblocks">Delete</span>
               </div>
               <div class="g-rtl-float-left g-blockly-count">
                  <span id="blocksCount">1</span>
                  <span data-am-translate="m1.codeblocks.tab.6" data-am-translate-group="m1.codeblocks"
                     data-wysiwyg="false">block used. </span>
               </div>
            </div>
            <div class="p1-m3-world-panel width-full">
               <div class="p1-m3-world-container container width-full">
                  <div class="p1-m3-world-tabs g-clearfix info-bottom-border">
                     <div class="g-rtl-float-left g-blockly-tab g-blockly-tab-active tab-sim"
                        data-am-translate="m3.world.1" data-am-translate-group="m3.world" data-wysiwyg="false"
                        data-switch-target=".tab-simulation">
                        Simulation</div>
                     <div class="g-rtl-float-left g-blockly-tab g-blockly-tab-inactive tab-info"
                        data-am-translate="m3.world.3" data-am-translate-group="m3.world" data-wysiwyg="false">
                        Information</div>
                  </div>
                  <div id="p1-m3-info">
                     <div class="p1-m3-world-tabs g-clearfix">
                        <div class="g-rtl-float-left p1-m3-info-active  tab-nature-pod">
                           <div class="text-18 m-10">Nature pod</div>
                        </div>
                        <div class="g-rtl-float-left p1-m3-info-inactive tab-nature-key">
                           <div class="text-18 m-10">Nature reserve model key</div>
                        </div>
                     </div>
                     <div class="p1-m3-info-body"></div>
                  </div>
                  <div class="tab-content tab-simulation background-white height-full">
                     <div id="tp-world1" class="p1-m3-world g-blockly-target"></div>
                     <div class="p1-world-btn-strip flex">
                        <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run g-btn-blockly-main">
                           <i class="g-rtl-img fas fa-play"></i>
                           <span class="blockly-run-btn text-bold-7" data-am-translate="m3.buttons.run"
                              data-am-translate-group="m3.buttons" data-wysiwyg="false">Run program</span>
                           <span class="blockly-reset-btn g-hide" data-am-translate="m3.buttons.reset"
                              data-am-translate-group="m3.buttons" data-wysiwyg="false">Reset</span>
                        </button>
                        <div class="g-blockly-speed-holder"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="g-modal am-modal p1-m3-10-intro-dialog">
            <div class="g-modal-content g-tutorial-modal-content">
               <div class="g-tutorial-modal-card">
                  <div class="g-tutorial-modal-avatar">
                     <img class="g-avatar-img g-avatar-large g-rtl-img"
                        src="/engine/packages/PISA2025/Resources/images/pod-avatar.png" />
                  </div>
                  <div>
                     <div class="g-tutorial-modal-text">
                        <div class="g-tutorial-modal-para">
                           <span data-am-translate="m310.tutorial.modal.1" data-am-translate-group="m310.tutorial.modal"
                              data-wysiwyg="false">
                              It’s time to learn to program the Nature Pod.
                              <br />
                              <br />
                              We will start by learning how the Nature Pod moves forward.
                           </span>
                        </div>
                     </div>
                     <div class="g-btn-grid">
                        <button id="start-first-tutorial" name="close" class="g-btn g-close g-tutorial-modal-close-btn">
                           <span data-am-translate="p1.tutorial.start" data-wysiwyg="false"
                              data-am-translate-group="m310.tutorial.modal">Get started</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="p1-m3-10-tutorial-window"></div>

         <div class=" g-modal am-modal g-tutorial-finished">
            <div class="g-tutorial-window g-tutorial-window-finished g-rtl-left-pos">
               <i class="g-tutorial-window-info fas fa-check-circle g-rtl-left-pos"></i>
               <div class="g-tutorial-window-content">
                  <div class="g-tutorial-window-card">
                     <img class="g-avatar-img g-rtl-img g-avatar-large"
                        src="/engine/packages/PISA2025/Resources/images/pod-avatar.png" />
                     <div>
                        <div class="g-tutorial-window-card-text g-tutorial-modal-text">
                           <span data-am-translate="p1.tutorial.back" data-wysiwyg="false"
                              data-am-translate-group="m310.tutorial.window"></span>
                        </div>
                     </div>
                  </div>
                  <div class="flex">
                     <div class="g-tutorial-window-back-button flex text-green">Back</div>
                     <button class="g-btn g-tutorial-window-finished-button g-next">
                        <span data-am-translate="p1.tutorial.next" data-wysiwyg="false"
                           data-am-translate-group="m310.tutorial.window">Next</span>
                     </button>
                  </div>

               </div>
            </div>
         </div>
         <div class="g-hide g-tutorial-text">
            <div class="tutorial-text" data-target="1" data-action-required="false" data-required-action-index="0"
               data-triangle-position="left" data-position-top="0" data-position-xpos="350" data-is-current="true">
               <span class="tutorial-alert" data-am-translate="m310.tutorial.window.1"
                  data-am-translate-group="m310.tutorial.window" data-wysiwyg="true">
                  Drag a move forward code block into the workspace and snap it to the when run block.
               </span>
            </div>
            <div class="tutorial-text" data-target="2" data-action-required="false" data-triangle-position="right"
               data-position-top="348" data-position-xpos="248" data-is-current="true">
               <span class="tutorial-alert" data-am-translate="m310.tutorial.window.2"
                  data-am-translate-group="m310.tutorial.window" data-wysiwyg="true">
                  Now click on run program to test your code.
               </span>
            </div>
            <div class="tutorial-text" data-target="3" data-action-required="false" data-triangle-position="left"
               data-position-top="48" data-position-xpos="371" data-is-current="true">
               <span class="tutorial-alert" data-am-translate="m310.tutorial.window.3"
                  data-am-translate-group="m310.tutorial.window" data-wysiwyg="true">
                  Ok, Now that we have got our simulations working, let’s drag the move forward block to the trash, so
                  we can start a new program.
               </span>
            </div>
            <div class="tutorial-text" data-target="4" data-action-required="false" data-triangle-position="left"
               data-position-top="158" data-position-xpos="253" data-is-current="true">
               <span class="tutorial-alert" data-am-translate="m310.tutorial.window.4"
                  data-am-translate-group="m310.tutorial.window" data-wysiwyg="true">
                  This time, let’s drag out the repeat code block and snap it to the when run block in the workspace.
               </span>
            </div>
            <div class="tutorial-text" data-target="5" data-action-required="false" data-triangle-position="left"
               data-position-top="53" data-position-xpos="460" data-is-current="true">
               <span class="tutorial-alert" data-am-translate="m310.tutorial.window.5"
                  data-am-translate-group="m310.tutorial.window" data-wysiwyg="true">
                  We need to select while, middle sensor and the black line from the drop down menus.
               </span>
            </div>
            <div class="tutorial-text" data-target="6" data-action-required="false" data-triangle-position="top-left"
               data-position-top="173" data-position-xpos="240" data-is-current="true">
               <span class="tutorial-alert" data-am-translate="m310.tutorial.window.6"
                  data-am-translate-group="m310.tutorial.window" data-wysiwyg="true">
                  Now let’s snap a move forward code block inside the repeat block.
               </span>
            </div>
            <div class="tutorial-text" data-target="7" data-action-required="false" data-triangle-position="right"
               data-position-top="353" data-position-xpos="253" data-is-current="true">
               <span class="tutorial-alert" data-am-translate="m310.tutorial.window.7"
                  data-am-translate-group="m310.tutorial.window" data-wysiwyg="true">
                  Ok, time to run your program.
                  <br />
                  <br />
                  Click run program now.
               </span>
            </div>
            <div class="tutorial-text" data-target="8" data-action-required="false" data-triangle-position="right"
               data-position-top="353" data-position-xpos="470" data-is-current="true">
               <span class="tutorial-alert" data-am-translate="m310.tutorial.window.8"
                  data-am-translate-group="m310.tutorial.window" data-wysiwyg="true">
                  Great! You can change the speed that your program runs at by using the slow/fast slider.
               </span>
            </div>
            <div class="tutorial-text-finished" data-target="finish" data-position-top="116" data-position-xpos="435">
               <span data-am-translate="m110.tutorial.window.finish" data-am-translate-group="m110.tutorial.window">
                  Well done!
                  <br />
                  <br />
                  You have finished this task.
               </span>
            </div>
         </div>
      </div>
   </itemBody>
</assessmentItem>`