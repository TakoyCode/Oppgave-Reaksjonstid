//Modell
let app = document.getElementById('app');
let html = ``;

let selectedLampIndex = 0;
let firstClick = true;
let startTime = 0;
let finishTime = 0;
let spentSeconds = 0;

//View
/* console.log(selectedLampIndex); */

randomizeLampIndex();
function updateView() {
    let html = /*HTML*/ `
    
    <div class="center">
        <div id="LampGrid"></div>    
        <div class="timertext">Dette er din rekasjons tid: <br> ${spentSeconds} sek</div>    
    <div>
    `;
    app.innerHTML = html;
    createCirclesHtml();
    turnOnSelectedLamp();
}


//Controller
function lampOnclickHodler() {
    reactionTimeTimer();
    randomizeLampIndex();
}

function reactionTimeTimer() {
    if (firstClick == true) {
        startTime = new Date().getTime();
        console.log(startTime, "<-- starttime i ms");

    }
    else {
        finishTime = new Date().getTime();
        let spentMilliseconds = Math.floor(finishTime - startTime);
        spentSeconds = spentMilliseconds / 1000;

        console.log(finishTime, "<-- finishTime i ms");
        console.log(spentSeconds, "<-- spentSeconds");

        finishTime = 0;
        startTime = 0;
    }
    firstClick = !firstClick;
    console.log(firstClick, "<-- firstClick");
}


function randomizeLampIndex() {
    let min = Math.ceil(1);
    let max = Math.floor(26);
    let lastSelectedLamp = selectedLampIndex;

    while (lastSelectedLamp == selectedLampIndex) {
        selectedLampIndex = Math.floor(Math.random() * (max - min) + min);
    }
    updateView();
}


function createCirclesHtml() {
    for (let counter = 1; counter <= 25; counter++) {
        document.getElementById('LampGrid').innerHTML += /*HTML*/ `

        <div id="lamp${counter}" class="lamp"></div>

        `;
    }
}

function turnOnSelectedLamp() {
    document.getElementById('lamp' + selectedLampIndex).classList.add('lightOn');
    document.getElementById('lamp' + selectedLampIndex).onclick = function () { lampOnclickHodler() };
}