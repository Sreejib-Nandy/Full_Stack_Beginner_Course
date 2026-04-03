let score = 0;

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('object')) {
        score++;
        e.target.remove();
        updateScore();
    }
}) // anonymous function

function updateScore() {
    document.getElementById('score').innerText = `Score : ${score}`; //string interpolation
}

//1. Add event listener to document for 'click' events
//2. anonymous function
//3. Lambda style
//4. String interpolation using backticks ``