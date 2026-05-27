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
    const input = document.getElementById('input').value.trim().toLowerCase();
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${input}&vs_currencies=usd`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            outputDiv.innerText = `Current ${input} Price: $${data[input].usd}`;
        })
        .catch(error => {outputDiv.innerText = "Invalid cryptocurrency name. Please try again."; console.error(error)});
}