let clickCount = 0;
let timer;
let timeLimit;
const usertime = document.querySelector("#usertime");
const timeBtn = document.querySelector("#time-btn");
const message = document.querySelector("#message");
const startBtn = document.querySelector('#start-btn');
const clickBtn = document.getElementById('click-btn');
const clickCountDisplay = document.getElementById('click-count');
const resultDisplay = document.getElementById('result');

startBtn.disabled = true;

timeBtn.addEventListener("click", () => {
    timeInput = usertime.value;
    if(timeInput === "") {
        startBtn.disabled = true;
        message.innerText = "Please enter the time for checking click speed";
        message.style.color = "red";
    } else {
        startBtn.disabled = false;
        timeLimit = timeInput;
        message.innerText = `Click the button as many times as you can in ${timeInput} seconds!`;
        message.style.color = "black";
        usertime.value = "";
        usertime.disabled = true;
        timeBtn.disabled = true;
        clickCountDisplay.textContent = 0;
        resultDisplay.textContent = '';
    }
})

clickBtn.disabled=true;
startBtn.addEventListener('click', ()=>{
    clickCount = 0; //resetting the click count on every start
    clickCountDisplay.textContent = clickCount; //updating the display
    resultDisplay.textContent = ''; //clearing previous result
    startBtn.disabled = true; //disabling start button during the test
    clickBtn.disabled = false; //enabling click button during the test
    timer=setTimeout(endTest, timeLimit*1000);
});

function endTest(){
    clickBtn.disabled = true; //disabling click button after the test
    usertime.disabled = false; //enabling start button for next test
    timeBtn.disabled = false;
    resultDisplay.textContent=`Time's up! You clicked ${clickCount} times in ${timeLimit} seconds. Your CPS (Clicks Per Second) is ${(clickCount/timeLimit).toFixed(2)}.`;
    message.innerText = "";
}

clickBtn.addEventListener('click', ()=>{
    clickCount++;
    clickCountDisplay.textContent=clickCount;
});