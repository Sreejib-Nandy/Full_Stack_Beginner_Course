const jokeButton = document.getElementById('joke-button');
const bitcoinButton = document.getElementById('bitcoin-button');
const outputDiv = document.getElementById('output');

jokeButton.addEventListener('click', getJoke);
bitcoinButton.addEventListener('click', getBitcoinPrice);

function getJoke() {
    const url = 'https://api.chucknorris.io/jokes/random';
    fetch(url)
        .then(response => response.json())
        .then(data => outputDiv.innerText = data.value)
        .catch(error => console.error(error));
        
}

function getBitcoinPrice() {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            outputDiv.innerText = `Current Bitcoin Price: $${data.bitcoin.usd}`;
        })
        .catch(error => console.error(error));
}