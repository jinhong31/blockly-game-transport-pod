const template = /*xml*/`
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:qti="http://www.imsglobal.org/xsd/imsqti_v2p1">
   <xsl:template match="/qti:assessmentItem">
      <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html></xsl:text>
      <html lang="en-AU">

      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
         <title>
            <xsl:value-of select="@title" />
         </title>
         <link rel="stylesheet" type="text/css"
            href="/engine/packages/PISA2025/Resources/build/css/pisa2025.min.css?v={$VERSION$}" />
      </head>

      <body class="pisa2025">

         <div id="view-mode" class="smode active container g-viewmode" dir="ltr">
            <div class="g-application">
               <div class="g-navbar-title">
                  <span class="g-module-title g-rtl-float-left"></span>
               </div>
               <div class="g-navbar-progress">
                  <i class="g-rtl-img fas fa-circle nav-quiz"></i>
                  <span data-am-translate="m3.progress.1" data-wysiwyg="false"
                     data-am-translate-group="m3.progress">Quiz</span>
                  <hr />
                  <i class="g-rtl-img fas fa-circle nav-tut"></i>
                  <span data-am-translate="m3.progress.2" data-wysiwyg="false"
                     data-am-translate-group="m3.progress">Tutorial</span>
                  <hr />
                  <i class="g-rtl-img fas fa-circle nav-lc"></i>
                  <span data-am-translate="m3.progress.3" data-wysiwyg="false"
                     data-am-translate-group="m3.progress">Learning Tasks</span>
                  <hr />
                  <i class="g-rtl-img fas fa-star nav-bc"></i>
                  <span data-am-translate="m3.progress.4" data-wysiwyg="false" data-am-translate-group="m3.progress">Big
                     Challenge</span>
                  <button name="next" class="g-next g-nav-btn g-rtl-float-right"><span data-am-translate="m3.button.1"
                        data-wysiwyg="false" data-am-translate-group="m3.button">Next</span><i
                        class="g-rtl-img fas fa-arrow-alt-circle-right"></i></button>
                  <!-- <button name="prev" class="g-previous g-nav-btn g-rtl-float-right"><i class="g-rtl-img fas fa-arrow-alt-circle-left"></i><span data-am-translate="m3.button.2" data-wysiwyg="false" data-am-translate-group="m3.button">Prev</span></button> -->
               </div>
               <div class="g-stimulus section default content-group active" data-id="section-stimulus"
                  data-title="Stimulus">

                  <!-- BRING IN THE ITEM CONTENT-->
                  <itemBody>
                     <xsl:for-each select="qti:itemBody/*">
                        <xsl:apply-templates select="." />
                     </xsl:for-each>
                  </itemBody>

                  <!-- TRY AGAIN DIALOG-->
                  <div class="g-modal am-modal g-retry-dialog">
                     <div class="g-modal-content">
                        <p data-am-translate="m3.popup.retry1" data-wysiwyg="false" data-am-translate-group="m3.popup">
                           Your solution is incorrect</p>
                        <i class="fas fa-exclamation-triangle"></i>
                        <div class="g-btn-grid">
                           <button name="retry" class="g-btn g-btn-retry">
                              <span data-am-translate="m3.popup.try-again.1" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Try again</span>
                              <i class="g-rtl-img fas fa-redo-alt"></i>
                           </button>
                           <button name="next" class="g-btn g-next g-next-warn">
                              <span data-am-translate="m3.popup.confirm-finish.3" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Continue forward</span>
                              <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <!-- CONFIRM FINISH-->
                  <div class="g-modal am-modal g-check-finish g-confirm-finish">
                     <div class="g-modal-content">
                        <p data-am-translate="m3.popup.confirm-finish.1" data-wysiwyg="false"
                           data-am-translate-group="m3.popup">Once you leave this screen you can't return</p>
                        <div class="g-btn-grid">
                           <button name="close" class="g-btn g-close">
                              <span data-am-translate="m3.popup.confirm-finish.2" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Stay on this screen</span>
                           </button>
                           <button name="next" class="g-btn g-next g-next-reg">
                              <span data-am-translate="m3.popup.confirm-finish.3" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Continue forward</span>
                              <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <!-- CONFIRM ACTIVE TASK FINISH-->
                  <div class="g-modal am-modal g-check-finish g-confirm-finish2">
                     <div class="g-modal-content">
                        <p data-am-translate="m3.popup.confirm-finish2.1" data-wysiwyg="false"
                           data-am-translate-group="m3.popup">
                           Are you sure you want to submit your solution and continue to the next task?
                        </p>
                        <div class="g-btn-grid">
                           <button name="close" class="g-btn g-close">
                              <span data-am-translate="m3.popup.confirm-finish2.2" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Stay on this task</span>
                           </button>
                           <button name="next" class="g-btn g-next g-next-reg">
                              <span data-am-translate="m3.popup.confirm-finish2.3" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Submit and continue</span>
                              <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <!-- CONFIRM EFFICIENCY TASK FINISH-->
                  <div class="g-modal am-modal g-check-finish g-efficiency-dialog">
                     <div class="g-modal-content">
                        <p data-am-translate="m3.popup.efficiency.1" data-wysiwyg="false"
                           data-am-translate-group="m3.popup">
                           A program with fewer code blocks is possible.
                        </p>
                        <i class="fas fa-exclamation-triangle"></i>
                        <p data-am-translate="m3.popup.efficiency.2" data-wysiwyg="false"
                           data-am-translate-group="m3.popup">
                           Are you sure you want to submit your solution and continue to the next task?
                        </p>
                        <div class="g-btn-grid">
                           <button name="close" class="g-btn g-close">
                              <span data-am-translate="m3.popup.efficiency.3" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Stay on this task</span>
                           </button>
                           <button name="next" class="g-btn g-next g-next-warn">
                              <span data-am-translate="m3.popup.efficiency.4" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Submit and continue</span>
                              <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <!-- NOT ATTEMPTED DIALOG-->
                  <div class="g-modal am-modal g-check-finish g-no-response-dialog">
                     <div class="g-modal-content">
                        <p data-am-translate="m3.popup.no-response.1" data-wysiwyg="false"
                           data-am-translate-group="m3.popup">You have not attempted the question.</p>
                        <i class="fas fa-exclamation-triangle"></i>
                        <p data-am-translate="m3.popup.no-response.2" data-wysiwyg="false"
                           data-am-translate-group="m3.popup">Once you leave this screen you can't return.</p>
                        <div class="g-btn-grid">
                           <button name="close" class="g-btn g-close">
                              <span data-am-translate="m3.popup.no-response.3" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Stay on this screen</span>
                           </button>
                           <button name="next" class="g-btn g-next g-next-warn">
                              <span data-am-translate="m3.popup.no-response.4" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Continue forward</span>
                              <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <!-- NO CONTINUE DIALOG-->
                  <div class="g-modal am-modal g-check-finish g-no-continue-dialog">
                     <div class="g-modal-content">
                        <br />
                        <p data-am-translate="m3.popup.no-continue.1" data-wysiwyg="false"
                           data-am-translate-group="m3.popup">You must select one option from each row before you can
                           continue forward.</p>
                        <i class="fas fa-exclamation-triangle"></i>
                        <div class="g-btn-grid">
                           <button name="close" class="g-btn g-close">
                              <span data-am-translate="m3.popup.no-continue.2" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Stay on this screen</span>
                           </button>
                        </div>
                     </div>
                  </div>
                  <!-- CONFIRM TUTORIAL DIALOG-->
                  <div class="g-modal am-modal g-check-finish g-confirm-tutorial">
                     <div class="g-modal-content">
                        <p data-am-translate="m3.popup.no-tutorial.1" data-wysiwyg="false"
                           data-am-translate-group="m3.popup">You have not complete this tutorial.</p>
                        <i class="fas fa-exclamation-triangle"></i>
                        <p data-am-translate="m3.popup.no-tutorial.2" data-wysiwyg="false"
                           data-am-translate-group="m3.popup">Once you leave this screen you can't return.</p>
                        <div class="g-btn-grid">
                           <button name="close" class="g-btn g-close">
                              <span data-am-translate="m3.popup.no-tutorial.3" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Stay on this screen</span>
                           </button>
                           <button name="next" class="g-btn g-next g-next-warn">
                              <span data-am-translate="m3.popup.no-tutorial.4" data-wysiwyg="false"
                                 data-am-translate-group="m3.popup">Continue forward</span>
                              <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <!-- SUCCESS DIALOG-->
                  <div class="g-modal am-modal g-success-dialog">
                     <div class="g-modal-content">
                        <button name="success" class="g-btn g-next g-btn-success">
                           <span data-am-translate="m3.popup.success.1" data-wysiwyg="false"
                              data-am-translate-group="m3.popup">Well done!</span>
                           <i class="g-rtl-img fas fa-arrow-alt-circle-right"></i>
                        </button>
                     </div>
                  </div>
                  <!-- INFO DIALOG-->
                  <div class="g-modal am-modal g-info-dialog">
                     <div class="g-modal-content">
                        <button name="close" class="g-dialog-btn g-close g-rtl-float-right"><i
                              class="far fa-window-close"></i></button>
                        <p class="g-text-top" data-am-translate="m3.info.1" data-am-translate-group="m3.popup"
                           data-wysiwyg="false">
                           Information about the Nature Pod and the nature reserve
                        </p>
                        <div class="g-flex-info p1-m3-info">
                           <div data-am-translate="m3.info.2" data-am-translate-group="m3.popup" data-wysiwyg="false">
                              Nature Reserve Model Key</div>
                           <div data-am-translate="m3.info.2" data-am-translate-group="m3.popup" data-wysiwyg="false">
                              Nature Pod</div>
                        </div>
                        <div class="g-flex-info p1-m3-info">
                           <div class="g-info-key">
                              <table>
                                 <tr>
                                    <td><img src="/engine/packages/PISA2025/Resources/images/objL.png" /></td>
                                    <td data-am-translate="m3.info.3" data-am-translate-group="m3.popup">Track</td>
                                 </tr>
                                 <tr>
                                    <td><img src="/engine/packages/PISA2025/Resources/images/objJ.png" /></td>
                                    <td data-am-translate="m3.info.4" data-am-translate-group="m3.popup">Track junction
                                    </td>
                                 </tr>
                                 <tr>
                                    <td><span class="yellow-circle"></span></td>
                                    <td data-am-translate="m3.info.5" data-am-translate-group="m3.popup">Viewing area
                                    </td>
                                 </tr>
                                 <tr>
                                    <td><span class="red-square"></span></td>
                                    <td data-am-translate="m3.info.6" data-am-translate-group="m3.popup">Visitor kiosk
                                    </td>
                                 </tr>
                              </table>
                           </div>
                           <div>
                              <img src="/engine/packages/PISA2025/Resources/images/pod-side-note.png" />
                              <img src="/engine/packages/PISA2025/Resources/images/pod-top-note.png" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- RESOURCES DIALOG START-->
                  <div class="g-modal p1-m3 g-help-dialog am-modal g-switch-group">
                     <div class="g-modal-content g-modal-content-help">
                        <div class="g-hide g-bubble p1-help-b1 g-bubble-top g-rtl-right-pos g-rtl-right-after-pos"
                           data-am-translate="m3.help.popup.page2.5" data-am-translate-group="m3.help.popup.page2"
                           data-wysiwyg="false">
                           Click this arrow to go back to the previous help screen
                        </div>
                        <div class="g-resource-dialog-title">
                           <button name="close" class="g-dialog-btn g-close g-rtl-float-right"><i
                                 class="far fa-window-close"></i></button>
                           <button name="back" disabled="true" class="g-dialog-btn g-rtl-float-right g-switch-btn">
                              <i class="g-rtl-img fas fa-long-arrow-alt-left"></i>
                           </button>
                        </div>
                        <div class="g-instructions g-avatar g-avatar-help">
                           <img src="/engine/packages/PISA2025/Resources/images/robot-avatar.png" />
                           <div class="g-switch-holder">
                              <!-- HELP 1-->
                              <div id="P1H01" class="g-help-page1 g-switch-content g-invisible">
                                 <p class="g-text-top" data-am-translate="m3.help.popup.page1.2"
                                    data-am-translate-group="m3.help.popup.page1" data-wysiwyg="false">
                                    Click on the 'I want to learn' button to see resources that can help you learn how
                                    to complete the task on your own.
                                 </p>
                                 <!-- For Learning Center-->
                                 <div class="lc-help">
                                    <button class="g-btn g-switch-btn" data-switch-target=".g-help-page3">
                                       <span data-am-translate="m3.help.popup.page1.3"
                                          data-am-translate-group="m3.help.popup.page1" data-wysiwyg="false">I want to
                                          learn</span>
                                    </button>
                                    <p data-am-translate="m3.help.popup.page1.4"
                                       data-am-translate-group="m3.help.popup.page1" data-wysiwyg="false">
                                       If you still stuck, click on the 'I need more help' button
                                    </p>
                                    <button class="g-btn g-switch-btn g-help-required-level" data-help-level="1"
                                       data-switch-target=".g-help-page2">
                                       <span data-am-translate="m3.help.popup.page1.5"
                                          data-am-translate-group="m3.help.popup.page1" data-wysiwyg="false">I need more
                                          help</span>
                                    </button>
                                 </div>
                                 <!-- For Big Challenge, switch to HELP 4-->
                                 <div class="bc-help g-hide">
                                    <button class="g-btn g-switch-btn" data-switch-target=".g-help-page4">
                                       <span data-am-translate="m3.help.popup.page1.3"
                                          data-am-translate-group="m3.help.popup.page1" data-wysiwyg="false">I want to
                                          learn</span>
                                    </button>
                                    <p data-am-translate="m3.help.popup.page1.6"
                                       data-am-translate-group="m3.help.popup.page1" data-wysiwyg="false">
                                       There is no additional help available for this task
                                    </p>
                                 </div>
                              </div>
                              <!-- HELP 2-->
                              <div id="P1H02" class="g-help-page2 g-switch-content g-invisible"
                                 data-switch-target=".g-help-page1">
                                 <p class="g-text-top" data-am-translate="m3.help.popup.page2.1"
                                    data-am-translate-group="m3.help.popup.page2" data-wysiwyg="true">
                                    If I provide you with additional help, you can only earn <span
                                       class="g-help-red">Partial Credit</span> (half marks) for this task.
                                 </p>
                                 <p data-am-translate="m3.help.popup.page2.2"
                                    data-am-translate-group="m3.help.popup.page2" data-wysiwyg="false">
                                    Are you sure you want to proceed?
                                 </p>
                                 <div class="g-help-btn-holder">
                                    <button class="g-btn g-close">
                                       <span data-am-translate="m3.help.popup.page2.3"
                                          data-am-translate-group="m3.help.popup.page2" data-wysiwyg="false">No, take me
                                          back to task</span>
                                    </button>
                                    <button class="g-btn g-switch-btn" data-switch-target=".g-help-page4">
                                       <span data-am-translate="m3.help.popup.page2.4"
                                          data-am-translate-group="m3.help.popup.page2" data-wysiwyg="false">Yes, give
                                          me additional help</span>
                                    </button>
                                 </div>
                              </div>

                              <!-- HELP 316-->
                              <div id="P1H316" class="g-help-page316 g-switch-content g-invisible" data-help-level="3"
                                 data-switch-target=".g-help-page4" data-init="P1M316_P1H3">
                                 <div class="g-help-inline-title" data-am-translate="m3.help.popup.page316.1"
                                    data-am-translate-group="m3.help.popup.page316" data-wysiwyg="false">
                                    Solution
                                 </div>
                                 <p class="g-text-top" data-am-translate="m3.help.popup.page316.2"
                                    data-am-translate-group="m3.help.popup.page316" data-wysiwyg="false">
                                    Click on the ‘Run’ button to see how the program works.
                                 </p>
                                 <div class="p1-m3-world-section">
                                    <div class="g-blockly-container">
                                       <div class="g-blockly-tabs g-clearfix">
                                          <div class="g-rtl-float-left g-blockly-tab">
                                             <span data-am-translate="m3.codeblocks.tab.2"
                                                data-am-translate-group="m3.codeblocks" data-wysiwyg="false">Work space:
                                             </span>
                                             <span>3</span>
                                          </div>
                                       </div>
                                       <div class="g-blockly g-blockly-h3" id="blocklyDivH316"></div>
                                    </div>
                                    <div class="p1-m3-world-panel p1-m3-world-panel-h3">
                                       <div class="p1-m3-world-container">
                                          <div class="p1-m3-world-tabs g-clearfix">
                                             <div class="g-rtl-float-left p1-m3-world-title g-blockly-tab"
                                                data-am-translate="m3.world.1" data-am-translate-group="m3.world"
                                                data-wysiwyg="false">Nature reserve simulation</div>
                                          </div>
                                          <div id="tp-world1-h316" class="p1-m3-world g-blockly-target-h316"></div>
                                       </div>
                                       <div class="p1-m3-world-btn-strip">
                                          <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run-h316">
                                             <i class="g-rtl-img fas fa-play"></i>
                                             <span data-am-translate="m3.buttons.run"
                                                data-am-translate-group="m3.buttons" data-wysiwyg="false">Run</span>
                                          </button>
                                          <button
                                             class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-reset g-btn-blockly-reset-help"
                                             reset-target=".g-blockly-target-h316">
                                             <i class="g-rtl-img fas fa-undo"></i>
                                             <span data-am-translate="m3.buttons.reset"
                                                data-am-translate-group="m3.buttons" data-wysiwyg="false">Reset</span>
                                          </button>
                                          <div class="g-blockly-speed-holder"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="g-bubble p1-m3-16-b2 g-bubble-none"
                                    data-am-translate="m3.help.popup.page316.3"
                                    data-am-translate-group="m3.help.popup.page316" data-wysiwyg="false">
                                    The program contains a <span class="g-help-italic">repeat</span> block that runs
                                    until the middle sensor detects the black path.
                                    The <span class="g-help-italic">turn left</span> block inside this repeat will make
                                    the Nature Pod turn around until the middle sensor detects black.
                                    A <span class="g-help-italic">turn right</span> block could also be used.
                                 </div>
                              </div>
                              <!-- HELP 317-->
                              <div id="P1H317" class="g-help-page317 g-switch-content g-invisible" data-help-level="3"
                                 data-switch-target=".g-help-page4" data-init="P1M317_P1H3">
                                 <div class="g-help-inline-title" data-am-translate="m3.help.popup.page317.1"
                                    data-am-translate-group="m3.help.popup.page317" data-wysiwyg="false">
                                    Solution
                                 </div>
                                 <p class="g-text-top" data-am-translate="m3.help.popup.page317.2"
                                    data-am-translate-group="m3.help.popup.page317" data-wysiwyg="false">
                                    Click on the ‘Run’ button to see how the program works.
                                 </p>
                                 <div class="p1-m3-world-section">
                                    <div class="g-blockly-container">
                                       <div class="g-blockly-tabs g-clearfix">
                                          <div class="g-rtl-float-left g-blockly-tab">
                                             <span data-am-translate="m3.codeblocks.tab.2"
                                                data-am-translate-group="m3.codeblocks" data-wysiwyg="false">Work space:
                                             </span>
                                             <span>8</span>
                                          </div>
                                       </div>
                                       <div class="g-blockly g-blockly-h3" id="blocklyDivH317"></div>
                                    </div>
                                    <div class="p1-m3-world-panel p1-m3-world-panel-h3">
                                       <div class="p1-m3-world-container">
                                          <div class="p1-m3-world-tabs g-clearfix">
                                             <div class="g-rtl-float-left p1-m3-world-title g-blockly-tab"
                                                data-am-translate="m3.world.1" data-am-translate-group="m3.world"
                                                data-wysiwyg="false">Nature reserve simulation</div>
                                             <div class="wait">Waiting time: <span id="wait_time_help">0</span> minute
                                             </div>
                                          </div>
                                          <div id="tp-world1-h317" class="p1-m3-world g-blockly-target-h317"></div>
                                       </div>
                                       <div class="p1-m3-world-btn-strip">
                                          <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run-h317">
                                             <i class="g-rtl-img fas fa-play"></i>
                                             <span data-am-translate="m3.buttons.run"
                                                data-am-translate-group="m3.buttons" data-wysiwyg="false">Run</span>
                                          </button>
                                          <button
                                             class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-reset g-btn-blockly-reset-help"
                                             reset-target=".g-blockly-target-h317">
                                             <i class="g-rtl-img fas fa-undo"></i>
                                             <span data-am-translate="m3.buttons.reset"
                                                data-am-translate-group="m3.buttons" data-wysiwyg="false">Reset</span>
                                          </button>
                                          <div class="g-blockly-speed-holder"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="g-bubble p1-m3-17-b1 g-bubble-none"
                                    data-am-translate="m3.help.popup.page317.3"
                                    data-am-translate-group="m3.help.popup.page317" data-wysiwyg="false">
                                    <span class="g-help-italic">Repeat while middle sensor detects black</span> / <span
                                       class="g-help-italic">move forward</span>:
                                    instruct Nature Pod to follow the path. <span class="g-help-italic">Repeat 5
                                       times</span> / <span class="g-help-italic">wait 1 minute</span>:
                                    instruct Nature Pod to wait 5 minutes at the end of the path. <span
                                       class="g-help-italic">Repeat until middle sensor detects black</span>/<span
                                       class="g-help-italic">turn left</span>:
                                    instruct Nature Pod to turn left until the middle sensor is back over the path.
                                    All of these instructions repeat 2 times.
                                 </div>
                              </div>
                              <!-- HELP 318-->
                              <div id="P1H318" class="g-help-page318 g-switch-content g-invisible" data-help-level="3"
                                 data-switch-target=".g-help-page4" data-init="P1M318_P1H3">
                                 <div class="g-help-inline-title" data-am-translate="m3.help.popup.page318.1"
                                    data-am-translate-group="m3.help.popup.page318" data-wysiwyg="false">
                                    Solution
                                 </div>
                                 <p class="g-text-top" data-am-translate="m3.help.popup.page318.2"
                                    data-am-translate-group="m3.help.popup.page318" data-wysiwyg="false">
                                    Click on the ‘Run’ button to see how the program works.
                                 </p>
                                 <div class="p1-m3-world-section">
                                    <div class="g-blockly-container">
                                       <div class="g-blockly-tabs g-clearfix">
                                          <div class="g-rtl-float-left g-blockly-tab">
                                             <span data-am-translate="m3.codeblocks.tab.2"
                                                data-am-translate-group="m3.codeblocks" data-wysiwyg="false">Work space:
                                             </span>
                                             <span>7</span>
                                          </div>
                                       </div>
                                       <div class="g-blockly g-blockly-h3" id="blocklyDivH318"></div>
                                    </div>
                                    <div class="p1-m3-world-panel p1-m3-world-panel-h3">
                                       <div class="p1-m3-world-container">
                                          <div class="p1-m3-world-tabs g-clearfix">
                                             <div class="g-rtl-float-left p1-m3-world-title g-blockly-tab"
                                                data-am-translate="m3.world.1" data-am-translate-group="m3.world"
                                                data-wysiwyg="false">Nature reserve simulation</div>
                                          </div>
                                          <div id="tp-world1-h318" class="p1-m3-world g-blockly-target-h318"></div>
                                       </div>
                                       <div class="p1-m3-world-btn-strip">
                                          <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run-h318">
                                             <i class="g-rtl-img fas fa-play"></i>
                                             <span data-am-translate="m3.buttons.run"
                                                data-am-translate-group="m3.buttons" data-wysiwyg="false">Run</span>
                                          </button>
                                          <button
                                             class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-reset g-btn-blockly-reset-help"
                                             reset-target=".g-blockly-target-h318">
                                             <i class="g-rtl-img fas fa-undo"></i>
                                             <span data-am-translate="m3.buttons.reset"
                                                data-am-translate-group="m3.buttons" data-wysiwyg="false">Reset</span>
                                          </button>
                                          <div class="g-blockly-speed-holder"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="g-bubble p1-m3-18-b2 g-bubble-none"
                                    data-am-translate="m3.help.popup.page318.3"
                                    data-am-translate-group="m3.help.popup.page318" data-wysiwyg="false">
                                    The <span class="g-help-italic">repeat until middle sensor detects yellow</span>
                                    keeps the Nature Pod running it gets to the yellow circle.
                                    The <span class="g-help-italic">repeat while middle sensor detects black</span>
                                    makes the Nature Pod move forward along the path.
                                    If the <span class="g-help-italic">left sensor detects black</span> the nature pod
                                    must be at a turn, and it then turns left until the middle sensor detects black
                                    again.
                                 </div>
                              </div>
                              <!-- HELP 319-->
                              <div id="P1H319" class="g-help-page319 g-switch-content g-invisible" data-help-level="3"
                                 data-switch-target=".g-help-page4" data-init="P1M319_P1H3">
                                 <div class="g-help-inline-title" data-am-translate="m3.help.popup.page319.1"
                                    data-am-translate-group="m3.help.popup.page319" data-wysiwyg="false">
                                    Solution
                                 </div>
                                 <p class="g-text-top" data-am-translate="m3.help.popup.page319.2"
                                    data-am-translate-group="m3.help.popup.page319" data-wysiwyg="false">
                                    Click on the ‘Run’ button to see how the program works.
                                 </p>
                                 <div class="p1-m3-world-section">
                                    <div class="g-blockly-container">
                                       <div class="g-blockly-tabs g-clearfix">
                                          <div class="g-rtl-float-left g-blockly-tab">
                                             <span data-am-translate="m3.codeblocks.tab.2"
                                                data-am-translate-group="m3.codeblocks" data-wysiwyg="false">Work space:
                                             </span>
                                             <span>10</span>
                                          </div>
                                       </div>
                                       <div class="g-blockly g-blockly-h3" id="blocklyDivH319"></div>
                                    </div>
                                    <div class="p1-m3-world-panel p1-m3-world-panel-h3">
                                       <div class="p1-m3-world-container">
                                          <div class="p1-m3-world-tabs g-clearfix">
                                             <div class="g-rtl-float-left p1-m3-world-title g-blockly-tab"
                                                data-am-translate="m3.world.1" data-am-translate-group="m3.world"
                                                data-wysiwyg="false">Nature reserve simulation</div>
                                          </div>
                                          <div id="tp-world1-h319" class="p1-m3-world g-blockly-target-h319"></div>
                                       </div>
                                       <div class="p1-m3-world-btn-strip">
                                          <button class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-run-h319">
                                             <i class="g-rtl-img fas fa-play"></i>
                                             <span data-am-translate="m3.buttons.run"
                                                data-am-translate-group="m3.buttons" data-wysiwyg="false">Run</span>
                                          </button>
                                          <button
                                             class="g-btn-blockly g-btn-press g-btn-ico g-btn-blockly-reset g-btn-blockly-reset-help"
                                             reset-target=".g-blockly-target-h319">
                                             <i class="g-rtl-img fas fa-undo"></i>
                                             <span data-am-translate="m3.buttons.reset"
                                                data-am-translate-group="m3.buttons" data-wysiwyg="false">Reset</span>
                                          </button>
                                          <div class="g-blockly-speed-holder"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="g-bubble p1-m3-19-b1 g-bubble-none"
                                    data-am-translate="m3.help.popup.page319.3"
                                    data-am-translate-group="m3.help.popup.page319" data-wysiwyg="false">
                                    The program runs until the Nature Pod reaches the red square.
                                    While the middle sensor is over the path the Nature Pod moves forward.
                                    If the left sensor is over the path, Nature Pod will need to turn left.
                                    If the right sensor is over the path, Nature Pod will need to turn right.
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- RESOURCES DIALOG END-->
               </div>
            </div>
         </div>
         <!-- COMMON LABELS FOR THE MODULE -->
         <div class="g-hide">
            <span data-am-translate="m3.codeblocks.b1" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="tp-turn-left-lbl">turn left</span>
            <span data-am-translate="m3.codeblocks.b2" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="tp-turn-right-lbl">turn right</span>
            <span data-am-translate="m3.codeblocks.b3" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="tp-move-pod-lbl">move forward</span>
            <span data-am-translate="m3.codeblocks.b4" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="repeat-lbl">repeat</span>
            <span data-am-translate="m3.codeblocks.b4" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="ra-repeat-lbl">repeat</span>
            <span data-am-translate="m3.codeblocks.b5" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="until-lbl">until</span>
            <span data-am-translate="m3.codeblocks.b6" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="do-lbl">do</span>
            <span data-am-translate="m3.codeblocks.b7" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="ra-times-lbl">times</span>
            <span data-am-translate="m3.codeblocks.b8" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="tp-sensor-lbl">sensor detects</span>
            <span data-am-translate="m3.codeblocks.b9" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="if-lbl">if</span>
            <span data-am-translate="m3.codeblocks.b10" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="tp-black-lbl">black</span>
            <span data-am-translate="m3.codeblocks.b11" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="tp-red-lbl">red</span>
            <span data-am-translate="m3.codeblocks.b12" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="when-run-lbl">when run</span>
            <span data-am-translate="m3.codeblocks.b13" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="start-lbl">start</span>
            <span data-am-translate="m3.codeblocks.b14" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="end-lbl">end</span>
            <span data-am-translate="m3.codeblocks.b15" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="move-down-lbl">move down</span>
            <span data-am-translate="m3.codeblocks.b16" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="move-left-lbl">move left</span>
            <span data-am-translate="m3.codeblocks.b17" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="move-right-lbl">move right</span>
            <span data-am-translate="m3.codeblocks.b18" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="while-lbl">while</span>
            <span data-am-translate="m3.codeblocks.b19" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="left-lbl">left</span>
            <span data-am-translate="m3.codeblocks.b20" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="middle-lbl">middle</span>
            <span data-am-translate="m3.codeblocks.b21" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="right-lbl">right</span>
            <span data-am-translate="m3.codeblocks.b22" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="wait-lbl">wait 1 minute</span>
            <span data-am-translate="m3.codeblocks.b23" data-wysiwyg="false" data-am-translate-group="m3.codeblocks"
               id="else-lbl">else</span>

            <span data-am-translate="m3.world.errors.1" data-wysiwyg="false" data-am-translate-group="m3.world.errors"
               id="tp-move1-err">Error: Can not move.</span>
            <!--<span data-am-translate="m3.world.errors.2" data-wysiwyg="false" data-am-translate-group="m3.world.errors" id="ra-move2-err">Error: Collision. Objects are stacked to high.</span>
               <span data-am-translate="m3.world.errors.3" data-wysiwyg="false" data-am-translate-group="m3.world.errors" id="ra-pickup1-err">Error: Can not pick up. Claw is already holding an object.</span>
               <span data-am-translate="m3.world.errors.4" data-wysiwyg="false" data-am-translate-group="m3.world.errors" id="ra-place1-err">Error: Can not place. Claw is not holding an object.</span>-->
         </div>

         <script type="text/javascript" src="/engine/packages/PISA2025/Resources/build/js/pisa2025.min.js?v={$VERSION$}"
            data-keep-original-source="false">&#160;</script>
      </body>

      </html>
   </xsl:template>
</xsl:stylesheet>`