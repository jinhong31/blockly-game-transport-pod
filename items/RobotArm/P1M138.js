const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M138" title="Recycling Claw Item (old) 35" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m1 p1-m1-38" data-itemid="P1M138" data-module="RobotArm">
         <div class="g-bubble p1-m1-38-b1 g-bubble-left g-rtl-left-pos g-rtl-left-after-pos" data-am-translate="m138.bubble.1" data-am-translate-group="m138.bubble" data-wysiwyg="false">
            Missing code blocks
         </div>
         <div class="g-blockly" id="blocklyDiv"></div>
         <div class="g-instructions">
            <img class="g-avatar-img g-rtl-img g-rtl-float-left g-avatar-medium" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
            <div>
               <p class="g-text-top" data-am-translate="m138.general.1" data-am-translate-group="m138.general" data-wysiwyg="false">
                  You have completed the Big Recycling Challenge!
               </p>
               <p data-am-translate="m138.general.2" data-am-translate-group="m138.general" data-wysiwyg="false">
                  You have done so well that we have a Bonus Challenge for you!
               </p>
               <p data-am-translate="m138.general.3" data-am-translate-group="m138.general" data-wysiwyg="false">
                  We have installed a conveyor belt that moves items into the reach of the recycling claw for sorting, three at a time.
                  The recycling claw must move all three recyclable objects into the correct containers, then the conveyor belt will move three 
                  more objects into the recycling claw's reach.
               </p>
               <p data-am-translate="m138.general.4" data-am-translate-group="m138.general" data-wysiwyg="false">
                  We have started building the program for you, but there is a section missing.
               </p>
               <p data-am-translate="m138.general.5" data-am-translate-group="m138.general" data-wysiwyg="false">
                  Use the fewest code blocks possible to complete the program.
               </p>
               <p data-am-translate="m138.general.6" data-am-translate-group="m138.general" data-wysiwyg="false">
                  The Bonus Challenge finishes when the claw has sorted 12 objects into the correct contianers.
               </p>
               <p data-am-translate="m138.general.7" data-am-translate-group="m138.general" data-wysiwyg="false">
                  Let's get started!
               </p>
            </div>
         </div>         
         <div class="p1-m1-world-section p1-m1-29-ext">
            <div class="p1-m1-world-panel">
               <div class="p1-m1-world-container">
                  <div>
                     <svg version="1.0" xmlns="http://www.w3.org/2000/svg" class="p1-m1-29-conveyor-belt" width="321.000000pt" height="46.000000pt" viewBox="0 0 321.000000 46.000000">
                        <g transform="translate(0.000000,46.000000) scale(0.100000,-0.100000)">
                        <path d="M320 440 c-163 -5 -186 -11 -239 -61 -34 -32 -63 -105 -63 -160 0
                        -94 69 -184 161 -209 23 -6 548 -8 1432 -6 l1396 3 54 29 c76 41 112 96 117
                        177 3 53 0 72 -21 113 -30 59 -49 77 -108 103 -45 20 -64 20 -1310 18 -695 -1
                        -1334 -4 -1419 -7z m708 -157 c31 -34 29 -78 -7 -114 -72 -72 -178 5 -134 98
                        26 56 97 64 141 16z m1650 0 c31 -34 29 -78 -7 -114 -72 -72 -178 5 -134 98
                        26 56 97 64 141 16z m321 16 c31 -29 43 -64 31 -93 -13 -36 -50 -66 -81 -66
                        -15 0 -41 12 -58 26 -25 20 -31 34 -31 64 0 72 88 116 139 69z m-2645 -15 c35
                        -35 35 -86 1 -119 -56 -57 -150 -18 -148 62 2 76 92 111 147 57z m335 2 c52
                        -56 13 -146 -63 -146 -45 0 -86 41 -86 85 0 74 99 114 149 61z m670 0 c52 -56
                        13 -146 -63 -146 -45 0 -86 41 -86 85 0 74 99 114 149 61z m320 0 c52 -56 13
                        -146 -63 -146 -45 0 -86 41 -86 85 0 74 99 114 149 61z m340 0 c52 -56 13
                        -146 -63 -146 -45 0 -86 41 -86 85 0 74 99 114 149 61z m320 0 c52 -56 13
                        -146 -63 -146 -45 0 -86 41 -86 85 0 74 99 114 149 61z"/>
                        </g>
                     </svg>
                  </div>
                  <div>
                     <div class="p1-m1-world-tabs g-clearfix">
                        <div class="g-rtl-float-left p1-m1-world-title g-blockly-tab" data-am-translate="m1.world.1" data-am-translate-group="m1.world" data-wysiwyg="false">Claw</div>
                     </div>
                     <div class="p1-m1-world-header"></div>
                     <div id="robo-world1" class="p1-m1-world g-blockly-target"></div>
                  </div>
                  <div class="g-bubble p1-m1-38-b2 g-bubble-top g-rtl-right-pos g-rtl-right-after-pos" data-am-translate="m138.bubble.2" data-am-translate-group="m138.bubble" data-wysiwyg="false">
                     conveyor belt
                  </div>
                  <div class="g-bubble p1-m1-38-b3 g-bubble-left g-rtl-right-pos g-rtl-right-after-pos" data-am-translate="m138.bubble.3" data-am-translate-group="m138.bubble" data-wysiwyg="false">
                     empty column
                  </div>
                  <div class="g-bubble p1-m1-38-b4 g-bubble-top g-rtl-right-pos g-rtl-right-after-pos" data-am-translate="m138.bubble.4" data-am-translate-group="m138.bubble" data-wysiwyg="false">
                     containers
                  </div>
               </div>
            </div>
         </div>         
      </div>
   </itemBody>
</assessmentItem>`