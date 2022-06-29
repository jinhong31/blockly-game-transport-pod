Sonet.am.widgets.FlowChartComponent = Class.extend({
    init: function (flowchartConfig) {
        let me = this;
        me.config = {
            ...flowchartConfig, ...{
                labels: {},
                flowChartShapes: ["dimond", "retangle"],
                toolBoxBlocksHtml: '',
                toolBoxBlocksGroup: [],
                toolBoxHtmlWithBlocks: '',
                playGroundBlocksHtml: '',
                playGroundHtmlWithBlocks: '',
                playGroundBlocksGroup: [],
                jsPlumb_connections: [],
                jsPlumb_playgroundSourceAndTargetElementGroup: [],

            }
        };



        me.registerEvents();


    },

    registerEvents() {
        let me = this;
        me.setLabels();


        me.setToolBoxBlocksHtml();

        me.setToolBoxHtmlWithBlocks();


        me.setPlayGroundBlocksHtml();

        me.setPlayGroundHtmlWithBlocks();

        me.renderFlowChartComponent();



        // me.renderToolBox(me.config.toolBoxBlocksHtml);
        // me.renderPlayGround(me.config.playGroundBlocksHtml)

        me.jsPlumbInstance = jsPlumb.getInstance();

        me.jsPlumbInstance.importDefaults({
            Endpoint: ["Dot", { radius: 4 }],
            Anchors: [
                // "TopCenter",
                "RightMiddle",
                // "BottomRight",
                "BottomCenter",
                // "BottomLeft",
                "LeftMiddle",
            ],
            ConnectionOverlays: [
                ["Arrow", { location: 0.99 }],

            ],

            PaintStyle: {
                strokeStyle: "#99a3d4",
                lineWidth: 3
            }
        });


        me.setTargetAndSource(me.config.toolBox.blocks);

        me.hideInitPointOfToolboxBlocks(me.config.toolBox.blocks);

        me.setJsPlumb_draggable(me.config.toolBox.blocks);

        me.setPlayGroupDroppable();

        me.setToolBoxDroppable();

        me.setPlayGroudConnection(me.config.playGround.blocks);

        me.setJsPlumb_playgroundSourceAndTargetElementGroup();
        me.setTargetAndSource(me.config.jsPlumb_playgroundSourceAndTargetElementGroup);



        me.setCheckFlowchartButtonEvent();



        // console.log(me.config)


    },
    setCheckFlowchartButtonEvent() {
        let me = this;
        let connections = [], yesLabelText = "";


        $(".p1-m6-check-flowchart").on("click", () => {
            connections = me.jsPlumbInstance.getConnections();
            // console.log(me.jsPlumbInstance.getConnections());
            let connectionReadableInformation = connections.map(item => {

                yesLabelText = "";

                // console.log(me.jsPlumb_overlaysHasYesLabel(item.overlays));

                if (me.jsPlumb_overlaysHasYesLabel(item.overlays)) {

                    let label = item.overlays.filter(item => {
                        if (item.canvas)
                            return item.canvas.innerText == "yes" || item.canvas.innerText == "no";
                    })[0];

                    // console.log({label:label.canvas.innerText})

                    if (label.canvas.innerText == "yes") {
                        yesLabelText = 'and with a label of "Yes"'
                    }

                    if (label.canvas.innerText == "no") {
                        yesLabelText = 'and with a label of "No"'
                    }

                }
                // console.log(item)
                // console.log(item.overlays)

                return `From Block "${item.source.text().trim()}" to Block "${item.target.text().trim()}" ${yesLabelText.trim()}`;
            });

            connectionReadableInformation.forEach((item, index) => { console.log(index + 1, item) });

            // console.log({ connectionReadableInformation })
        });

    },

    renderFlowChartComponent() {
        let me = this;
        $(".p1-m6-flowchat-container").append(me.config.toolBoxHtmlWithBlocks + me.config.playGroundHtmlWithBlocks);

    },

    setToolBoxHtmlWithBlocks() {

        let me = this;
        me.config.toolBoxHtmlWithBlocks = `
        <div class="p1-m6-flowchart-toolbox">
            <h2 data-am-translate="m613.lable.1" data-am-translate-group="m613.lable" data-wysiwyg="false">Flowchart</h2>
            ${me.config.toolBoxBlocksHtml}
        </div>
        `;

        // console.log(me.config.toolBoxHtmlWithBlocks);
    },
    setPlayGroupDroppable() {
        let me = this;

        $(".p1-m6-flowchart-playground").droppable({
            drop: function (e, ui) {
                // console.log(ui)
                me.dropToPlayGround(ui.draggable);
            }
        });

    },

    setToolBoxDroppable() {

        let me = this;

        $(".p1-m6-flowchart-toolbox").droppable({
            drop: function (e, ui) {
                // console.log(ui)
                me.dropToToolBox(ui.draggable);

            }
        });

    },

    hideInitPointOfToolboxBlocks(blocks) {
        blocks.forEach(item => {
            $("#" + item.id).find(".connection-init-point").hide();
        });
    },
    setJsPlumb_draggable(blocks) {
        let me = this;
        // console.log({ blocks })
        blocks.forEach(item => {
            me.jsPlumbInstance.draggable(item.id, {
                containment: ".p1-m6-flowchat-container"
            });
        });


    },

    dropToPlayGround(droppedjQueryObj) {
        // console.log(droppedjQueryObj)

        droppedjQueryObj.find(".connection-init-point").show();

    },

    dropToToolBox(droppedjQueryObj) {
        // console.log(droppedjQueryObj)
        let me = this;

        droppedjQueryObj.find(".connection-init-point").hide();
        droppedjQueryObj.css("inset", "");

        me.removeAllConnections(droppedjQueryObj);

    },

    removeAllConnections(element) {
        let me = this;
        connections = me.jsPlumbInstance.getConnections().filter(item => item.sourceId == element.prop("id") || item.targetId == element.prop("id"));
        // console.log({ connections });
        connections.forEach(item => me.jsPlumb_removeConnection(item));

    },

    setJsPlumb_playgroundSourceAndTargetElementGroup() {
        let me = this;
        me.config.jsPlumb_playgroundSourceAndTargetElementGroup = me.config.playGround.blocks.filter(element => element.isTargetAndSource);
    },

    setTargetAndSource(elementGroup) {
        let me = this;
        // console.log(elementGroup)
        let yesLabelPlaceHolderOverlay = ["Custom", {
            create: function () {
                return $("<div></div>")
            }
        }];

        elementGroup.forEach(element => {
            // console.log({ element })

            me.addConnectionInitPoint(element);



            me.jsPlumbInstance.makeSource(element.id, {
                filter: ".connection-init-point",
                maxConnections: 3,
                connector: ["Straight"],
                connectorOverlays: [

                    [
                        "Custom",
                        {
                            create: function () {
                                return $(
                                    '<div><i class="w-fitsim-model-connection-delete fas fa-minus-circle"></i></div>'
                                );
                            },
                            events: {
                                click: function (customOverlay) {
                                    me.jsPlumb_removeConnection(customOverlay.component);
                                },
                            },
                            id: "overlay-delete",
                            location: 0.2,
                        },
                    ],
                    element.shape == "dimond" ? me.jsPlumb_getYesLebelOverlay() : yesLabelPlaceHolderOverlay,

                ],
            });

            me.jsPlumbInstance.makeTarget(element.id, {
                maxConnections: 3,
                endpoint: ["Dot", { radius: 4 }],
            });

        });





    },
    setPlayGroudConnection(blocksConfig) {
        let me = this;
        let connection = "";
        let yesLabels = [];
        let connectionOverlays = [["Arrow", { location: 0.99 }]];

        // console.log({blocksConfig})

        blocksConfig.forEach(element => {

            yesLabels = [];
            connectionOverlays = [["Arrow", { location: 0.99 }]];

            if (element.connectTo[0] && $("#" + element.connectTo[0]).length > 0) {
                // console.log({ element })

                if (element.connectionConfigs) {

                    yesLabels = element.connectionConfigs.map(item => me.jsPlumb_getYesLebelOverlay(item.yesLabel));

                }
  //add delete tag to connection
                connectionOverlays = [...connectionOverlays, ...[
                    [
                        "Custom",
                        {
                            create: function () {
                                return $(
                                    '<div><i class="w-fitsim-model-connection-delete fas fa-minus-circle"></i></div>'
                                );
                            },
                            events: {
                                click: function (customOverlay) {
                                    me.jsPlumb_removeConnection(customOverlay.component);
                                    // me.removeConnection(customOverlay.component);
                                },
                            },
                            id: "overlay-delete",
                            location: 0.2,
                        },
                    ]
                ]];

                if (yesLabels[0] != undefined) {
                    connectionOverlays = [
                        ...connectionOverlays, ...
                        [yesLabels[0]]

                    ];

                }



                connection = me.jsPlumbInstance.connect({

                    source: element.id,
                    target: element.connectTo[0],
                    // anchors: ["RightMiddle", "LeftMiddle"],
                    anchors: element.connectionConfigs && element.connectionConfigs[0].anchorsPosition ? element.connectionConfigs[0].anchorsPosition : ["RightMiddle", "LeftMiddle"],
                    connector: ["Straight"],
                    overlays: connectionOverlays,
                    paintStyle: { lineWidth: 3, strokeStyle: "#99a3d4" },
                    endpoint: ["Dot", { radius: 4 }],

                });

                me.config.jsPlumb_connections.push(connection);


                // console.log({connection})


            }

            if (element.connectTo[1] && $("#" + element.connectTo[1]).length > 0) {
                // console.log({ element })

                yesLabels = [];
                connectionOverlays = [["Arrow", { location: 0.99 }]];

                if (element.connectionConfigs) {

                    yesLabels = element.connectionConfigs.map(item => me.jsPlumb_getYesLebelOverlay(item.yesLabel));

                    // console.log({ yesLabels })
                }

                if (yesLabels[1] != undefined) {

                    connectionOverlays = [...connectionOverlays, ...[yesLabels[1]],
                    ...[
                        [
                            "Custom",
                            {
                                create: function () {
                                    return $(
                                        '<div><i class="w-fitsim-model-connection-delete fas fa-minus-circle"></i></div>'
                                    );
                                },
                                events: {
                                    click: function (customOverlay) {
                                        // console.log(customOverlay)
                                        me.jsPlumb_removeConnection(customOverlay.component);
                                    },
                                },
                                id: "overlay-delete",
                                location: 0.2,
                            },
                        ]
                    ]];

                }

                // console.log(element.connectionConfigs.anchorsPosition)

                connection = me.jsPlumbInstance.connect({

                    source: element.id,
                    target: element.connectTo[1],
                    anchors: element.connectionConfigs[1].anchorsPosition,
                    connector: ["Flowchart"],
                    overlays: connectionOverlays,
                    paintStyle: { lineWidth: 3, strokeStyle: "#99a3d4" },
                    endpoint: ["Dot", { radius: 4 }],

                });

                me.config.jsPlumb_connections.push(connection);
                // console.log("2",{connection})


            }






        });


    },
    jsPlumb_removeConnection(connection) {

        let me = this;
        // console.log(connection)
        me.jsPlumbInstance.detach(connection);

        // console.log(me.config)


    },

    jsPlumb_getYesLebelOverlay(yesLabelDisplay = true) {
        let me = this;
        return [
            "Custom",
            {
                create: function () {
                    return $(
                        `<div><div class="p1-m6-yes-label">${yesLabelDisplay == true ? `yes` : `no`}</div></div>
`                    );
                },
                events: {
                    click: function (customOverlay) {
                        me.jsPlumb_toggleYesLabel(customOverlay.component);
                    },
                },
                id: "overlay-yes",
                location: 0.50,
            },
        ];
    },

    jsPlumb_overlaysHasYesLabel(overLaysToCheck) {
        let me = this;

        let yesLabelOverlay = overLaysToCheck.filter(item => {
            if (item.canvas)
                return item.canvas.innerText == "yes" || item.canvas.innerText == "no";
        })

        // console.log(yesLabelOverlay)

        return yesLabelOverlay.length != 0;


    },



    jsPlumb_toggleYesLabel(connection) {
        let me = this;
        let { targetId, sourceId } = connection;

        // console.log({ connection })

        // console.log(connection.getConnector().type)


        let yesLabelOverlay = connection.overlays.filter(item => {
            if (item.canvas) {
                if (item.canvas.innerText == "yes" || item.canvas.innerText == "no") {
                    return true;
                }
            }
        });

        // console.log(yesLabelOverlay[0].canvas.innerHTML);


        let oldLabelTextIsYes = yesLabelOverlay[0].canvas.innerText == "yes";

        yesLabelOverlay[0].canvas.innerHTML = oldLabelTextIsYes ? `<div class="p1-m6-yes-label">no</div>` : `<div class="p1-m6-yes-label">yes</div>`;





        // let newConnect = me.jsPlumbInstance.connect({
        //     source: sourceId,
        //     target: targetId,
        //     connector: "Flowchart",
        //     overlays: [

        //         [
        //             "Custom",
        //             {
        //                 create: function () {
        //                     return $(
        //                         '<div><i class="w-fitsim-model-connection-delete fas fa-minus-circle"></i></div>'
        //                     );
        //                 },
        //                 events: {
        //                     click: function (customOverlay) {
        //                         me.jsPlumb_removeConnection(customOverlay.component);
        //                         // me.removeConnection(customOverlay.component);
        //                     },
        //                 },
        //                 id: "overlay-delete",
        //                 location: 0.2,
        //             },
        //         ],
        //         me.jsPlumb_getYesLebelOverlay(!oldLabelTextIsYes),

        //     ],
        //     paintStyle: { lineWidth: 3, strokeStyle: "#99a3d4" },
        //     endpoint: ["Dot", { radius: 4 }],
        // });

        // me.jsPlumb_removeConnection(connection);
        // console.log({newConnect})

        // console.log(newConnect.getConnector())


        // console.log({ oldLabelText, targetId, sourceId, connection })
    },

    setPlayGroundBlocksHtml() {
        let me = this;
        // console.log(me.config.playGround.blocks);
        me.config.playGroundBlocksGroup = me.config.playGround.blocks.map(item => me.getBlockHtml(item));
        me.config.playGroundBlocksHtml = me.config.playGroundBlocksGroup.join("");


        // console.log(me.config.playGroundBlocksGroup)


    },

    setToolBoxBlocksHtml() {
        let me = this;
        // console.log(me.config.toolBox.blocks)

        me.config.toolBoxBlocksGroup = me.config.toolBox.blocks.map(item => me.getBlockHtml(item));

        me.config.toolBoxBlocksHtml = me.config.toolBoxBlocksGroup.join("");

    },





    setLabels() {
        let me = this;

        me.config.labels.waitFiveMin = me.getLabelText("flowchart-lbl-wait-five-min");

        me.config.labels.waitOneMin = me.getLabelText("flowchart-lbl-wait-one-min");


        me.config.labels.enterExhibition = me.getLabelText("flowchart-lbl-enter-exhibition");

        me.config.labels.moveToView = me.getLabelText("flowchart-lbl-move-to-view");

        me.config.labels.isFreeSpace = me.getLabelText("flowchart-lbl-is-free-space");
        me.config.labels.enterAndView = me.getLabelText("flowchart-lbl-enter-and-view");

        me.config.labels.exitExhibition = me.getLabelText("flowchart-lbl-exit-exhibition");


        me.config.labels.hasVisitorTry = me.getLabelText("flowchart-lbl-has-visitor-try");



    },

    getLabelText(labelId) {

        if ($("#" + labelId).length) {
            return ($("#" + labelId).text());

        }
        else console.error("please seet the label of " + labelId);
    },

    getDimondBoxHtml(text, elementId = "", className = "p1-m6-dimond-box") {

        return `
        <div class="p1-m6-dimond-group ${className}" id=${elementId}>
           <div class="p1-m6-diamond-sharp"></div>
           <div class="p1-m6-diamond-text">${text}</div>
          
        </div>`;

    },

    getRetangleHtml(text, elementId = "", className = "p1-m6-retangle-box") {

        return `
        <div class="p1-m6-retangle ${className}" id=${elementId}>
            ${text}
        </div>
     `;

    },

    getBlackBlockHtml(text, elementId = "", className = "p1-m6-black-block") {

        return `
        <div class="p1-m6-black-block ${className}" id=${elementId}>
            ${text}
        </div>
     `;

    },


    getBlockHtml(blockConfig) {

        let me = this;
        let { text, shape, id } = blockConfig;

        // text=text+` <div class="connection-init-point"></div>`;


        if (shape === "dimond") {
            return me.getDimondBoxHtml(me.config.labels[text], id);
        }

        if (shape === "retangle") {
            return me.getRetangleHtml(me.config.labels[text], id);
        }

        if (shape === "blackBlock") {
            return me.getBlackBlockHtml(me.config.labels[text], id);
        }


    },

    renderToolBox(toolBoxHtml) {


        let me = this;
        // console.log({ toolBoxHtml })
        $(".p1-m6-flowchart-toolbox").append(toolBoxHtml);

        // me.setToolBoxBlockConnectionInitPoint();


    },
    setToolBoxBlockConnectionInitPoint() {
        let me = this;
        // console.log(me.config.toolBox.blocks)

        me.config.toolBox.blocks.forEach(item => {
            me.addConnectionInitPoint(item);

        });

    },

    addConnectionInitPoint(block) {
        // console.log({ block })

        if (block.shape === "retangle" || block.shape === "blackBlock") {
            $("#" + block.id).append(`<div class="connection-init-point"></div>`);
        }
        if (block.shape === "dimond") {
            $("#" + block.id + ">.p1-m6-diamond-text").append(`<div class="connection-init-point"></div>`);
        }

    },

    renderPlayGround(playGroundHtml) {


        $(".p1-m6-flowchart-playground").append(playGroundHtml);

    },

    setPlayGroundHtmlWithBlocks() {
        let me = this;

        me.config.playGroundHtmlWithBlocks = `
        <div class="p1-m6-flowchart-playground">
        <button class="p1-m6-check-flowchart">Check flowchart</button>

            ${me.config.playGroundBlocksHtml}
        </div>
        `;

    }

});