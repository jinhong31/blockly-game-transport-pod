const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M118" title="Recycling Claw Item (old) 29" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-18 shared-response" data-itemid="P1M118" data-module="RobotArm">
         <div class="g-instructions g-avatar">
            <img class="g-avatar-img g-rtl-img g-avatar-medium" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
            <div>
               <p class="g-text-top" data-am-translate="m118.general.1" data-am-translate-group="m118.general" data-wysiwyg="false">
                  Take a look at our solution to the Big Recycling Challenge, and remind yourself of your solution. 
               </p>
               <p class="g-text-top" data-am-translate="m118.general.2" data-am-translate-group="m118.general" data-wysiwyg="true">
                  Click <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i> to continue.
               </p>
            </div>
         </div>
         <div class="p1-m1-18-solution-wrapper">  
            <div class="p1-m1-18-solution-holder">                                 
               <div class="p1-m1-18-solution-header" data-am-translate="m118.general.3" data-am-translate-group="m118.general" data-wysiwyg="true">
                  Our solution (Code blocks used: <span class="p1-m1-18-count1">0</span>)
               </div>
               <div id="blocklyDiv" class="g-blockly"></div>
            </div>        
            <div class="p1-m1-18-solution-holder">                                       
               <div class="p1-m1-18-solution-header" data-am-translate="m118.general.4" data-am-translate-group="m118.general" data-wysiwyg="true">
                  Your solution (Code blocks used: <span class="p1-m1-18-count2">0</span>)
               </div>
               <div id="blocklyDiv2" class="g-blockly"></div>
            </div>        
            <div class="p1-m1-world-section">
               <div class="p1-m1-world-panel">
                  <div class="g-blockly-tab-content">
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
               </div>
            </div>         
         </div>
      </div>
   </itemBody>
</assessmentItem>`