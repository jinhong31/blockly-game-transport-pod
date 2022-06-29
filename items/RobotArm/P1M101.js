const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M101" title="Recycling Claw Item 01" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task g-intro p1-m1 p1-m1-01 p1-check-finish p1-confirm-finish" data-itemid="P1M101" data-module="RobotArm" data-progress="quiz">
         <div class="task-title g-hide" data-am-translate="m101.task.title" data-am-translate-group="m1.title">Recycling Claw - Introduction</div>
         <div class="g-instructions g-extra-para g-avatar">
            <img class="g-avatar-img g-rtl-img" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
            <div>
               <p class="g-text-top" data-am-translate="m101.general.1" data-am-translate-group="m101.general" data-wysiwyg="false">
                  Hi, my name is Jay. I work for Tech for a Clean World.  
               </p>
               <p data-am-translate="m101.general.2" data-am-translate-group="m101.general" data-wysiwyg="true">
                  On the right you can see our <b>recycling claw</b>. It can pick up and sort recyclable waste.​</p>

               <p data-am-translate="m101.general.3" data-am-translate-group="m101.general" data-wysiwyg="true">
                  In this unit, I will teach you how to control the recycling claw remotely using  
                  <span class="g-tooltip e-event" data-event-id="m101.tooltip.programs" data-event-filter="hover">programs<span class="tooltiptext">a series of coded instructions that control the operation of a machine, like the recycling claw.</span></span>. 
                  At the end of the unit, you can apply what you have learnt in a Challenge task.  
               </p>
               <div class="g-no-p-margin g-text-bottom" data-am-translate="m101.general.4" data-am-translate-group="m101.general" data-wysiwyg="true">
                  Let's begin.
               </div>
            </div>
         </div>
         <div class="p1-m1-intro-img">
            <div class="p1-m1-robo-arm-img">
               <div class="p1-m1-world-header"></div>
               <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100px" height="280px" viewBox="0 0 50 140">        
                  <g class="ra-world-arm">
                     <path d="M 0 15 L 0 30 L 50 30 L 50 0 L 0 0 L 0 15"></path>
                     <rect class="ra-world-arm-chain" x="18" y="30" width="15" height="15" />
                     <g class="ra-world-arm-claw" transform="translate(1,43)">
                        <path d="M 9.277344 5.855469 C 3.808594 11.21875 3.027344 12.390625 2.050781 17.464844 C 0.292969 26.339844 2.148438 32.585938 8.59375 39.21875 
                           C 11.914062 42.730469 12.011719 43.121094 10.9375 46.144531 C 10.253906 47.902344 9.765625 50.535156 9.765625 52 C 9.765625 53.367188 
                           9.277344 54.828125 8.789062 55.121094 C 8.203125 55.414062 7.8125 56.390625 7.8125 57.074219 C 7.8125 57.855469 6.445312 60.585938 
                           4.882812 63.121094 C 3.222656 65.660156 1.953125 68.488281 1.953125 69.464844 C 1.953125 71.21875 3.613281 74.535156 8.886719 83.414062 
                           C 10.449219 86.046875 12.304688 89.269531 12.890625 90.4375 C 14.648438 94.046875 18.554688 94.4375 18.554688 91.121094 C 18.554688 
                           90.242188 16.699219 86.4375 14.453125 82.632812 C 6.054688 68.488281 6.542969 70.535156 9.960938 64.195312 C 14.84375 54.925781 16.503906 
                           53.660156 23.242188 53.660156 C 28.222656 53.660156 29.492188 54.046875 31.933594 56.292969 C 34.667969 58.828125 41.015625 68.097656 
                           41.015625 69.5625 C 41.015625 69.953125 39.257812 73.074219 37.109375 76.585938 C 34.960938 80.097656 33.203125 83.316406 33.203125 83.804688 
                           C 33.203125 84.292969 32.617188 85.171875 31.835938 85.757812 C 29.980469 87.316406 28.90625 91.707031 30.078125 92.878906 C 31.152344 
                           93.953125 35.15625 92.195312 35.15625 90.632812 C 35.15625 90.144531 36.230469 88.097656 37.402344 86.046875 C 41.992188 78.925781 45.898438 
                           71.316406 45.898438 69.757812 C 45.898438 68.976562 44.335938 65.269531 42.480469 61.660156 C 40.625 58.046875 38.378906 52.585938 37.597656 
                           49.464844 C 36.230469 44 36.230469 43.609375 37.988281 41.074219 C 39.0625 39.609375 40.625 37.855469 41.40625 37.171875 C 48.242188 31.511719 
                           48.242188 15.804688 41.503906 8.488281 C 39.648438 6.4375 38.085938 4.488281 38.085938 4.292969 C 38.085938 4 37.109375 2.925781 35.9375 
                           1.855469 C 34.082031 0.390625 32.03125 0.0976562 24.609375 0 L 15.429688 0 Z M 31.054688 8.195312 C 41.113281 13.367188 42.578125 25.953125 
                           34.082031 33.660156 C 30.46875 36.878906 29.492188 37.269531 23.925781 37.269531 C 18.457031 37.269531 17.480469 36.976562 14.257812 34.144531 
                           C 9.570312 29.953125 7.324219 23.902344 8.691406 18.925781 C 9.960938 14.046875 12.109375 11.023438 16.015625 8.683594 C 19.628906 6.4375 
                           27.246094 6.242188 31.054688 8.195312 Z M 31.054688 8.195312" />
                        <path d="M 17.480469 15.511719 C 13.769531 19.316406 13.671875 24 17.1875 28.195312 C 21.777344 33.660156 31.25 31.804688 
                           33.007812 25.074219 C 35.546875 15.21875 24.609375 8.488281 17.480469 15.511719 Z M 17.480469 15.511719" />
                     </g>
                  </g>
               </svg>
            </div>
            <img class="p1-m1-stack-img" src="/engine/packages/PISA2025/Resources/images/stack.png" />
         </div>
      </div>
   </itemBody>
</assessmentItem>`
