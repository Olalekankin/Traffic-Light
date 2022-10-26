// selecting all the variable
const  standOneTimer = document.querySelector("#stand-one")
const  firstRed = document.querySelector(".first-red");
const  firstYellow = document.querySelector(".first-yellow");
const  firstGreen = document.querySelector(".first-green");


const  standTwoTimer = document.querySelector("#stand-two")
const  secondRed = document.querySelector(".second-red");
const  secondYellow = document.querySelector(".second-yellow");
const  secondGreen = document.querySelector(".second-green");

const  standThreeTimer = document.querySelector("#stand-three")
const  thirdRed = document.querySelector(".third-red");
const  thirdYellow = document.querySelector(".third-yellow");
const  thirdGreen = document.querySelector(".third-green");

let Go = false;
const multiplier = 60;
let goRandom= Math.random();
let stopRandom = Math.random();
let stopTime = multiplier * stopRandom +3;
let startTime = multiplier * goRandom ;
 
console.log(startTime)
console.log(stopTime)


function mainControlBox(){
    timerOne();
    TimerTwo();
}setInterval(mainControlBox, 1000);

function timerOne(){
    let seconds = Math.floor(startTime);
    standOneTimer.innerHTML = seconds;
    standOneTimer.style.color = "green";
    firstGreen.style.background = `var(--green-light)`
    startTime--;
    
    
    if(seconds < 10){
        standOneTimer.innerHTML = "0" + seconds;
    }
    if(seconds < 10){
        firstGreen.style.background = `var(--off-light)`
        firstYellow.style.background = `var(--yellow-light)`
    }

    if (seconds == 0 ){
        startTime = "00"
        standOneTimer.innerHTML = '00';
        standOneTimer.style.color = "red";
        firstRed.style.background = `var(--red-light)`;
        firstYellow.style.background = `var(--off-light)`;   
    };
    
}

function TimerTwo(){
    let timerTwo = Math.floor(stopTime);
    standTwoTimer.innerHTML = timerTwo;
    secondRed.style.background = `var(--red-light)`
    standTwoTimer.style.color = 'red'
    stopTime--;

    if(timerTwo < 10){
        standTwoTimer.innerHTML = "0" + timerTwo;
    }

    if(timerTwo < 10){
        secondRed.style.background = `var(--off-light)`;
        secondYellow.style.background = `var(--yellow-light)`
        standTwoTimer.style.color = 'yellow'
    }

    if(timerTwo == 0){
        standTwoTimer.innerHTML = '00';

    }
}






