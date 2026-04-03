const gameArea = document.getElementById("gameArea");
let gameOver = false;
let score = 0;

function createObject(){
    const obj=document.createElement("div");  
    obj.classList.add("object");
    // obj.style.left="400px";
    obj.style.left=Math.random()*(gameArea.clientWidth-40)+"px";
    obj.style.top="0px";
    gameArea.appendChild(obj);
    moveObject(obj);
}

function updateScore() {
    if(gameOver) {
        return;
    }
    document.getElementById('score').innerText = `Score : ${score}`;
    if(score < 0) {
        gameOver = true;
        document.getElementById('score').innerText = "Game Over!";
    }
}

function moveObject(obj) {
    let pos = 0;
    const interval = setInterval(() => {
        if(pos >= gameArea.clientHeight - 40 || gameOver) {
            // not to move 
            // clear the interval
            clearInterval(interval);
            gameArea.removeChild(obj);
            obj.remove();
            score--;
            updateScore();
        } else {
            pos += 10;
            obj.style.top = pos + 'px';
        }
    }, 200)
}
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('object') && !gameOver) {
        score++;
        updateScore();
        gameArea.removeChild(e.target);
        e.target.remove();
    }
})

const producer = setInterval(() => {
    if(!gameOver) {
        createObject();
    } else {
        clearInterval(producer)
    }
}, 900)

