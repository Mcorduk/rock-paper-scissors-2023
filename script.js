let playerScore = 0;
let computerScore = 0;

// Function to get a random choice for the computer:
// 'rock', 'paper', or 'scissors'
function getComputerChoice() {
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

// Function to play a round of the game
function playRound(choice) {
    // Get computer and player choices
    const playerChoice = choice;
    const compChoice = getComputerChoice();

    // Variable to store the winner of the round
    let winner = "";

    // Display the choices and the winner

    // Check for a tie
    if (compChoice == playerChoice) {
        winner = "Nobody";
    }
    // Check for computer win
    else if (
        (compChoice == "rock" && playerChoice == "scissors") ||
        (compChoice == "scissors" && playerChoice == "paper") ||
        (compChoice == "paper" && playerChoice == "rock")
    ) {
        winner = "Computer";
    }
    // If not a tie or computer win, player wins
    else {
        winner = "Player";
    }
    displayResult(playerChoice, compChoice, winner);
    return winner;
}

function calcWin(round) {
    while((computerScore != 5) || (playerScore != 5)){
        let winner = playRound();
        if (winner == "Computer") {
            computerScore++;
        } else if (winner == "Player") {
            playerScore++
        } else {
            continue; //is a tie noone gets any score
        }
    }
    if (playerScore > computerScore) {
        console.log("Player Wins!");
    } else if (playerScore > computerScore) {
        console.log("Computer Wins!");
    } else {
        console.log("Tie!");
    }
}

function clearDisplay() {
    while (resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild);
    }
}

// Choose buttons on the page and Add event listeners to buttons
document.getElementById("rock")
    .addEventListener("click", function () {
        playRound("rock");
    });

document.getElementById("paper")
    .addEventListener("click", function () {
        playRound("paper");
    });

document.getElementById("scissors")
    .addEventListener("click", function () {
        playRound("scissors");
    });

document.getElementById("clear")
    .addEventListener("click", function () {
        clearDisplay();
    });

let resultDiv = document.querySelector(".results")

// Get whoever won and push text into the Dom
function displayResult(playerChoice, compChoice, winner) {
    let spanInfo = document.createElement("span")
    spanInfo.textContent = 
    `Player chose: ${playerChoice} and computer chose: ${compChoice}.`;

    let spanWinner = document.createElement("span");
    spanWinner.textContent = (`The winner is ${winner}!`);
    spanWinner.style.display = "block";
    resultDiv.appendChild(spanInfo);
    resultDiv.appendChild(spanWinner);
}

