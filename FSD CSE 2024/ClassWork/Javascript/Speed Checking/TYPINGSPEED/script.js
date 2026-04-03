const text="The quick brown fox jumps over the lazy dog.";
document.getElementById("textToType").textContent = text;
const userInput=document.getElementById("userInput");
const button = document.getElementsByTagName("button")[0];
const result=document.getElementById("result");

let startTime;
function startTest(){
    //UI enable disable portion
    button.disabled=true;

    //UI reset portion
    userInput.value="";
    result.textContent="";

    //Actual work of the startTest
    startTime= new Date().getTime();
    userInput.addEventListener('input',onInput);
}

function onInput(){
    const currentTime=new Date().getTime(); 
    const timeTaken=(currentTime - startTime)/1000; // in seconds
    if(userInput.value===text){
        const wordsTyped=text.split(" ").length;
        const wpm=(wordsTyped / timeTaken) * 60;
        result.textContent=`Congratulations! Your typing speed is ${wpm.toFixed(2)} WPM.`;
        button.disabled=false;
    }  
}
