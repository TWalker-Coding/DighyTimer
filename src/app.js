var UI = require('ui');
var wind = new UI.Window();
var Vector2 = require('vector2');
var secsLeft = 180;
var Vibe = require('ui/vibe');
var startEd = 0;
var count;
var textfield2;
var minutes = 3;
var seconds = 0;
wind.show();

function update() {
    wind.remove(textfield2);
    textfield2 = new UI.Text({
        position: new Vector2(0, 60),
        size: new Vector2(144, 30),
        font: 'RESOURCE_ID_BITHAM_30_BLACK',
        text: String(minutes)+":"+String(seconds),
        textAlign: 'center'
    });
    wind.add(textfield2);
    wind.show();
}

wind.on('click', 'select', function () {
    if (startEd === 0) {
        startEd++;
        count = setInterval(timer, 1000);
        console.log("Started Time");
    } else {
        console.log("Deflected!");
    }
});

wind.on('click', 'up', function () {
    if (startEd === 1) {
        secsLeft = secsLeft + 1;
        seconds = seconds + 1;
        console.log("Added a Second");
        update();
    } else {
        console.log("Deflected!");
    }
});

wind.on('click', 'down', function () {
    if (startEd === 1) {
        secsLeft = secsLeft - 1;
        seconds = seconds - 1;
        console.log("Subtracted a Second");
        update();
    } else {
        console.log("Deflected!");
    }
});

function clear(){
clearInterval(count);
console.log("Timer Stopped!");
}

function timer() {
    secsLeft = secsLeft - 1;
    minutes = Math.floor(secsLeft / 60);  
    seconds = secsLeft - minutes * 60;   
    viber();
    update();
    //console.log(secsLeft + " " + minutes + " " + seconds);
}

function viber() {
    //If timeleft = 2 mins
    if (secsLeft == 120) {
        Vibe.vibrate('short');
    }
    //if timeleft = 1:30 mins
    if (secsLeft == 90) {
        Vibe.vibrate('short');
    }
    //if timeleft = 1 mina
    if (secsLeft == 60) {
        Vibe.vibrate('short');
    }
    //if time = 30s
    if (secsLeft == 30) {
        Vibe.vibrate('short');
    }
    //10 second countdown
    if (secsLeft == 10) {
        Vibe.vibrate('short');
    }
    if (secsLeft == 9) {
        Vibe.vibrate('short');
    }
    if (secsLeft == 8) {
        Vibe.vibrate('short');
    }
    if (secsLeft == 7) {
        Vibe.vibrate('short');
    }
    if (secsLeft == 6) {
        Vibe.vibrate('short');
    }
    if (secsLeft == 5) {
        Vibe.vibrate('short');
    }
    if (secsLeft == 4) {
        Vibe.vibrate('short');
    }
    if (secsLeft == 3) {
        Vibe.vibrate('short');
    }
    if (secsLeft == 2) {
        Vibe.vibrate('short');
    }
    if (secsLeft == 1) {
        Vibe.vibrate('short');
    }
    if (secsLeft === 0) {
        Vibe.vibrate('double');
    clear();
    }
}
var textfield = new UI.Text({
    position: new Vector2(0, 5),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Time till Start:',
    textAlign: 'center'
});
var textfield2 = new UI.Text({
    position: new Vector2(0, 60),
    size: new Vector2(144, 30),
    font: 'RESOURCE_ID_BITHAM_30_BLACK',
    text: "3:00",
    textAlign: 'center'
});
wind.add(textfield);
wind.add(textfield2);
wind.show();




var x = 3;
var cow = x + "";
console.log(cow.length);
