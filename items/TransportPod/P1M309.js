const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd"
   identifier="P1M309" title="Transport Pod Item 09" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m3 p1-m3-09" data-progress="tut" data-itemid="P1M309" data-module="TransportPod">
         <div class="task-title g-hide" data-am-translate="m309.task.title" data-am-translate-group="m3.title">Transport
            pod - tutorial 1 of 2</div>
         <div id="p1-m3-09-tutorial-main-window" class="height-full"></div>
         <div class="g-modal am-modal p1-m3-09-intro-dialog">
            <div class="g-modal-content g-tutorial-modal-content">
               <div class="g-tutorial-modal-card">
                  <div class="g-tutorial-modal-avatar">
                     <img class="g-avatar-img g-avatar-large g-rtl-img"
                        src="/engine/packages/PISA2025/Resources/images/pod-avatar.png" />
                  </div>
                  <div>
                     <div class="g-tutorial-modal-text">
                        <div class="g-tutorial-modal-para">
                           <span data-am-translate="m309.tutorial.modal.1" data-am-translate-group="m309.tutorial.modal"
                              data-wysiwyg="false">
                              Before we start programming the
                              Nature Pod, I want to first teach you
                              a bit about how the Nature Pod
                              works.
                           </span>
                        </div>
                     </div>
                     <div class="g-btn-grid">
                        <button id="start-first-tutorial" name="close" class="g-btn g-close g-tutorial-modal-close-btn">
                           <span data-am-translate="p1.tutorial.start" data-wysiwyg="false"
                              data-am-translate-group="m309.tutorial.modal">Get started</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="p1-m3-09-tutorial-window"></div>

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
                              data-am-translate-group="m309.tutorial.window"></span>
                        </div>
                     </div>
                  </div>
                  <div class="flex">
                     <div class="g-tutorial-window-back-button flex text-green">Back</div>
                     <button class="g-btn g-tutorial-window-finished-button g-next">
                        <span data-am-translate="p1.tutorial.next" data-wysiwyg="false"
                           data-am-translate-group="m309.tutorial.window">Next</span>
                     </button>
                  </div>

               </div>
            </div>
         </div>
         <div class="g-hide g-tutorial-text">
            <div class="tutorial-text" data-target="1" data-action-required="false" data-required-action-index="0"
               data-triangle-position="left" data-position-top="220" data-position-xpos="520" data-is-current="true">
               <span class="tutorial-alert" data-am-translate="m309.tutorial.window.1"
                  data-am-translate-group="m309.tutorial.window" data-wysiwyg="true">
                  As you can see here, the Nature
                  Pod has two wheels and three
                  colour sensors.
               </span>
            </div>
            <div class="tutorial-text" data-target="2" data-action-required="false" data-triangle-position="left"
               data-position-top="125" data-position-xpos="444" data-is-current="true">
               <span class="tutorial-alert" data-am-translate="m309.tutorial.window.2"
                  data-am-translate-group="m309.tutorial.window" data-wysiwyg="true">
                  The sensors are used to instruct the Nature Pod to follow a given path.
                  <br />
                  <br />
                  Let’s take a closer look.
               </span>
            </div>
            <div class="tutorial-text" data-target="3" data-action-required="false" data-triangle-position="left"
               data-position-top="111" data-position-xpos="469" data-is-current="true">
               <span class="tutorial-alert" data-am-translate="m309.tutorial.window.3"
                  data-am-translate-group="m309.tutorial.window" data-wysiwyg="true">
                  Each of the three colour sensors on the Nature pod detects the colour of the surface directly beneath
                  it. The Nature Pod uses this sensor information in programs to help it move around.
               </span>
            </div>
            <div class="tutorial-text" data-target="4" data-action-required="false" data-triangle-position="left"
               data-position-top="102" data-position-xpos="520" data-is-current="true">
               <span class="tutorial-alert" data-am-translate="m309.tutorial.window.4"
                  data-am-translate-group="m309.tutorial.window" data-wysiwyg="true">
                  Click on the sensor that is not currently detecting black.
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