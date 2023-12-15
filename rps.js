const prompt = require('prompt-sync')();
// MVP of Rock, Paper, Scissors
var choicesArr = ["rock", "paper", "scissors"];
var playerChoice;
var running = true;
var isValid;
// check whether the choice is valid, if not make them choose again
while (running){
    isValid = false;
    while (!isValid) {
        // Ask player to choose rock, paper or scissors
        playerChoice = prompt("Please choose rock, paper or scissors: ");
        playerChoice = playerChoice.toLowerCase();
        var isInChoices = false;
        for (var i=0; i < choicesArr.length; i++){
            if (playerChoice === choicesArr[i]) {
                isInChoices = true;
            }
        }
        if (isInChoices){
            isValid = true
        }
    }
    console.log(`You chose: ${playerChoice}`);
    // computer will randomly choose rock, paper or scissors
    var randomNumber = Math.floor((Math.random() * 3));
    console.log(randomNumber);
    var computerChoice = choicesArr[randomNumber];
    console.log(`The computer chose: ${computerChoice}`);
    // compare playerChoice to computerChoice
    // IF playerChoice === computerChoice, result is Draw
    if ( playerChoice === computerChoice) {
        console.log("It's a draw, please choose again!");
        // IF playerChoice === "rock" AND computerChoice == "scissors", result is Win
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win!");
        running = false;
        // IF playerChoice === "scissors" AND computerChoice == "paper", result is Win
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!");
        running = false;
        // IF playerChoice === "paper" AND computerChoice == "rock", result is Win
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You win!");
        running = false;
        // In all other cases, result is Lose
    } else {
        console.log("You lose!");
        running = false;
    }
}
