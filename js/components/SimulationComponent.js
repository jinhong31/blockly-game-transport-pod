Sonet.am.widgets.SimulationComponent = Class.extend({
    init: function (simulationConfig) {
        let me = this;
        me.config = simulationConfig;
        me.config.areas = {
            topLeftArea: [],
            topRightArea: [],
            bottomLeftArea: [],
            bottomRightArea: []
        };
        me.config.numOfArtsPerArea = {
            topLeftArtNum: 0,
            topRightArtNum: 0,
            bottomLeftArtNum: 0,
            bottomRightArtNum: 0
        };

        me.config.numOfStepsPerArea = {
            topLeftArtNum: 0,
            topRightArtNum: 0,
            bottomLeftArtNum: 0,
            bottomRightArtNum: 0
        };


        me.config.roomHtml = "";

        me.config.inputSectionHTML = "";

        me.config.runButtonHTML = "";
        me.config.speedBarHTML = ""
        me.config.opterationSectionHTML = "";

        me.config.tableHTML = me.getInitialTable();
        me.config.tableBodyGroup = [];

        me.config.artToBeAddPosition = [];
        me.config.closeIconToBeAddPosition = [];




        me.config.itemID = me.getItemId();

        me.config.visitorSelectID = `#P1M6${me.config.itemID}visitor`;



        me.config.labels = {};

        me.disPlayGroup = {};// add arts to this group
        me.disPlayGroup.arts = [];




        me.registerEvents();




        console.log(me.config)

    },
    registerEvents() {

        let me = this;

      

        me.setLabels();

        if (me.config.room.artPositionEditable)
            me.setArtToBeAddPosition();

        me.setRoomHTML();

        me.setRunButtonHTML();
        me.setSpeedBarHTML();

        me.setOpterationSectionHTML();// run button+ speed bar


        if (me.config.inputSection)
            me.setInputSectionHTML(me.config.inputSection);
        else console.error("set up the inputSection data to have the input section");



        // me.renderRoom(me.config.roomHtml);

        me.renderInitialPage();
        // me.renderLeft();
        // me.renderRight();

        me.setRunButtonEvent();
        me.setAddArtButtonClickedEvent();
        me.setDeletIconClickedEvent();

   


    },
    resetRoomButtonEvents() {
        let me = this;
        me.setDeletIconClickedEvent();
        me.setAddArtButtonClickedEvent();

        $(".p1-m6-art-num").text(me.disPlayGroup.arts.length);

    },
    setAddArtButtonClickedEvent() {
        let me = this;
        $(".p1-m6-art-to-be-placed").on("click", function () {

            let cellIndex = "";
            cellIndex = $(this)[0].dataset.cellIndex;

            me.addArtToDisplayGroup(cellIndex);

            me.setRoomHTML();
            me.renderRoom(me.config.roomHtml);
            // $(".p1-m6-art-num").text(me.disPlayGroup.arts.length);
            // me.setDeletIconClickedEvent();
            // me.setAddArtButtonClickedEvent();

        });
    },
    setDeletIconClickedEvent() {
        let me = this;
        $(".p1-m6-close-icon").click(function () {

            cellIndex = $(this)[0].dataset.cellIndex;
            me.deleteArtFromDisplayGroup(cellIndex);
            me.setRoomHTML();
            me.renderRoom(me.config.roomHtml);
        });
    },

    deleteArtFromDisplayGroup(cellIndex) {

        let me = this;
        let newDisPlaygroup = [];

        newDisPlaygroup = me.disPlayGroup.arts.filter(item => item.closeToBePlaced != cellIndex);

        me.disPlayGroup.arts = newDisPlaygroup;

    },


    addArtToDisplayGroup(artPositionIndex) {
        let me = this;
        let artInformation = me.config.room.possibleArtLocations.filter(item => item.artToBePlaced == artPositionIndex)[0];

        if (me.isArtNotDisplay(artInformation.artToBePlaced)) {
            me.disPlayGroup.arts.push(artInformation);
            // me.setDisplayFeetPosition();
        }

        // console.log(me.disPlayGroup)

    },




    // setDisplayFeetPosition(){
    //     let me= this;
    //     let result="";
    //     console.log(me.disPlayGroup.arts)
    //     result=me.disPlayGroup.arts.map(item=>item.steps);
    // },

    isArtNotDisplay(artIndex) {
        let me = this;
        let resultOfDispaly = me.disPlayGroup.arts.filter(item => item.artToBePlaced == artIndex)
        let resultOfDeleteIcon = me.disPlayGroup.arts.filter(item => item.closeToBePlaced == artIndex)

        return resultOfDispaly.length === 0 && resultOfDeleteIcon.length === 0;
    },

    setArtToBeAddPosition() {
        let me = this;
        console.log(me.config.room.possibleArtLocations)
        if (!Array.isArray(me.config.room.possibleArtLocations)) {
            console.log("possibleArtLocations should be an array of objects");
        }
        else {
            me.config.artToBeAddPosition = me.config.room.possibleArtLocations.map(item => item.artToBePlaced);

            me.config.closeIconToBeAddPosition = me.config.room.possibleArtLocations.map(item => item.closeToBePlaced);
        }
    },

    getInitialTable() {
        return `
        <h2 class="p1-m6-run-hitory-title">Your run history</h2>
        <table class="p1-m6-run-hitory-table">
        <thead>
           <tr>
              <td rowspan="2">Your runs</td>
              <td colspan="2">Input parameters</td>
              <td colspan="3">Simulation results</td>
           </tr>
           <tr>
              <td># of visitor</td>
              <td># of artworks</td>
              <td>Average wait (minutes)</td>
              <td>Average # of artworks viewed</td>
              <td>Average satisfaction (%)</td>
           </tr>
        </thead>

        <tbody class="p1-m6-table-body">
      
        </tbody>
     </table>`;
    },

    setRunButtonEvent() {
        let me = this, visitorNumberSelected = 0, rowHTML = "";

        $(".p1-m6-simulation-run").on("click", () => {
            visitorNumberSelected = $(me.config.visitorSelectID + " option:selected").val() ? Number($(me.config.visitorSelectID + " option:selected").val()) : 0;
            if (visitorNumberSelected > 0) {
                rowHTML = me.getTableRowHTML(visitorNumberSelected);
            }




            if (rowHTML) {
                me.setTableBodyGroup(rowHTML)
                me.renderTableBody();
                rowHTML = "";
                if ($("#task").hasClass("p1-m6-14"))
                    me.visitorViewArts();
            } else { console.log("data set not found in the DB") }

        });

    },
    visitorViewArts() {

        let me = this;
        let visitorNum = 100;
        let basicTime = 1000;
        let entranceIndexes = [210, 209];
        // console.log($("[data-cell-index=210]"))



        setTimeout(function () {

            me.addPeople(me.range(209, 211));
        }, basicTime);

        setTimeout(function () {
            me.addPeople(me.range(190, 193));
            me.addPeople(me.range(173, 176));
            me.addPeople(me.range(153, 158));


        }, basicTime * 2);

        setTimeout(function () {

            me.addPeople(me.range(79, 85));
            me.addPeople(me.range(97, 103));
            me.addPeople(me.range(115, 120));
            me.addPeople(me.range(133, 138));



        }, basicTime * 3);

        setTimeout(function () {



            me.addPeople(me.range(43, 48));
            me.addPeople(me.range(61, 66));





        }, basicTime * 4);

        setTimeout(function () {
            me.removePeople(me.range(209, 211));
            me.removePeople(me.range(190, 193));
            me.removePeople(me.range(173, 176));
            me.removePeople(me.range(153, 158));

            me.addPeople(me.range(150, 153));
            me.addPeople(me.range(168, 171));
        }, basicTime * 5);

        setTimeout(function () {

            me.addPeople(me.range(187, 190));
            me.addPeople(me.range(205, 207));
        }, basicTime * 6);

        setTimeout(function () {

            me.addPeople(me.range(187, 190));
            me.addPeople(me.range(205, 207));

            me.removePeople(me.range(136, 138));
        }, basicTime * 7);

        setTimeout(function () {

            me.removePeople(me.range(118, 120));
            me.removePeople(me.range(101, 103));


        }, basicTime * 8);

        setTimeout(function () {


            me.removePeople(me.range(43, 48));
            me.removePeople(me.range(82, 85));
            me.removePeople(me.range(61, 67));


        }, basicTime * 9);

        setTimeout(function () {


            me.removePeople(me.range(79, 82));
            me.removePeople(me.range(97, 101));
            me.removePeople(me.range(115, 118));


        }, basicTime * 10);

        setTimeout(function () {


            me.removePeople(me.range(1, 234));



        }, basicTime * 11);





    },
    addPeople(...cellIndex) {

        // console.log(cellIndex);
        if (Array.isArray(cellIndex[0])) {

            cellIndex[0].forEach(item => {
                $("[data-cell-index=" + item + "]").addClass("p1-m6-simulation-people")
            });


        } else {
            cellIndex.forEach(item => {
                $("[data-cell-index=" + item + "]").addClass("p1-m6-simulation-people")
            });
        }


    },

    removePeople(...cellIndex) {

        if (Array.isArray(cellIndex[0])) {

            cellIndex[0].forEach(item => {
                $("[data-cell-index=" + item + "]").removeClass("p1-m6-simulation-people")
            });


        } else {
            cellIndex.forEach(item => {
                $("[data-cell-index=" + item + "]").removeClass("p1-m6-simulation-people")
            });
        }


    },

    renderTableBody() {

        let me = this;

        if ($(".p1-m6-table-body").length) {

            $(".p1-m6-table-body").replaceWith(

                `
                <tbody class="p1-m6-table-body">
                    ${me.config.tableBodyGroup.join("")}
                
                </tbody>
                `

            );

        }
    },

    setTableBodyGroup(rowHTML) {
        let me = this;

        me.config.tableBodyGroup.push(rowHTML)


    },

    getTableRowHTML(visitorNum) {
        let me = this, rowHTML = "";
        let artNum = ""

        if (!me.config.room.artPositionEditable)
            artNum = me.config.room.artLocations.length;
        else
            artNum = me.disPlayGroup.arts.length;


        let inputResult = me.config.result.filter(item => item.visitorNum === visitorNum && item.artNum === artNum)[0];


        if (inputResult) {

            if (me.config.tableBodyGroup.length > 4) {
                me.config.tableBodyGroup = [];
            }
            rowHTML = `
            <tr>
                <td>${me.config.tableBodyGroup.length + 1}</td>
                <td>${inputResult.visitorNum}</td>
                <td>${inputResult.artNum}</td>
                <td>${inputResult.waitTime}</td>
                <td>${inputResult.viewedArtNum}</td>
                <td>${inputResult.satisfactionRate}</td>
            </tr>
            `;
        }

        return rowHTML;


    },


    getTableRowHTMLWhenLocationEditable(visitorNum) {
        let me = this, rowHTML = "";
        let artNum = me.disPlayGroup.arts.length;

        let inputResult = me.config.result.filter(item => item.visitorNum === visitorNum && item.artNum === artNum)[0];


        if (inputResult) {

            if (me.config.tableBodyGroup.length > 4) {
                me.config.tableBodyGroup = [];
            }
            rowHTML = `
            <tr>
                <td>${me.config.tableBodyGroup.length + 1}</td>
                <td>${inputResult.visitorNum}</td>
                <td>${inputResult.artNum}</td>
                <td>${inputResult.waitTime}</td>
                <td>${inputResult.viewedArtNum}</td>
                <td>${inputResult.satisfactionRate}</td>
            </tr>
            `;
        }

        return rowHTML;


    },







    getItemId() {
        if ($("#task").hasClass("p1-m6-14"))
            return 14;

    },

    renderLeft() {

        let me = this;
        $(".p1-m6-double-flex-left").append(me.config.inputSectionHTML + me.config.roomHtml + me.config.opterationSectionHTML);

    },

    renderRight() {

        let me = this;
        $(".p1-m6-double-flex-right").append(me.config.tableHTML);

    },



    renderInitialPage() {

        let me = this;
        $(".p1-m6-sinulation-container").append(me.getCombineLeftHTML() + me.getCombineRightHTML());


    },

    getCombineRightHTML() {

        let me = this;
        return `<div class="p1-m6-double-flex-left">` + me.config.tableHTML +
            `</div>`;
    },


    getCombineLeftHTML() {

        let me = this;

        return `<div class="p1-m6-double-flex-left">` + me.config.inputSectionHTML + me.config.roomHtml + me.config.opterationSectionHTML +
            `</div>`;

    },
    setLabels() {

        let me = this;
        if ($("#simulation-run-button-lbl").length)
            me.config.labels.runButton = ('Run program' && $("#simulation-run-button-lbl").html())
        if ($("#simulation-visitor-lbl").length)
            me.config.labels.visitor = ('Visitors(check label):' && $("#simulation-visitor-lbl").html())
        if ($("#simulation-art-number-lbl").length)
            me.config.labels.artNumber = ('Number of artworks:' && $("#simulation-art-number-lbl").html())
        if ($("#simulation-slow-lbl").length)
            me.config.labels.slow = ('Slow' && $("#simulation-slow-lbl").html())
        if ($("#simulation-fast-lbl").length)
            me.config.labels.fast = ('Fast' && $("#simulation-fast-lbl").html())
        if ($("#simulation-run-button-lbl").length)
            me.config.labels.runButtonText = ('Run program' && $("#simulation-run-button-lbl").html())

        if ($("#simulation-your-runs-table-lbl").length)
            me.config.labels.runButtonText = ('Your runs ' && $("#simulation-your-runs-table-lbl").html())

        me.config.labels.yourRuns = me.getLabelText("simulation-your-runs-table-lbl", "Your runs ");

        me.config.labels.inputParameters = me.getLabelText("simulation-input-parameters-table-lbl", "Input parameters ");

        me.config.labels.simulationResult = me.getLabelText("simulation-simulation-result-table-lbl", "Simulation results");

        me.config.labels.numOfVisitors = me.getLabelText("simulation-num-of-visitor-table-lbl", "# of visitors");

        me.config.labels.numOfArts = me.getLabelText("simulation-num-of-art-works-table-lbl", "# of artworks");

        me.config.labels.waitTime = me.getLabelText("simulation-wait-minutes-table-lbl", "Average wait (minutes)");

        me.config.labels.artViewed = me.getLabelText("simulation-art-viewed-table-lbl", "Average # of artworks viewed");

        me.config.labels.satification = me.getLabelText("simulation-satification-table-lbl", "Average satisfaction (%) ");

        me.config.labels.tableTItle = me.getLabelText("simulation-title-table-lbl", "Your run history ");

        console.log({ labels: me.config.labels })

    },

    getLabelText(labelId, defaultText) {
        if ($("#" + labelId).length)
            return (defaultText && $("#" + labelId).html());
        else return defaultText;
    },

    setInputSectionHTML(inputConfig) {
        let me = this, inputSectionContent = "";


        // visitorsHTML=me.getSlectOrText("visitorConfig",inputConfig.visitors);




        for (let name in inputConfig) {
            // console.log(name, inputConfig[name])
            inputSectionContent += me.getSlectOrText(name, inputConfig[name]);
        }

        me.config.inputSectionHTML = `<div class="p1-m6-input-section">` + inputSectionContent + `</div>`;


    },

    getSlectOrText(configToGet, config) {
        let me = this;
        let selectOrDiv = "";

        if (configToGet === "visitors") {

            let optionsHtml = "";

            optionsHtml = config.editable ?

                `<select id="P1M6${me.config.itemID}visitor" class="p1-m6-run-button likert-group" data-save="true">
            <option value="" selected="selected" data-am-likert-option-incomplete="true"></option>`
                +
                (config.numbers.map(value => `<option value='${value}'>${value}</option>`)).join("")
                + `</select>`

                : `<div class="p1-m6-lable-visitor">${config.numbers[0]}</div>`;

            selectOrDiv =
                `<div class="p1-m6-lable-visitor">${me.config.labels.visitor}</div>                 
                ${optionsHtml}
            `;

        }

        if (configToGet === "arts") {


            let optionsHtml = "";


            if (!config.editable) {

                optionsHtml = `<div class="p1-m6-label-art-num">${config.numbers[0]}</div>`;

                selectOrDiv =
                    `<div class="p1-m6-label-art-num">${me.config.labels.artNumber}</div>                 
                ${optionsHtml}
                `;
            }
            else {
                optionsHtml = `<div class="p1-m6-art-num">${me.disPlayGroup.arts.length}</div>`;

                selectOrDiv =
                    `<div class="p1-m6-label-art-num">${me.config.labels.artNumber}</div>                 
                ${optionsHtml}
                `;
            }

        }




        return selectOrDiv



    },

    setOpterationSectionHTML() {

        let me = this;

        me.config.opterationSectionHTML =
            `<div class="p1-m6-operation-group">

            ${me.config.runButtonHTML}

            ${me.config.speedBarHTML}

        </div>`;




    },

    isTheCellHasArtWork(cellIndex) {
        // console.log(cellIndex)
        let me = this;
        return me.config.room.artLocations.indexOf(cellIndex) > -1;
    },

    isTheCellHasFeet(cellIndex) {
        // console.log(cellIndex)
        let me = this;
        return me.config.room.steplocations.indexOf(cellIndex) > -1;
    },

    isCellHasArtToBePlace(cellIndex) {
        let me = this;

        return me.config.artToBeAddPosition.indexOf(cellIndex) > -1;


        // console.log(me.config.room.artLocations);
    },
    isCellHasCloseIconToBePlace(cellIndex) {
        let me = this;
        return me.config.closeIconToBeAddPosition.indexOf(cellIndex) > -1;
    },

    isCellHasDisplaySteps(cellIndex) {
        let me = this;
        let stepArray = [];

        me.disPlayGroup.arts.forEach(item => {
            stepArray = stepArray.concat(item.steps);
        });

        return stepArray.indexOf(cellIndex) > -1;

    },







    setRunButtonHTML() {
        let me = this;

        me.config.runButtonHTML = `<button class="p1-m6-simulation-run">&#9658; ${me.config.labels.runButtonText}</button>`;

    },

    setSpeedBarHTML() {
        let me = this;
        me.config.speedBarHTML =
            `<div class="p1-m6-speed-bar-group">
                <input class="p1-m6-speed-bar" type="range" min="1" max="100" value="50">
                <div class="p1-m6-speed-bar-text p1-m6-speed-bar-text-slow">${me.config.labels.slow}</div>
                <div class="p1-m6-speed-bar-text p1-m6-speed-bar-text-fast">${me.config.labels.fast}</div>
            </div>`;
    },

    renderRoom(roomHtml) {
        let me = this;
        $(".g-grid-container").replaceWith(roomHtml);
        me.resetRoomButtonEvents();

    },

    setRoomHTML() {
        let me = this, cellsHTML = "";


        try {

            for (let i = 1; i <= me.config.room.rowNumber; i++) {

                for (let j = 1; j <= me.config.room.columnNumber; j++) {

                    cellsHTML += me.fillCellWithItem(i, j);
                }

            }
        }
        catch (error) {

            console.error(error.message);
        }





        // if (me.config.room&&me.config.room.rowNumber&&me.config.room.columnNumber) {


        // }



        cellsHTML += ` <i class="fas fa-arrow-up g-rtl-left-pos p1-m6-enter-arrow"></i>
        <i class="fas fa-arrow-down p1-m6-exit-arrow g-rtl-left-pos"></i>`;

        me.config.roomHtml =

            `<div class='g-grid-container g-grid-block-x-small'>` +
            cellsHTML + `</div>`;

        // console.log(me.config.roomHtml)

    },
    isItemInArray(array, item) {
        for (var i = 0; i < array.length; i++) {
            // This if statement depends on the format of your array
            if (array[i][0] == item[0] && array[i][1] == item[1]) {
                return true;   // Found it
            }
        }
        return false;   // Not found
    },
    getCellIndexNumber(i, j) {
        let me = this;
        return (i - 1) * me.config.room.columnNumber + j
    },

    allocatAreaAndGetAreaCode(yIndex, xJndex, cellIndex) {
        let me = this;

        if (xJndex <= 9 && yIndex <= 6 && !me.isTheCellTakenByArtsAndStep(cellIndex, "topLeft")) {
            me.config.areas.topLeftArea.push(cellIndex);
            return "topLeft";
        }

        if (xJndex > 9 && yIndex <= 6 && !me.isTheCellTakenByArtsAndStep(cellIndex, "topRight")) {
            me.config.areas.topRightArea.push(cellIndex);
            return "topRight";
        }

        if (xJndex <= 9 && yIndex > 6 & yIndex != 13 && !me.isTheCellTakenByArtsAndStep(cellIndex, "bottomLeft")) {
            me.config.areas.bottomLeftArea.push(cellIndex);
            return "bottomLeft";
        }

        if (xJndex > 9 && yIndex > 6 & yIndex != 13 && !me.isTheCellTakenByArtsAndStep(cellIndex, "bottomRight")) {
            me.config.areas.bottomRightArea.push(cellIndex);
            return "bottomRight";
        }
    },
    fillCellWithItem(yIndex, xJndex) {
        let me = this,
            cellIndex = me.getCellIndexNumber(yIndex, xJndex),
            cellColor = "",
            shoesPointTo = "",
            wallPosition = "",
            eventTrigerClassName = "",
            areaCode = me.allocatAreaAndGetAreaCode(yIndex, xJndex, cellIndex);




        let fillItem = '';



        let fillCellWithArtToBePlace = () => {
            eventTrigerClassName = "p1-m6-add-art-button p1-m6-art-to-be-placed";
            cellColor = "-white";
            fillItem = `<i class="fas fa-plus p1-m6-fill p1-m6-plus"></i>`;
        }

        let fillCellWithCloseIconToBePlace = () => {
            eventTrigerClassName = "p1-m6-add-art-button p1-m6-close-icon-to-be-placed";

            cellColor = "-white";
        }


        let fillCellWithArt = () => {
            cellColor = "-grey";
            fillItem = `<i class="fas fa-star p1-m6-art p1-m6-fill"></i>`;
        };

        let fillCellWithDeleIcon = () => {
            eventTrigerClassName = "p1-m6-close-icon";
            cellColor = "";
            fillItem = `<i class="fas fa-minus-circle p1-m6-delete-icon p1-m6-fill"></i>`;
        };

        let fillCellWithFeet = () => {
            cellColor = "-yellow";

            // start check the direction shoes should point to

            if (yIndex === 2)
                shoesPointTo = "p1-m6-point-to-up";

            if (yIndex === 11 && xJndex !== 2 && xJndex !== 17)
                shoesPointTo = "p1-m6-point-to-down";

            if (xJndex === 2 & yIndex !== 2)
                shoesPointTo = "p1-m6-point-to-left";


            // end check the direction shoes should point to
            fillItem = `<i class="fas fa-shoe-prints p1-m6-step p1-m6-fill ${shoesPointTo}"></i>`;

        };

        // fillItem = cellIndex; // should be empty for product env uncomment for debugging
        let isPeopleInCell = "";

        wallPosition = me.drawWalls(yIndex, xJndex, cellIndex);

        // isPeopleInCell = me.setPeopleInCell(cellIndex) ? "p1-m6-simulation-people " : "";


        if (!me.config.room.artPositionEditable) {

            if (me.isTheCellHasArtWork(cellIndex))
                fillCellWithArt();

            if (me.isTheCellHasFeet(cellIndex))
                fillCellWithFeet();

        }
        else {

            if (me.isArtNotDisplay(cellIndex)) {

                if (me.isCellHasArtToBePlace(cellIndex)) {
                    fillCellWithArtToBePlace();
                }

                if (me.isCellHasCloseIconToBePlace(cellIndex)) {
                    fillCellWithCloseIconToBePlace();
                }

                if (me.disPlayGroup.arts !== [] && me.isCellHasDisplaySteps(cellIndex)) {

                    fillCellWithFeet();

                }
            }

            else {

                if (me.isCellHasArtToBePlace(cellIndex)) {
                    fillCellWithArt();
                }

                if (me.isCellHasCloseIconToBePlace(cellIndex)) {
                    fillCellWithDeleIcon();

                }

            }


        }

        return `<div class='g-grid-block${cellColor} ${wallPosition} ${isPeopleInCell} ${eventTrigerClassName}' data-x="${xJndex}" data-y="${yIndex}" data-cell-index="${cellIndex}" ${areaCode ? 'data-area=' + areaCode : ''}> ${fillItem} </div>`

    },



    setPeopleInCell(cellIndex) {
        let testingLocation = [209, 191, 174, 155, 169, 171, 43, 48, 66, 64, 83, 205, 207];
        if (testingLocation.indexOf(cellIndex) > -1) {
            return true;
        }
    },

    drawWalls(yIndex, xJndex, cellIndex) {
        let me = this, wallPosition = "";
        if ($("#task").hasClass("p1-m6-14")) {
            //draw P1-M6-14 wall
            wallPosition += xJndex === 1 ? "p1-m6-left-wall " : "";
            wallPosition += yIndex === 1 ? "p1-m6-top-wall " : "";
            wallPosition += xJndex === me.config.room.columnNumber ? "p1-m6-right-wall " : "";

            wallPosition += cellIndex === 207 || cellIndex === 189 || cellIndex === 171 ? "p1-m6-right-wall " : "";

            wallPosition += yIndex === me.config.room.rowNumber && xJndex != 7 && xJndex != 8 && xJndex != 11 && xJndex != 12 ? "p1-m6-top-wall " : "";

        }

        if ($("#task").hasClass("p1-m6-16")) {
            //draw P1-M6-14 wall
            wallPosition += xJndex === 1 ? "p1-m6-left-wall " : "";
            wallPosition += yIndex === 1 ? "p1-m6-top-wall " : "";
            wallPosition += xJndex === me.config.room.columnNumber ? "p1-m6-right-wall " : "";

            wallPosition += cellIndex === 207 || cellIndex === 189 || cellIndex === 171 ? "p1-m6-right-wall " : "";

            wallPosition += yIndex === me.config.room.rowNumber && xJndex != 7 && xJndex != 8 && xJndex != 11 && xJndex != 12 ? "p1-m6-top-wall " : "";

        }
        return wallPosition;
    },
    isTheCellTakenByArtsAndStep(cellIndex, area) {
        let me = this;
        // console.log({ cellIndex })
        if (!me.config.room.artPositionEditable) {
            if (me.config.room.artLocations.indexOf(cellIndex) > -1) {
                switch (area) {
                    case "topLeft": me.config.numOfArtsPerArea.topLeftArtNum++;
                        break;
                    case "topRight": me.config.numOfArtsPerArea.topRightArtNum++;
                        break;
                    case "bottomLeft": me.config.numOfArtsPerArea.bottomLeftArtNum++;
                        break;
                    case "bottomRight": me.config.numOfArtsPerArea.bottomRightArtNum++;
                        break;
                }
                return true
            }
            if (me.config.room.steplocations.indexOf(cellIndex) > -1) {
                switch (area) {
                    case "topLeft": me.config.numOfStepsPerArea.topLeftArtNum++;
                        break;
                    case "topRight": me.config.numOfStepsPerArea.topRightArtNum++;
                        break;
                    case "bottomLeft": me.config.numOfStepsPerArea.bottomLeftArtNum++;
                        break;
                    case "bottomRight": me.config.numOfStepsPerArea.bottomRightArtNum++;
                        break;
                }
                return true
            }
        }

        return false;

    },
    range(start, stop, step) {//work as range(start, stop, step)  in Python 
        if (typeof stop == 'undefined') {
            // one param defined
            stop = start;
            start = 0;
        }

        if (typeof step == 'undefined') {
            step = 1;
        }

        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }

        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }

        return result;
    },



});

