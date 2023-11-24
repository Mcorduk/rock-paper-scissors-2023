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
    const input = prompt(`Please enter your input as: 'rock', 'paper' or 'scissors'`).toLowerCase();
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
    return winner
} 

function game(){
    let compScore = 0;
    let playerScore = 0;

    for (i = 0; i < 5 ;i++) {
        let result = calcWhoWon();
        
        if (result == "Player") {
            playerScore++;
        } else if (result == "Computer") {
            compScore++;

        }else {
            continue;
        }
        console.log(`Computer Score: ${compScore} Player Score: ${playerScore}`);
    }
    if (compScore < playerScore) {
        return "Player";
    }else if (compScore > playerScore) {
        return "Computer";
    }else {
        return 0;
    }
}

let result = game()
if (result == 0) {
    console.log("Tie!")
}else {
    console.log(`${result} won!`)
}
