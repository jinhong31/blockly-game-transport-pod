const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M111" title="Recycling Claw Item (old) 11" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-11" data-itemid="P1M111" data-module="RobotArm" data-progress="tut">
         <!-- <div class="g-instructions g-avatar">
            <img class="g-avatar-img g-avatar-medium g-rtl-img" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
            <div>
               <p class="g-text-top" data-am-translate="m111.instructions.1" data-am-translate-group="m111.instructions" data-wysiwyg="false">
                  It's time to learn to control the recycling claw by building a program using code blocks!
               </p>
               <p data-am-translate="m111.instructions.2 g-no-p-margin" data-am-translate-group="m111.instructions" data-wysiwyg="true">
                  Click on <i class="fas fa-question-circle g-reveal-bubble-ico"></i> to learn.
               </p>
            </div>
         </div>                  -->
         <div class="p1-m1-world-section">
            <div class="p1-m1-info-layer">
               <div data-id="P1M111B1" class="g-reveal-bubble p1-m1-11-b1 g-activate-target g-bubble-focused g-rtl-left-pos" data-next=".p1-m1-11-b2" data-target=".blocklyFlyoutBackground, .g-blockly-cb-title">
                  <span class="g-reveal-bubble-num">?</span>
                  <div class="g-reveal-bubble-txt" data-am-translate="m111.bubble.1" data-am-translate-group="m111.bubble" data-wysiwyg="false">
                     This area has the available code blocks.
                  </div>
               </div>
               <div data-id="P1M111B2" class="g-reveal-bubble p1-m1-11-b2 g-activate-target g-bubble-disabled g-rtl-left-pos" data-next=".p1-m1-11-b3" data-target=".blocklySvg">
                  <span class="g-reveal-bubble-num">?</span>
                  <div class="g-reveal-bubble-txt" data-am-translate="m111.bubble.2" data-am-translate-group="m111.bubble" data-wysiwyg="false">
                     This is where you clip code blocks together to build programs to instruct the recycling claw.
                  </div>
               </div>
               <div data-id="P1M111B3" class="g-reveal-bubble p1-m1-11-b3 g-activate-target g-bubble-disabled g-rtl-left-pos" data-next=".g-next" data-target=".p1-m1-11-target1"> 
                  <span class="g-reveal-bubble-num">?</span>
                  <div class="g-reveal-bubble-txt g-no-p-margin" data-am-translate="m111.bubble.3" data-am-translate-group="m111.bubble" data-wysiwyg="true">
                      This counter shows the number of code blocks in your program. It updates every time you add or remove a code block from your program. Sometimes you will be asked to build a program using the fewest code blocks possible to reduce the memory the program takes up.
                  </div>
               </div>
            </div>   
            <div class="g-blockly-container">
               <div class="g-blockly-tabs g-clearfix">
                  <div class="g-rtl-float-left g-blockly-cb-title g-blockly-tab" data-am-translate="m1.codeblocks.tab.1" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Code Blocks</div>
                  <div class="g-rtl-float-left g-blockly-ws-title g-blockly-tab p1-m1-11-target1">
                     <span data-am-translate="m1.codeblocks.tab.2" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Work space</span>
                  </div>
               </div>
               <div id="blocklyDiv" class="g-blockly g-hide-blockly-filler"></div>
               <div class="g-blockly-undo"><i class="fas fa-undo g-btn-blockly-undo"></i><i class="fas fa-redo g-btn-blockly-redo"></i></div>
               <div class="g-rtl-float-left g-blockly-count">
                     <span id="blocksCount">1</span>
                     <span data-am-translate="m1.codeblocks.tab.5" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">block used</span>
               </div>
            </div>
            <div class="p1-m1-world-panel">
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
               <div class="p1-m1-world-btn-strip">
                  <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run g-btn-blockly-main">
                     <i class="g-rtl-img fas fa-play"></i>
                     <span data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run program</span>
                  </button>
                  <div class="g-blockly-speed-holder"></div>
               </div>
            </div>
         </div>    

      </div>
   </itemBody>
</assessmentItem>`