alert('Guess a letter. Guess a-z');

var answer = 3;
var guess;

for (i = 0; i < 27; i++) {
    guess = prompt("What's your guess?");
    if (answer == guess) {
        alert("You guessed correctly");
        break;
    } else {
        guess = prompt("Please try again");
    }
    console.log(i + 1);
}