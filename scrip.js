const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessField').value);
    attempts++;
    
    if (guess === randomNumber) {
        document.getElementById('message').innerHTML = `¡Felicitaciones! Adivinaste el número en ${attempts} intentos.`;
    } else if (guess < randomNumber) {
        document.getElementById('message').innerHTML = 'El número es más alto. Intenta de nuevo.';
    } else {
        document.getElementById('message').innerHTML = 'El número es más bajo. Intenta de nuevo.';
    }
}
