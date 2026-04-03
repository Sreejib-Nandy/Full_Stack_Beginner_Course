const randomNumber = Math.floor(Math.random() * 100) + 1;
let num = 0

function clickme() {
    const userguess = Number(document.querySelector('#userGuess').value)
    const resultmessage = document.querySelector('#resultMessage')
    const resultattempt = document.querySelector('#resultAttempt')
    if(userguess < 1 || userguess > 100) {
        resultmessage.innerText = 'Please enter a number between 1 and 100';
        resultmessage.style.color = 'orange'
        num = num + 1;
    } else if(userguess === randomNumber) {
        num = num + 1;
        resultmessage.innerText = 'Congratulations!, you guessed the number';
        resultattempt.innerText = `Your Total Attempts : ${num}`
        resultmessage.style.color = 'green'
        resultattempt.style.color = 'deeppink'
    } else if(userguess > randomNumber) {
        resultmessage.innerText = 'Too high, Try again';
        resultmessage.style.color = 'red'
        num = num + 1;
    } else {
        resultmessage.innerText = 'Too low, Try again';
        resultmessage.style.color = 'red'
        num = num + 1;
    }
}