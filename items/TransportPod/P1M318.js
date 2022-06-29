const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M318" title="Transport Pod Item 18" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m3 p1-m3-18 p1-check-finish p1-confirm-finish p1-help-stats p1-check-efficiency" data-itemid="P1M318" data-progress="lc" data-blocks="7" data-module="TransportPod">
      <div class="task-title g-hide" data-am-translate="m318.task.title" data-am-translate-group="m3.title">Transport Pod - Learning task 3 of 4</div>    
         <div class="g-instructions-help-wrapper">
            <div class="g-instructions g-avatar">
               <img class="g-avatar-img g-avatar-medium g-rtl-img" src="/engine/packages/PISA2025/Resources/images/pod-avatar.png" />
               <div>
                  <p class="g-text-top" data-am-translate="m318.general.1" data-am-translate-group="m318.general" data-wysiwyg="false">
                     Build a program to instruct the Nature Pod to follow the path, making each left turn as required and stopping at <span class="yellow-circle"></span>.
                  </p>
                  <p data-am-translate="m318.general.2" data-am-translate-group="m318.general" data-wysiwyg="false">
                     Use as few code blocks as possible.
                  </p>
               </div>
            </div> 
            <div class="g-help-holder">
               <button name="help" class="g-help g-btn" data-am-translate="m3.butons.help" data-am-translate-group="m3.buttons" data-wysiwyg="false">Help</button>
            </div>
         </div>
         <div class="p1-m3-world-section">
            <div class="g-blockly-container">
               <div class="g-blockly-tabs g-clearfix">
                  <div class="g-rtl-float-left g-blockly-cb-title g-blockly-tab" data-am-translate="m3.codeblocks.tab.1" data-am-translate-group="m3.codeblocks" data-wysiwyg="false">Code blocks</div>
                  <div class="g-rtl-float-left g-blockly-ws-title-ext g-blockly-tab">
                     <span data-am-translate="m3.codeblocks.tab.2" data-am-translate-group="m3.codeblocks" data-wysiwyg="false">Work space: </span>
                     <span id="blocksCount">1</span>
                  </div>
               </div>
               <div id="blocklyDiv" data-id="P1M318" class="g-blockly"></div>
            </div>
            <div class="p1-m3-world-panel">
               <div class="p1-m3-world-container container">
                  <div class="p1-m3-world-tabs g-clearfix">
                     <div class="g-rtl-float-left g-blockly-tab g-blockly-tab-active" data-am-translate="m3.world.1" data-am-translate-group="m3.world" data-wysiwyg="false" data-switch-target=".tab-simulation">Simulation</div>
                     <div class="g-rtl-float-left g-blockly-tab g-blockly-tab-inactive tab-info" data-am-translate="m3.world.3" data-am-translate-group="m3.world" data-wysiwyg="false">Information</div>
                  </div>
                  <div class="tab-content tab-simulation">
                     <div id="tp-world1" class="p1-m3-world g-blockly-target"></div>
                  <div class="p1-world-btn-strip">
                     <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run g-btn-blockly-main">
                        <i class="g-rtl-img fas fa-play"></i>
                        <span class="blockly-run-btn" data-am-translate="m3.buttons.run" data-am-translate-group="m3.buttons" data-wysiwyg="false">Run</span>
                        <span class="blockly-reset-btn g-hide" data-am-translate="m3.buttons.reset" data-am-translate-group="m3.buttons" data-wysiwyg="false">Reset</span>
                     </button>
                     <div class="g-blockly-speed-holder"></div>
                  </div>
                  </div>
               </div>    
            </div>
         </div> 
         <div class="g-hide g-task-help">
            <!-- HELP 3 --> 
            <div id="P1H03" class="g-help-page3 g-switch-content g-invisible" data-help-level="1" data-switch-target=".g-help-page1">
               <div class="g-help-inline-title" data-am-translate="m3.help.popup.page3.1" data-am-translate-group="m3.help.popup.page3" data-wysiwyg="false">
                  Learning Resources
               </div>
               <p class="g-text-top" data-am-translate="m3.help.popup.page3.2" data-am-translate-group="m3.help.popup.page3" data-wysiwyg="false">
                  The pod needs to move forward until it detects a corner using the sensors. Each time the Nature Pod reaches detects a corner, it then needs to turn left until the middle sensor is back over the path.
               </p>
            </div>
            <!-- HELP 4--> 
            <div id="P1H04" class="g-help-page4 g-switch-content g-invisible" data-help-level="2" data-switch-target=".g-help-page1" data-init="P1M318_P1H2">
               <div class="g-help-inline-title" data-am-translate="m3.help.popup.page4.1" data-am-translate-group="m3.help.popup.page4" data-wysiwyg="false">
                  Additional Learning Resources
               </div>
               <p class="g-text-top" data-am-translate="m3.help.popup.page4.2" data-am-translate-group="m3.help.popup.page4" data-wysiwyg="false">
                  Look at the following example, related to a different but similar problem.
               </p>
               <p class="g-text-bottom" data-am-translate="m3.help.popup.page4.3" data-am-translate-group="m3.help.popup.page4" data-wysiwyg="false">
                  Click on the ‘Run’ buttons to see how the programs work.
               </p>
               <div class="p1-m3-world-section">
                  <div class="g-blockly-container">
                     <div class="g-blockly-tabs g-clearfix">
                        <div class="g-rtl-float-left g-blockly-tab">
                           <span data-am-translate="m3.codeblocks.tab.2" data-am-translate-group="m3.codeblocks" data-wysiwyg="false">Work space: </span>
                           <span>7</span>
                        </div>
                     </div>
                     <div id="blocklyDivH2" class="g-blockly g-blockly-h2"></div>
                  </div>
                  <div class="p1-m3-world-panel">
                     <div class="p1-m3-world-container">
                        <div class="p1-m3-world-tabs g-clearfix">
                           <div class="g-rtl-float-left p1-m3-world-title g-blockly-tab" data-am-translate="m3.world.1" data-am-translate-group="m3.world" data-wysiwyg="false">Nature reserve simulation</div>
                        </div>
                        <div id="tp-world1-h2" class="p1-m3-world g-blockly-target-h2"></div>
                     </div>    
                     <div class="p1-m3-world-btn-strip">
                        <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run-h2">
                           <i class="g-rtl-img fas fa-play"></i>
                           <span data-am-translate="m3.buttons.run" data-am-translate-group="m3.buttons" data-wysiwyg="false">Run</span>
                        </button>
                        <div class="g-blockly-speed-holder"></div>
                     </div>
                  </div>
               </div>  
               <div class="p1-l2-warning">
                  <div><button class="g-btn g-switch-btn" data-switch-target=".g-help-page318">
                      <span data-am-translate="m3.help.popup.page4.4" data-am-translate-group="m3.help.popup.page4" data-wysiwyg="false">Show correct solution</span>
                     </button>
                  </div>
                  <div data-am-translate="m3.help.popup.page4.5" data-am-translate-group="m3.help.popup.page4" data-wysiwyg="false">
                     Still can’t make progress? You can access the solution with an explanation, but you will earn <span class="g-help-red">zero credit</span> on this task.
                  </div>  
               </div>
               <div class="g-bubble p1-m3-18-b1 g-bubble-none" data-am-translate="m3.help.popup.page4.1" data-am-translate-group="m3.help.popup.page4" data-wysiwyg="false">
                     Each time the Nature Pod reaches a right turn, it must turn right until the middle sensor is over the path. 
                     It keeps moving forward and turning right as needed until it reaches the red square.
               </div> 
            </div> 
         </div>
      </div>
   </itemBody>
</assessmentItem>`
