let boardValues = Array(9).fill(' ');
let cellValues = [];
let currentPlayer = 'X';
let computerCount = 0;
let UserCount = 0;

const boardElement = document.getElementById('board');
for (let i = 0; i < 9; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    cell.addEventListener('click', () => playerMove(i));
    boardElement.appendChild(cell);
    cellValues.push(cell);
}

updateBoard();

function updateBoard(){
    for(let i=0; i<cellValues.length;i++){
        cellValues[i].textContent=boardValues[i];
    }
}

function playerMove(index){
    if(boardValues[index]===' '){
        boardValues[index]='X';
        updateBoard();
        UserCount++;
        let message = `You win in ${UserCount} moves`;
        if (checkWinner('X')) endGame(message);
        else if(isDraw()) endGame("Draw!");
        else computerMove();
    }
}

function computerMove(){
    let move= findBestMove();
    boardValues[move]='O';
    updateBoard();
    computerCount++;
    let message = `Computer wins in ${computerCount} moves`;
    if (checkWinner('O')) endGame(message);
    else if(isDraw()) endGame("Draw!");
}

function findBestMove(){
    for(i=0;i<9;i++){
        if(boardValues[i]==' ' && canWin(i,'O')) return i;
    }
    for(i=0;i<9;i++){
        if(boardValues[i]==' ' && canWin(i,'X')) return i;
    }
    if(boardValues[4]==' ') return 4;
    return [0,2,6,8].find(i=>boardValues[i]===' ') || boardValues.findIndex(c=>c===' ');
}

function canWin(index, player){
    boardValues[index]=player;
    let win=checkWinner(player);
    boardValues[index]=' ';
    return win
}
function checkWinner(player) {
    var wins = [[0,1,2],[3,4,5],[6,7,8],
                [0,3,6],[1,4,7],[2,5,8],
                [0,4,8],[2,4,6]];
    for (var j=0;j<wins.length; j++){
        var combo=wins[j];
        var isWinning=true;

        for (var i=0;i<combo.length;i++){
            if(boardValues[combo[i]]!==player){
                isWinning=false;
                break;
            }
        }
        if(isWinning){
            return true;
        }
    }
    return false;
}

function isDraw(){
    return boardValues.every(function(pocket){
        return pocket!==' ';
    })
}

function endGame(message){
    document.getElementById('message').textContent=message;
}
