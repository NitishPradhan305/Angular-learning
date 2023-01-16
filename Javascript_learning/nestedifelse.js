let winningNumber = 17;
let userGuess = +prompt("Guess a number");

if (userGuess === winningNumber) {
    console.log("Your guess is correct")
} else {
    if (userGuess<winningNumber) {
        console.log("Your guess is too low")
    } else {
        console.log("Your guess is too high")
    }
}