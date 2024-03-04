//Modell
let app = document.getElementById('app');
let html = ``;

let selectedLampIndex = 0;

let firstClick = true;
let startTime = 0;
let finishTime = 0;
let spentSeconds = 0;

//View
randomizeLampIndex();

function updateView() {
    let html = /*HTML*/ `
    
    <div class="center">
        <div id="LampGrid">${createCirclesHtml()}</div>    
        <div class="timertext">Dette er din rekasjons tid: <br> ${spentSeconds} sek</div>    
    <div>
    `;
    app.innerHTML = html;
    turnOnSelectedLamp();
}

function turnOnSelectedLamp() {
    document.getElementById('lamp' + selectedLampIndex).classList.add('lightOn');
    document.getElementById('lamp' + selectedLampIndex).onclick = function () { reactionTimeTimer(); randomizeLampIndex(); };
}

function createCirclesHtml() {
    let html = ``;
    for (let counter = 1; counter <= 25; counter++) {
        html += /*HTML*/ `

        <div id="lamp${counter}" class="lamp"></div>

        `;
    }
    return html;
}


//Controller
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

    updateView();
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
