let round = 0;
let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  if (round < 5) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const outcome = determineOutcome(userChoice, computerChoice);

    round++;
    updateScores(outcome);
    displayOutcome(outcome);

  if (round === 5) {
    displayFinalResult();
    }
  }
}