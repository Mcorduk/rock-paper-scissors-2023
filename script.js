function getComputerChoice(){
    const number = Math.floor(Math.random() * 3);

    switch (number) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getPlayerChoice(){
    const input = prompt(`Please enter your input as: 'rock', 'paper' or 'scissors'`);
    return input;
}

function calcWhoWon() {
    const compChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    let winner = ""

    if (compChoice == playerChoice) {
        console.log("Tie!")
        winner = "Nobody"
    }
    else if ((compChoice == "rock" && playerChoice == "scissors") || 
    (compChoice == "scissors" && playerChoice == "paper")|| 
    (compChoice == "paper" && playerChoice == "rock")) {
        winner = "Computer";
    }else {
        winner = "Player";
    }
    console.log(`Player chose: ${playerChoice} and computer chose: ${compChoice}.
    ${winner} won!`);
} 

calcWhoWon();