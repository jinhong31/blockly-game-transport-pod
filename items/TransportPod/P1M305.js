const item = /*html*/`
<?xml version="1.0"?>
<assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" 
   identifier="P1M305" title="Transport Pod Item 05" adaptive="false" timeDependent="false">
   <itemBody>
      <div id="task" class="g-task p1-m3 p1-m3-05 g-fill p1-confirm-finish" data-itemid="P1M305" data-module="TransportPod" data-progress="quiz">
      <div class="task-title g-hide" data-am-translate="m305.task.title" data-am-translate-group="m3.title">Transport Pod - Quiz 3 of 5</div>
         <div class="g-quiz">
            <div class="g-instructions">
               <p class="g-text-top" data-am-translate="m305.question.1" data-am-translate-group="m305.question" data-wysiwyg="false">
                  The program below contains the instructions for moving the pod along the track. ​As the pod moves, each sensor detects whether the surface beneath is black or white.​
               </p>
               <p>
                  <span data-am-translate="m305.label.1" data-am-translate-group="m305.question" data-wysiwyg="false">middle sensor</span>
                  <span class="right-label" data-am-translate="m305.label.2" data-am-translate-group="m305.question" data-wysiwyg="false">right sensor</span>
               </p>
               <p class="label-bottom">
                  <svg width="50" height="60">
                     <defs><marker id='head' orient="auto" markerWidth='3' markerHeight='4' refX='0.1' refY='2'> <path d='M0,0 V4 L2,2 Z' fill="black"/></marker></defs>
                     <path marker-end='url(#head)' stroke-width='4' fill='none' stroke='black' d="M 0 0 32 50"/>
                  </svg>
                  <svg width="50" height="60">
                     <defs><marker id='head' orient="auto" markerWidth='3' markerHeight='4' refX='0.1' refY='2'> <path d='M0,0 V4 L2,2 Z' fill="black"/></marker></defs>
                     <path marker-end='url(#head)' stroke-width='4' fill='none' stroke='black' d='M 50 0 35 50'/>
                  </svg>
                  <img class="rover-top" src="/engine/packages/PISA2025/Resources/images/pod-top.png"/>
               </p>  
            </div>
            <div class="g-quiz-a">
               <p class="g-quiz-header" data-am-translate="m305.question.2" data-am-translate-group="m305.question" data-wysiwyg="false">
                  Select the correct option from the two drop downs so that the program ​instructs the pod to travel to the end of the track.
               </p>
               <div class="g-code-instruction" data-am-translate="m305.question.code.1" data-am-translate-group="m305.question" data-wysiwyg="false">Program:</div>
               <div class="g-blockly" data-id="P1M305" id="blocklyDiv"></div>
               <svg height="250" width="250">
                     <path d="M 100 220 l 0 -150 l 100 -60" stroke="black" stroke-width="10" fill="none" />
               </svg>
               <img class="rover-bottom" src="/engine/packages/PISA2025/Resources/images/pod-top.png"/>
            </div>
         </div>
      </div> 
      <div class="g-hide">
         <span data-am-translate="m305.codeblocks.1" data-wysiwyg="false" data-am-translate-group="m305.codeblocks" id="repeat-plain-lbl">repeat forever</span>
         <span data-am-translate="m305.codeblocks.2" data-wysiwyg="false" data-am-translate-group="m305.codeblocks" id="move-lbl">move forward while middle sensor detects</span>
         <span data-am-translate="m305.codeblocks.3" data-wysiwyg="false" data-am-translate-group="m305.codeblocks" id="sensor-lbl">sensor detects black</span>
         <span data-am-translate="m305.codeblocks.4" data-wysiwyg="false" data-am-translate-group="m305.codeblocks" id="turn-lbl">turn right until middle sensor detects black</span>
     </div> 
   </itemBody>
</assessmentItem>`