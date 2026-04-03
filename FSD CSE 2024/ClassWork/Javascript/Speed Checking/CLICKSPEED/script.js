let clickCount = 0;
let timeLimit = 5; // time limit in seconds
let timer;
const startBtn = document.querySelector('#start-btn');
const clickBtn = document.getElementById('click-btn');
const clickCountDisplay = document.getElementById('click-count');
const resultDisplay = document.getElementById('result');

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
    startBtn.disabled = false; //enabling start button for next test
    resultDisplay.textContent=`Time's up! You clicked ${clickCount} times in ${timeLimit} seconds. Your CPS (Clicks Per Second) is ${(clickCount/timeLimit).toFixed(2)}.`;
}

clickBtn.addEventListener('click', ()=>{
    clickCount++;
    clickCountDisplay.textContent=clickCount;
});