const template = /*xml*/`<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  xmlns:qti="http://www.imsglobal.org/xsd/imsqti_v2p1">
   <xsl:template match="/qti:assessmentItem">
      <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html></xsl:text>
      <html lang="en-AU">
         <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <title>
               <xsl:value-of select="@title"/>
            </title>
            <link rel="stylesheet" type="text/css" href="/engine/packages/PISA2025/Resources/build/css/pisa2025.min.css?v={$VERSION$}" />
         </head>

         <body class="qti pisa2025 track-events">

            <div id="view-mode" class="smode active container g-viewmode" dir="ltr">
               <div class="g-application">
                  <div class="g-navbar-title">
                     <span class="g-module-title g-rtl-float-left"></span>
                  </div>
                  <div class="g-navbar-progress">
                     <i class="g-rtl-img fas fa-circle nav-quiz"></i>
                     <span data-am-translate="m1.progress.1" data-wysiwyg="false" data-am-translate-group="m1.progress">Quiz</span>
                     <hr/>
                     <i class="g-rtl-img fas fa-circle nav-tut"></i>
                     <span data-am-translate="m1.progress.2" data-wysiwyg="false" data-am-translate-group="m1.progress">Tutorial</span>
                     <hr/>
                     <i class="g-rtl-img fas fa-circle nav-lc"></i>
                     <span data-am-translate="m1.progress.3" data-wysiwyg="false" data-am-translate-group="m1.progress">Learning Tasks</span>
                     <hr/>
                     <i class="g-rtl-img fas fa-star nav-bc"></i>
                     <span data-am-translate="m1.progress.4" data-wysiwyg="false" data-am-translate-group="m1.progress">Challenge</span>
                     <button name="next" class="g-next g-nav-btn g-rtl-float-right">
                        <span class="nav-next-btn" data-am-translate="m1.buttons.next" data-wysiwyg="false" data-am-translate-group="m1.buttons">Next</span>
                        <span class="nav-submit-btn g-hide" data-am-translate="m1.buttons.submit" data-wysiwyg="false" data-am-translate-group="m1.buttons">Submit</span>
                        <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                     </button>
                     <button name="prev" class="g-previous g-nav-btn g-rtl-float-right"><i class="g-rtl-img fas fa-arrow-alt-circle-left"></i><span data-am-translate="m1.buttons.prev" data-wysiwyg="false" data-am-translate-group="m1.buttons">Prev</span></button>
                  </div>
                  <div class="g-stimulus section default content-group active" data-id="section-stimulus" data-title="Stimulus">
                  
                     <!-- BRING IN THE ITEM CONTENT--> 
                     <itemBody>
                        <xsl:for-each select="qti:itemBody/*">
                           <xsl:apply-templates select="."/>
                        </xsl:for-each>
                     </itemBody>
                     
                     <!-- TRY AGAIN DIALOG--> 
                     <div class="g-modal am-modal g-retry-dialog">
                        <div class="g-modal-content">
                           <p data-am-translate="m1.popup.retry1" data-wysiwyg="false" data-am-translate-group="m1.popup">Your solution is incorrect</p>
                           <i class="fas fa-exclamation-triangle"></i>
                           <div class="g-btn-grid">
                              <button name="retry" class="g-btn g-btn-retry">
                                 <span data-am-translate="m1.popup.retry2" data-wysiwyg="false" data-am-translate-group="m1.popup">Try again</span>
                                 <i class="g-rtl-img fas fa-redo-alt"></i>
                              </button>
                              <button name="next" class="g-btn g-next g-next-warn">
                                 <span data-am-translate="m1.popup.retry3" data-wysiwyg="false" data-am-translate-group="m1.popup">Continue forward</span>
                                 <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                              </button>
                           </div>
                        </div>
                     </div>
                     <!-- CONFIRM FINISH--> 
                     <div class="g-modal am-modal g-check-finish g-confirm-finish">
                        <div class="g-modal-content">
                           <p data-am-translate="m1.popup.confirm-finish.1" data-wysiwyg="false" data-am-translate-group="m1.popup">Once you leave this screen you can't return.</p>
                           <div class="g-btn-grid">
                              <button name="close" class="g-btn g-close">
                                 <span data-am-translate="m1.popup.confirm-finish.2" data-wysiwyg="false" data-am-translate-group="m1.popup">Stay on this screen</span>
                              </button>
                              <button name="next" class="g-btn g-next g-next-reg">
                                 <span data-am-translate="m1.popup.confirm-finish.3" data-wysiwyg="false" data-am-translate-group="m1.popup">Continue forward</span>
                                 <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                              </button>
                           </div>
                        </div>
                     </div>
                     <!-- CONFIRM ACTIVE TASK FINISH--> 
                     <div class="g-modal am-modal g-check-finish g-confirm-finish2">
                        <div class="g-modal-content">
                           <p data-am-translate="m1.popup.confirm-finish2.1" data-wysiwyg="false" data-am-translate-group="m1.popup">
                              Are you sure you want to submit and move to the next task?
                           </p>
                           <div class="g-btn-grid">
                              <button name="close" class="g-btn g-close">
                                 <span data-am-translate="m1.popup.confirm-finish2.2" data-wysiwyg="false" data-am-translate-group="m1.popup">Stay on this task</span>
                              </button>
                              <button name="next" class="g-btn g-next g-next-reg">
                                 <span data-am-translate="m1.popup.confirm-finish2.3" data-wysiwyg="false" data-am-translate-group="m1.popup">Submit and continue</span>
                                 <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                              </button>
                           </div>
                        </div>
                     </div>
                     <!-- CONFIRM EFFICIENCY TASK FINISH--> 
                     <div class="g-modal am-modal g-check-finish g-efficiency-dialog">
                        <div class="g-modal-content">
                           <p data-am-translate="m1.popup.efficiency.1" data-wysiwyg="false" data-am-translate-group="m1.popup">
                              A program with fewer code blocks is possible.
                           </p>
                           <i class="fas fa-exclamation-triangle"></i>
                           <p data-am-translate="m1.popup.efficiency.2" data-wysiwyg="false" data-am-translate-group="m1.popup">
                              Are you sure you want to submit and move to the next task?
                           </p>
                           <div class="g-btn-grid">
                              <button name="close" class="g-btn g-close">
                                 <span data-am-translate="m1.popup.efficiency.3" data-wysiwyg="false" data-am-translate-group="m1.popup">Stay on this task</span>
                              </button>
                              <button name="next" class="g-btn g-next g-next-warn">
                                 <span data-am-translate="m1.popup.efficiency.4" data-wysiwyg="false" data-am-translate-group="m1.popup">Submit and continue</span>
                                 <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                              </button>
                           </div>
                        </div>
                     </div>
                     <!-- NOT ATTEMPTED DIALOG--> 
                     <div class="g-modal am-modal g-check-finish g-no-response-dialog">
                        <div class="g-modal-content">
                           <p data-am-translate="m1.popup.no-response.1" data-wysiwyg="false" data-am-translate-group="m1.popup">You have not attempted the question.</p>
                           <i class="fas fa-exclamation-triangle"></i>
                           <p data-am-translate="m1.popup.no-response.2" data-wysiwyg="false" data-am-translate-group="m1.popup">Once you leave this screen you can't return.</p>
                           <div class="g-btn-grid">
                              <button name="close" class="g-btn g-close">
                                 <span data-am-translate="m1.popup.no-response.3" data-wysiwyg="false" data-am-translate-group="m1.popup">Stay on this screen</span>
                              </button>
                              <button name="next" class="g-btn g-next g-next-warn">
                                 <span data-am-translate="m1.popup.no-response.4" data-wysiwyg="false" data-am-translate-group="m1.popup">Continue forward</span>
                                 <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                              </button>
                           </div>
                        </div>
                     </div>
                     <!-- NO CONTINUE SINGLE QUESTION DIALOG --> 
                     <div class="g-modal am-modal g-check-finish g-no-continue-single-dialog">
                        <div class="g-modal-content">
                           <br />
                           <p data-am-translate="m1.popup.no-continue-single.1" data-wysiwyg="false" data-am-translate-group="m1.popup">You must complete this question before you can continue forward.</p>
                           <i class="fas fa-exclamation-triangle"></i>
                           <div class="g-btn-grid">
                              <button name="close" class="g-btn g-close">
                                 <span data-am-translate="m1.popup.no-continue-single.2" data-wysiwyg="false" data-am-translate-group="m1.popup">Stay on this screen</span>
                              </button>
                           </div>
                        </div>
                     </div>

                     <!-- NO CONTINUE MULTI QUESTION DIALOG --> 
                     <div class="g-modal am-modal g-check-finish g-no-continue-multi-dialog">
                        <div class="g-modal-content">
                           <br />
                           <p data-am-translate="m1.popup.no-continue-multi.1" data-wysiwyg="false" data-am-translate-group="m1.popup">You must complete all questions before you can continue forward.</p>
                           <i class="fas fa-exclamation-triangle"></i>
                           <div class="g-btn-grid">
                              <button name="close" class="g-btn g-close">
                                 <span data-am-translate="m1.popup.no-continue-multi.2" data-wysiwyg="false" data-am-translate-group="m1.popup">Stay on this screen</span>
                              </button>
                           </div>
                        </div>
                     </div>

                     <!-- CONFIRM TUTORIAL DIALOG--> 
                     <div class="g-modal am-modal g-check-finish g-confirm-tutorial">
                        <div class="g-modal-content">
                           <p data-am-translate="m1.popup.no-tutorial.1" data-wysiwyg="false" data-am-translate-group="m1.popup">You have not complete this tutorial.</p>
                           <i class="fas fa-exclamation-triangle"></i>
                           <p data-am-translate="m1.popup.no-tutorial.2" data-wysiwyg="false" data-am-translate-group="m1.popup">Once you leave this screen you can't return.</p>
                           <div class="g-btn-grid">
                              <button name="close" class="g-btn g-close">
                                 <span data-am-translate="m1.popup.no-tutorial.3" data-wysiwyg="false" data-am-translate-group="m1.popup">Stay on this screen</span>
                              </button>
                              <button name="next" class="g-btn g-next g-next-warn">
                                 <span data-am-translate="m1.popup.no-tutorial.4" data-wysiwyg="false" data-am-translate-group="m1.popup">Continue forward</span>
                                 <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                              </button>
                           </div>
                        </div>
                     </div>
                     <!-- SUCCESS DIALOG--> 
                     <div class="g-modal am-modal g-success-dialog">
                        <div class="g-modal-content">
                           <button name="success" class="g-btn g-next g-btn-success">
                              <span data-am-translate="m1.popup.success.1" data-wysiwyg="false" data-am-translate-group="m1.popup">Well done!</span>
                              <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                           </button>
                        </div>      
                     </div>
                     <!-- HINT DIALOG--> 
                     <div class="g-modal am-modal g-hint-dialog">
                        <div class="g-modal-content">
                           <button name="close" class="g-dialog-btn g-close g-rtl-float-right"><i class="far fa-window-close"></i></button>
                           <span class="g-tutorial-window-tri g-tutorial-window-left-tri g-tutorial-window-left-tri-border g-rtl-left-pos"></span>
                           <div class="g-switch-holder">
                              <div class="g-hint-page1 g-switch-content g-invisible">
                                 <p data-am-translate="m1.popup.hint.1.1" data-wysiwyg="false" data-am-translate-group="m1.hint">Hey do you need a hint?</p>
                                 <div class="g-btn-grid">
                                    <button class="g-btn g-later-hint g-next-reg">
                                       <span data-am-translate="m1.popup.hint1.2" data-wysiwyg="false" data-am-translate-group="m1.hint">Maybe later</span>
                                    </button>
                                    <button class="g-btn g-show-hint g-next-reg">
                                       <span data-am-translate="m1.popup.hint1.3" data-wysiwyg="false" data-am-translate-group="m1.hint">Yes, show me</span>
                                    </button>
                                 </div>
                              </div>
                              <div class="g-hint-page2 g-switch-content g-invisible">
                                 <p class="g-text-bottom" data-am-translate="m1.popup.hint.3.5" data-wysiwyg="false" data-am-translate-group="m1.hint">Click on 
                                    <img class="g-avatar-img g-avatar-xsmall" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
                                    <i class="fas fa-info-circle help-info"></i>to view the hint if you change your mind.
                                 </p>
                                 <div class="g-btn-grid">
                                 </div>
                              </div>
                           </div>

                        </div>
                     </div>       
                     <!-- RESOURCES DIALOG START--> 
                     <div class="p1-m1 g-help-dialog am-modal">
                        <div class="g-modal-content g-modal-content-help">
                           <button name="close" class="g-dialog-btn g-close g-rtl-float-right g-help-close"><i class="far fa-window-close"></i></button>
                           <div>
                              <div class="g-switch-holder">
                                 <!-- HELP 0, blur sample version for tutorial--> 
                                 <div class="g-help-page0 g-switch-content g-invisible">
                                    <img class="sample-help" src="/engine/packages/PISA2025/Resources/images/m1-sample-help.png" />
                                 </div> 
                                 <!-- HELP 1--> 
                                 <div class="g-help-page1 g-switch-content g-invisible" data-init="P1M120_P1H2">
                                    <div class="g-avatar">
                                       <img class="g-avatar-img g-avatar-medium g-rtl-img" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
                                       <div>
                                          <p class="g-text-top g-text-bottom" data-am-translate="m1.help.page1.2" data-am-translate-group="m1.help.page1" data-wysiwyg="false">
                                             I built this program to help the claw achieve the goal state. Click ‘Run’ to see how the program works.
                                          </p>
                                          <p class="g-text-top g-text-bottom" data-am-translate="m1.help.page1.3" data-am-translate-group="m1.help.page1" data-wysiwyg="false">
                                             I used a repeat block to solve the problem.                                             
                                          </p>
                                          <div class="g-tooltip g-tooltip-ws" data-am-translate="m1.help.page1.4" data-am-translate-group="m1.help.page1"> Show explanation
                                             <span class="tooltiptext">The claw moves an <i class="fas fa-apple-alt"></i> three columns to the left, places the <i class="fas fa-apple-alt"></i>, 
                                             and then returns to its starting position. The claw repeats this set of actions 2 times because there are 2 <i class="fas fa-apple-alt"></i>. To program this using as few blocks as possible, we use repeat blocks. 
                                             Repeat blocks can also be used within other repeat blocks.</span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="p1-m1-world-section">
                                       <div class="g-blockly-container">            
                                          <div class="g-blockly-tabs g-clearfix">
                                             <div class="g-rtl-float-left g-blockly-tab">
                                                <span data-am-translate="m1.codeblocks.tab.11" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Program</span>
                                                <span>: 9</span>
                                             </div>
                                          </div>
                                          <div class="g-blockly" id="blocklyDivH1"></div>
                                          <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run-h1" reset-target=".g-blockly-target-h1">
                                             <i class="g-rtl-img fas fa-play"></i>
                                             <span class="blockly-run-btn" data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run</span>
                                             <span class="blockly-reset-btn g-hide" data-am-translate="m1.buttons.reset" data-am-translate-group="m1.buttons" data-wysiwyg="false">Reset</span>
                                          </button>
                                       </div>
                                       <div class="p1-m1-world-panel">
                                          <div class="p1-m1-world-container">
                                             <div class="p1-m1-world-tabs g-clearfix">
                                                <div class="g-rtl-float-left p1-m1-world-title g-blockly-tab" data-am-translate="m1.world.1" data-am-translate-group="m1.world" data-wysiwyg="false">Recycling claw</div>
                                             </div>
                                             <div class="p1-m1-world-header"></div>
                                             <div id="robo-world1-h1" class="p1-m1-world g-blockly-target-h1"></div>
                                          </div>
                                          <div class="p1-m1-world-container">
                                             <div class="p1-m1-world-tabs g-clearfix">
                                                <div class="g-rtl-float-left p1-m1-goal-title g-blockly-tab" data-am-translate="m1.world.2" data-am-translate-group="m1.world" data-wysiwyg="false">Goal state</div>
                                             </div>                 
                                             <div class="p1-m1-world-header"></div>
                                             <div id="robo-world2-h1" class="p1-m1-world p1-m1-goal"></div>
                                          </div>      
                                          <div class="p1-m1-world-btn-strip">
                                             <div class="g-blockly-speed-holder"></div>
                                          </div>
                                       </div>
                                    </div> 
                                 </div> 

                                 <!-- HELP 3--> 
                                 <div class="g-help-page3 g-switch-content g-invisible" data-init="P1M123_P1H2">
                                    <div class="g-avatar">
                                       <img class="g-avatar-img g-avatar-medium g-rtl-img" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
                                       <div>
                                          <p class="g-text-top g-text-bottom" data-am-translate="m1.help.page3.2" data-am-translate-group="m1.help.page3" data-wysiwyg="false">
                                             I built these programs to help the claw achieve the goal state. Click ‘Run’ to see how the programs work.
                                          </p>
                                          <p class="g-text-top g-text-bottom" data-am-translate="m1.help.page3.3" data-am-translate-group="m1.help.page3" data-wysiwyg="false">
                                             I used an if/else block to build a more efficient solution that uses fewer code blocks.
                                          </p>
                                          <div class="g-tooltip g-tooltip-ws" data-am-translate="m1.help.page3.4" data-am-translate-group="m1.help.page1"> Show explanation
                                             <span class="tooltiptext">The if/else block instructs the claw to take different actions when it is holding different objects. 
                                                                        In this example, it instructs the claw to move <i class="fas fa-carrot"></i> to column 4 and <i class="fas fa-apple-alt"></i> to column 5.</span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="p1-m1-world-section">
                                       <div class="g-blockly-container">
                                          <div class="g-blockly-tabs g-clearfix">
                                             <div class="g-rtl-float-left g-blockly-tab">
                                                <span data-am-translate="m1.codeblocks.tab.7" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Program 1</span><br />
                                                (17 <span data-am-translate="m1.codeblocks.tab.8" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">code blocks</span>)
                                             </div>
                                          </div>         
                                          <div class="g-blockly" id="blocklyDivH6"></div>
                                          <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run-h6" reset-target=".g-blockly-target-h3">
                                             <i class="g-rtl-img fas fa-play"></i>
                                             <span class="blockly-run-btn" data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run</span>
                                             <span class="blockly-reset-btn g-hide" data-am-translate="m1.buttons.reset" data-am-translate-group="m1.buttons" data-wysiwyg="false">Reset</span>
                                          </button>
                                       </div>
                                       <div class="g-blockly-container">            
                                          <div class="g-blockly-tabs g-clearfix">
                                             <div class="g-rtl-float-left g-blockly-tab">
                                                <span data-am-translate="m1.codeblocks.tab.9" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Program 2</span><br />
                                                (12 <span data-am-translate="m1.codeblocks.tab.8" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">code blocks</span>)
                                             </div>
                                          </div>
                                          <div class="g-blockly" id="blocklyDivH3"></div>
                                          <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run-h3" reset-target=".g-blockly-target-h3">
                                             <i class="g-rtl-img fas fa-play"></i>
                                             <span class="blockly-run-btn" data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run</span>
                                             <span class="blockly-reset-btn g-hide" data-am-translate="m1.buttons.reset" data-am-translate-group="m1.buttons" data-wysiwyg="false">Reset</span>
                                          </button>
                                       </div>
                                       <div class="p1-m1-world-panel">
                                          <div class="p1-m1-world-container">
                                             <div class="p1-m1-world-tabs g-clearfix">
                                                <div class="g-rtl-float-left p1-m1-world-title g-blockly-tab" data-am-translate="m1.world.1" data-am-translate-group="m1.world" data-wysiwyg="false">Recycling claw</div>
                                             </div>
                                             <div class="p1-m1-world-header"></div>
                                             <div id="robo-world1-h3" class="p1-m1-world g-blockly-target-h3 g-blockly-target-h6"></div>
                                          </div>
                                          <div class="p1-m1-world-container">
                                             <div class="p1-m1-world-tabs g-clearfix">
                                                <div class="g-rtl-float-left p1-m1-goal-title g-blockly-tab" data-am-translate="m1.world.2" data-am-translate-group="m1.world" data-wysiwyg="false">Goal state</div>
                                             </div>                 
                                             <div class="p1-m1-world-header"></div>
                                             <div id="robo-world2-h3" class="p1-m1-world p1-m1-goal"></div>
                                          </div>     
                                          <div class="p1-m1-world-btn-strip">
                                             <div class="g-blockly-speed-holder"></div>
                                          </div>   
                                       </div>
                                    </div>   
                                 </div>

                                 <!-- HELP 4--> 
                                 <div class="g-help-page4 g-switch-content g-invisible"  data-init="P1M124_P1H2">
                                    <div class="g-avatar">
                                       <img class="g-avatar-img g-avatar-medium g-rtl-img" src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
                                       <div>
                                          <p class="g-text-top g-text-bottom" data-am-translate="m1.help.page4.2" data-am-translate-group="m1.help.page4" data-wysiwyg="false">
                                             I built these programs to help the claw achieve the goal state. Click ‘Run’ to see how the programs work.
                                          </p>
                                          <p class="g-text-top g-text-bottom" data-am-translate="m1.help.page4.3" data-am-translate-group="m1.help.page4" data-wysiwyg="false">
                                             Program 2 is a more efficient solution that uses fewer code blocks.
                                          </p>
                                          <div class="g-tooltip g-tooltip-ws" data-am-translate="m1.help.page4.4" data-am-translate-group="m1.help.page1"> Show explanation
                                             <span class="tooltiptext">The claw moves an object one column to the right, places the object, and then returns to its starting position. 
                                             The claw repeats this set of actions 2 times because there are 2 objects. To program this using as few blocks as possible, 
                                             we make sure all actions that can be repeated are within a repeat block.</span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="p1-m1-world-section">
                                       <div class="g-blockly-container">            
                                          <div class="g-blockly-tabs g-clearfix">
                                             <div class="g-rtl-float-left g-blockly-tab">
                                                <span data-am-translate="m1.codeblocks.tab.7" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Program 1</span><br />
                                                <span data-am-translate="m1.codeblocks.tab.8" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">(8 code blocks)</span>
                                             </div>
                                          </div>
                                          <div class="g-blockly" id="blocklyDivH4"></div>
                                          <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run-h4" reset-target=".g-blockly-target-h4">
                                             <i class="g-rtl-img fas fa-play"></i>
                                             <span class="blockly-run-btn" data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run</span>
                                             <span class="blockly-reset-btn g-hide" data-am-translate="m1.buttons.reset" data-am-translate-group="m1.buttons" data-wysiwyg="false">Reset</span>
                                          </button>
                                       </div>
                                       <div class="g-blockly-container">
                                          <div class="g-blockly-tabs g-clearfix">
                                             <div class="g-rtl-float-left g-blockly-tab">
                                                <span data-am-translate="m1.codeblocks.tab.9" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">Program 2</span><br />
                                                <span data-am-translate="m1.codeblocks.tab.10" data-am-translate-group="m1.codeblocks" data-wysiwyg="false">(7 code blocks)</span>
                                             </div>
                                          </div>         
                                          <div class="g-blockly" id="blocklyDivH5"></div>
                                          <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run-h5" reset-target=".g-blockly-target-h4">
                                             <i class="g-rtl-img fas fa-play"></i>
                                             <span class="blockly-run-btn" data-am-translate="m1.buttons.run" data-am-translate-group="m1.buttons" data-wysiwyg="false">Run</span>
                                             <span class="blockly-reset-btn g-hide" data-am-translate="m1.buttons.reset" data-am-translate-group="m1.buttons" data-wysiwyg="false">Reset</span>
                                          </button>
                                       </div>
                                       <div class="p1-m1-world-panel">
                                          <div class="p1-m1-world-container">
                                             <div class="p1-m1-world-tabs g-clearfix">
                                                <div class="g-rtl-float-left p1-m1-world-title g-blockly-tab" data-am-translate="m1.world.1" data-am-translate-group="m1.world" data-wysiwyg="false">Recycling claw</div>
                                             </div>
                                             <div class="p1-m1-world-header"></div>
                                             <div id="robo-world1-h4" class="p1-m1-world g-blockly-target-h4 g-blockly-target-h5"></div>
                                          </div>
                                          <div class="p1-m1-world-container">
                                             <div class="p1-m1-world-tabs g-clearfix">
                                                <div class="g-rtl-float-left p1-m1-goal-title g-blockly-tab" data-am-translate="m1.world.2" data-am-translate-group="m1.world" data-wysiwyg="false">Goal state</div>
                                             </div>                 
                                             <div class="p1-m1-world-header"></div>
                                             <div id="robo-world2-h4" class="p1-m1-world p1-m1-goal"></div>
                                          </div>
                                          <div>
                                             <div class="g-blockly-speed-holder"></div>
                                          </div>
                                       </div>
                                    </div>   
                                 </div> 
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- RESOURCES DIALOG END--> 

                     <!-- ASK SOLUTION  DIALOG--> 
                     <div class="g-modal am-modal g-confirm-solution">
                        <div class="g-modal-content">
                           <p class="g-text-bottom" data-am-translate="m1.confirm-solution.1" data-wysiwyg="false" data-am-translate-group="m1.popup">
                              How confident are you in your solution?
                           </p>
                           <i class="fas fa-exclamation-triangle g-hide"></i>
                           <span class="eval_warning g-hide" data-am-translate="m1.confirm-solution.2" data-wysiwyg="false" data-am-translate-group="m1.popup">
                              *Please complete the question before moving forward
                           </span>
                           <div id="solultion_eval" class="g-mcg multiple-choice-group input-align-bottom">
                              <label class="g-mcq-label">
                                 <span class="g-mcq-label-styled" data-am-translate="m1.solultion.eval.1" data-wysiwyg="false" data-am-translate-group="m1.solultion.eval">Not at all confident</span>
                              </label>  
                              <label class="g-mcq-label">
                                 <span class="g-mcq-radio-wrapper">
                                    <input type="radio" class="g-mcq-radio" name="solultion_eval" id="rA" value="1" tabindex="1"/>
                                    <span class="g-mcq-radio-styled"></span>
                                 </span>
                              </label>  
                              <label class="g-mcq-label">
                                 <span class="g-mcq-radio-wrapper">
                                    <input type="radio" class="g-mcq-radio" name="solultion_eval" id="rB" value="2" tabindex="2" />
                                    <span class="g-mcq-radio-styled"></span>
                                 </span>
                              </label>  
                              <label class="g-mcq-label">
                                 <span class="g-mcq-radio-wrapper">
                                    <input type="radio" class="g-mcq-radio" name="solultion_eval" id="rC" value="3" tabindex="3" />
                                    <span class="g-mcq-radio-styled"></span>
                                 </span>
                              </label>  
                              <label class="g-mcq-label">
                                 <span class="g-mcq-radio-wrapper">
                                    <input type="radio" class="g-mcq-radio" name="solultion_eval" id="rD" value="4" tabindex="4" />
                                    <span class="g-mcq-radio-styled"></span>
                                 </span>
                              </label>
                              <label class="g-mcq-label">
                                 <span class="g-mcq-label-styled" data-am-translate="m1.solultion.eval.2" data-wysiwyg="false" data-am-translate-group="m1.solultion.eval">Very confident</span>
                              </label>   
                           </div>
                           <div class="show-solution g-hide" >
                              <p data-am-translate="m1.confirm-solution.3" data-wysiwyg="false" data-am-translate-group="m1.popup">
                                 Do you want to see the solution for this task?
                              </p>
                              <div class="g-btn-grid">
                                 <button class="g-btn g-solution-btn g-next-reg">
                                    <span data-am-translate="m1.popup.confirm-solution.4" data-wysiwyg="false" data-am-translate-group="m1.popup">View solution</span>
                                 </button>
                                 <button name="next" class="g-btn g-next g-next-reg">
                                    <span data-am-translate="m1.popup.confirm-solution.5" data-wysiwyg="false" data-am-translate-group="m1.popup">Continue to next task</span>
                                    <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- SOLUTION --> 
                     <div class="p1-m1 g-modal am-modal g-solution">
                        <div class="g-modal-content">
                           <div class="g-switch-holder">
                           </div>
                           <button name="next" class="g-btn g-next g-next-reg">
                                 <span data-am-translate="m1.popup.confirm-finish2.3" data-wysiwyg="false" data-am-translate-group="m1.popup">Continue to next task</span>
                                 <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                           </button>
                        </div>      
                     </div>

                  </div>
               </div>
            </div>
            <!-- COMMON LABELS FOR THE MODULE --> 
            <div class="g-hide">
               <span data-am-translate="m1.codeblocks.b1" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-move-left-lbl">move left</span>
               <span data-am-translate="m1.codeblocks.b2" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-move-right-lbl">move right</span>
               <span data-am-translate="m1.codeblocks.b3" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-pickup-lbl">pick up</span>
               <span data-am-translate="m1.codeblocks.b4" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-place-lbl">place</span>
               <span data-am-translate="m1.codeblocks.b5" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-if-claw-holding-lbl">if claw is holding</span>
               <span data-am-translate="m1.codeblocks.b6" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-repeat-lbl">repeat</span>
               <span data-am-translate="m1.codeblocks.b7" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-do-lbl">do</span>
               <span data-am-translate="m1.codeblocks.b8" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-times-lbl">times</span>
               <span data-am-translate="m1.codeblocks.b9" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-move-up-lbl">move up</span>
               <span data-am-translate="m1.codeblocks.b10" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-move-down-lbl">move down</span>
               <span data-am-translate="m1.codeblocks.b11" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="when-run-lbl">when run</span>
               <span data-am-translate="m1.codeblocks.b12" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-start-lbl">start</span>
               <span data-am-translate="m1.codeblocks.b13" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-end-lbl">end</span>
               <span data-am-translate="m1.codeblocks.b14" data-wysiwyg="false" data-am-translate-group="m1.codeblocks" id="ra-else-lbl">else</span>

               <span data-am-translate="m1.world.errors.1" data-wysiwyg="false" data-am-translate-group="m1.world.errors" id="ra-move1-err">Error: Claw hit a wall.</span>
               <span data-am-translate="m1.world.errors.2" data-wysiwyg="false" data-am-translate-group="m1.world.errors" id="ra-move2-err">Error: Objects too high.</span>
               <span data-am-translate="m1.world.errors.3" data-wysiwyg="false" data-am-translate-group="m1.world.errors" id="ra-pickup1-err">Error: Claw already holding object.</span>
               <span data-am-translate="m1.world.errors.4" data-wysiwyg="false" data-am-translate-group="m1.world.errors" id="ra-place1-err">Error: Claw not holding object.</span>
            </div>

            <script type="text/javascript" src="/engine/packages/PISA2025/Resources/build/js/pisa2025.min.js?v={$VERSION$}" data-keep-original-source="false">&#160;</script>
         </body>
      </html>
   </xsl:template>
</xsl:stylesheet>`
