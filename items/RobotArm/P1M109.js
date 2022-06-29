const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M109" title="Recycling Claw Item (old) 09" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-09 p1-check-finish p1-check-correct" data-progress="tut" data-itemid="P1M109" data-max-attempts="1" data-max-actions="1" data-success-id="P1M109" data-module="RobotArm">
         <div class="g-instructions g-avatar">
            <img class="g-avatar-img g-avatar-medium g-rtl-img" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
            <div>
               <p class="g-text-top" data-am-translate="m109.instructions.1" data-am-translate-group="m109.instructions" data-wysiwyg="false">
                  The recycling claw can be controlled with simple instructions like 'move left' and 'move right'. 
               </p>
               <p data-am-translate="m109.instructions.2" data-am-translate-group="m109.instructions" data-wysiwyg="false">
                  Click on 'move left' to move the claw so it matches the goal.
               </p>
            </div>
         </div>
         <div class="p1-m1-world-panel g-rtl-float-left p1-m1-standalone">
            <div class="p1-m1-world-container">
               <div class="g-bubble p1-m1-09-b1 g-bubble-right g-rtl-left-pos g-rtl-left-after-pos" data-am-translate="m109.bubble.1" data-am-translate-group="m109.bubble" data-wysiwyg="false">
                  The 'Claw' view shows you what the recycling claw does once you give it instructions.
               </div>
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
               <div class="g-bubble p1-m1-09-b2 g-bubble-left g-rtl-left-pos g-rtl-left-after-pos" data-am-translate="m109.bubble.2" data-am-translate-group="m109.bubble" data-wysiwyg="false">
                  The 'Goal' view shows what you want your instructions to achieve
               </div>
            </div>      
            <div class="p1-m1-world-btn-strip">
               <button class="g-btn-blockly g-btn-blockly-block g-btn-press" data-action="left">
                  <span data-am-translate="m1.codeblocks.b1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move left</span>
               </button>
               <button class="g-btn-blockly g-btn-blockly-block g-btn-press" data-action="right">
                  <span data-am-translate="m1.codeblocks.b2" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">move right</span>
               </button>
            </div>
         </div>
      </div>
   </itemBody>
</assessmentItem>`