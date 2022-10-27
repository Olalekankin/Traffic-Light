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


const trafficFlowGo = [60, 78, 70, 25, 42, 39, 50, 40, 64, 58, 43, 71, 29, 44, 66, 53, 32, 69,80]
const trafficFlowStop = [25, 29, 32, 39, 40, 42, 43, 44, 50, 53, 58, 60, 64, 66, 69, 70, 71, 78, 80]

function startRandom(){
    return Math.floor(Math.random() * trafficFlowGo.length)
}
function stopRandom(){
    return Math.floor(Math.random() * trafficFlowStop.length)
}

let startTime = trafficFlowGo[startRandom()]
let startTime1 = trafficFlowGo[startRandom()]
let stopTime = trafficFlowGo[startRandom()]
let stopTime1 = trafficFlowGo[startRandom()]

let stopMoving = false;
let startMoving = false;
let seconds = startTime
let minute = startTime1
let reader = stopTime
let reader1 = stopTime1

function mainControlBox(){
    trafficStand1();
    trafficStand2();
}setInterval(mainControlBox, 1000);

function trafficStand1(){

    function greenLight(){
        if(stopMoving== false){
            let seconds = startTime;
            standOneTimer.innerHTML = seconds;
            standOneTimer.style.color = "green";
            firstGreen.style.background = `var(--green-light)`
            thirdGreen.style.background = `var(--green-light)`;
            standThreeTimer.style.color = 'green';
            startTime--;
        
        
            if(seconds < 10){
                standOneTimer.innerHTML = "0" + seconds;
                firstGreen.style.background = `var(--off-light)`
                firstYellow.style.background = `var(--yellow-light)`
                standOneTimer.style.color = 'yellow'
                standThreeTimer.style.color = 'yellow';
                thirdGreen.style.background =`var(--off-light)`
                thirdYellow.style.background =`var(--yellow-light)`
            }
            
    
            if (seconds == 0 ){
                startTime = startTime1
                stopMoving = true; 
                thirdYellow.style.background = `var(--off-light)`;
                thirdRed.style.background = `var(--red-light)`;
                standThreeTimer.innerHTML = `<i class="fa-solid fa-hand"></i>`;
                standThreeTimer.style.color = 'red';
            };
        }
       

} greenLight();

    

    function redLight(){
        if (stopMoving == true){
            let minute = startTime1;
            standOneTimer.innerHTML = minute;
            standOneTimer.style.color = "red";
            firstRed.style.background = `var(--red-light)`;
            firstYellow.style.background = `var(--off-light)`;
            startTime1--;

            if(minute < 10){
                standOneTimer.innerHTML = "0" + minute;
                firstRed.style.background = `var(--off-light)`;
                firstYellow.style.background = `var(--yellow-light)`
                standOneTimer.style.color = 'yellow'
                thirdYellow.style.background = `var(--yellow-light)`
                thirdRed.style.background = 'var(--off-light)'
                standThreeTimer.style.color = 'yellow';
            }

            if (minute == 0){
                stopMoving = false;
                startTime1 = startTime
                thirdGreen.style.background = `var(--green-light)`;
                standThreeTimer.innerHTML = `<i class="fa-solid fa-person-walking"></i>`;
                standThreeTimer.style.color = 'green';
                firstYellow.style.background = `var(--off-light)`;
                standThreeTimer.style.color = 'green';
                thirdYellow.style.background = `var(--off-light)`
            }
        }    
    }
    redLight();
    
}






function trafficStand2(){

    function redLight2(){
        if(startMoving == false){
            let reader = stopTime;
            standTwoTimer.innerHTML = reader;
            secondRed.style.background = `var(--red-light)`
            standTwoTimer.style.color = 'red'
            stopTime--;

            if(reader < 10){
                secondRed.style.background = `var(--off-light)`;
                secondYellow.style.background = `var(--yellow-light)`;
                standTwoTimer.style.color = 'yellow';
                standTwoTimer.innerHTML = "0" + reader;
            }
            
            if(reader == 0){
                stopTime = stopTime1;
                // standTwoTimer.innerHTML = stopTime1;
                secondGreen.style.background = `var(--green-light)`;
                secondYellow.style.background = `var(--off-light)`;
                standTwoTimer.style.color = 'green';
                startMoving = true;

            }
        }
    }
    redLight2();

    function greenLight2(){
        if(startMoving ==true){
            let reader1 = stopTime1;
            standTwoTimer.innerHTML = reader1;
            secondGreen.style.background = `var(--green-light)`
            standTwoTimer.style.color = 'green'
            stopTime1--;

            if(reader1 < 10){
                secondGreen.style.background = `var(--off-light)`;
                secondYellow.style.background = `var(--yellow-light)`;
                standTwoTimer.style.color = 'yellow';
                standTwoTimer.innerHTML = "0" + reader1;
            }
            
            if(reader1 == 0){
                stopTime1 = stopTime;
                standTwoTimer.innerHTML = stopTime;
                secondRed.style.background = `var(--red-light)`;
                secondYellow.style.background = `var(--off-light)`;
                standTwoTimer.style.color = 'red';
                startMoving = false

            }
        }
    }
    greenLight2();
   
    
}
