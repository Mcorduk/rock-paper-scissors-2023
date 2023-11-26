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
        computerScore++;
    }
    // If not a tie or computer win, player wins
    else {
        winner = "Player";
        playerScore++;
    }
    displayResult(playerChoice, compChoice, winner);
    return winner;
}

function checkWinner() {

    if((playerScore >= 5) || (computerScore >= 5)) {
        toggleVisibility();
        if(playerScore > computerScore) {
            displayEndScore("Player");
        } else{
            displayEndScore("Computer");
        }
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
        checkWinner();
        
    });

document.getElementById("paper")
    .addEventListener("click", function () {
        playRound("paper");
        checkWinner();
    });

document.getElementById("scissors")
    .addEventListener("click", function () {
        playRound("scissors");
        checkWinner();
    });

document.getElementById("clear")
    .addEventListener("click", function () {
        clearDisplay();
    });

document.getElementById("replay")
    .addEventListener("click", function () {
        replayGame();
    });

let resultDiv = document.querySelector(".results")

// Get whoever won and push text into the Dom
function displayResult(playerChoice, compChoice, winner) {
    let spanInfo = document.createElement("span")
    spanInfo.textContent =
        `Player chose: ${playerChoice} and computer chose: ${compChoice}.`;

    let spanRoundEnd = document.createElement("span");
    spanRoundEnd.textContent = (`This rounds winner is ${winner}!`);
    spanRoundEnd.style.display = "block";
    resultDiv.appendChild(spanInfo);
    resultDiv.appendChild(spanRoundEnd);
    insertBreak();
}

function displayEndScore(gameWinner) {
    let spanScore = document.createElement("span")
    spanScore.textContent =
        `Player score: ${playerScore} / Computer score: ${computerScore}.`;
    let spanWinner = document.createElement("span")
    spanWinner.textContent =
        (` The Winner is ${gameWinner}!`);

    clearDisplay();

    resultDiv.appendChild(spanScore);
    resultDiv.appendChild(spanWinner);
}

function toggleVisibility() {
    const buttonDiv = document.querySelector(".button-container");

    // Toggle visibility using the style display property
    if (buttonDiv.style.display === "none") {
        buttonDiv.style.display = "block";
    } else {
        buttonDiv.style.display = "none";
    }
}
function replayGame() {
    playerScore = 0;
    computerScore = 0;
    
    clearDisplay();
    toggleVisibility();
}

function insertBreak() {
        // Insert a line break using innerHTML
        resultDiv.innerHTML += "<br>";
}