 let gameNumber = 7; 
let userGuess = prompt("Guess the number:");

while (userGuess != gameNumber) {
  userGuess = prompt("Wrong! Guess again:");
}

alert("🎉 You guessed it right!");
