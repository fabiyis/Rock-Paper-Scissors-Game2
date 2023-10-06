let round = 0;
let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const outcome = determineOutcome(userChoice, computerChoice);
    if (round < 5) {
    round++;
    updateScores(outcome);
    displayOutcome(outcome);

    if (round === 5) {
       displayFinalResult();
       }
    }
}

function determineOutcome(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function updateScores(outcome) {
    document.getElementById("round").textContent = round;
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
    if (outcome === "win") {
        userScore++;
    } else if (outcome === "lose") {
        computerScore++;
    }  
}
function displayOutcome(outcome) {
    const outcomeElement = document.getElementById("game-outcome");

    if (outcome === "tie") {
        outcomeElement.textContent = "It's a tie!";
    } else if (outcome === "win") {
        outcomeElement.textContent = "You win this round!";
    } else {
        outcomeElement.textContent = "You lose this round!";
    }
}

function displayFinalResult() {
    const finalResultElement = document.getElementById("final-result");

    if (userScore > computerScore) {
        finalResultElement.textContent = "Congratulations! You win the game!";
    } else if (userScore < computerScore) {
        finalResultElement.textContent = "Sorry, you lose the game.";
    } else {
        finalResultElement.textContent = "It's a tie game.";
    }
}
