const comscore = document.getElementsByClassName("com-score")[0];
const urscore = document.getElementsByClassName("ur-score")[0];

const buttons = document.querySelectorAll(".hand");

const gameRule = document.querySelector(".game-rule");
const ruleBtn = document.querySelector(".rule-btn");
const crossBtn = document.querySelector(".cross-btn");

let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
let yourScore = parseInt(localStorage.getItem("yourScore")) || 0;

comscore.innerText = computerScore;
urscore.innerText = yourScore;

const computerChoices = ["rock", "paper", "scissor"];

function computerSelect() {
  return computerChoices[Math.floor(Math.random() * 3)];
}

function playGame(userChoice) {
  const computerChoice = computerSelect();
  console.log("PC chose:", computerChoice);
  console.log("You chose:", userChoice);

  // Check for a tie
  if (userChoice === computerChoice) {
    console.log("It's a tie!");
    localStorage.setItem("userChoice", userChoice);
    localStorage.setItem("computerChoice", computerChoice);
    navigateToResultPage("tie.html");
  }
  // Check if the user wins
  else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("You win!");
    yourScore += 1;
    urscore.innerText = yourScore;
    localStorage.setItem("yourScore", yourScore);
    localStorage.setItem("userChoice", userChoice);
    localStorage.setItem("computerChoice", computerChoice);
    navigateToResultPage("won.html");
  }
  // Otherwise, the computer wins
  else {
    console.log("PC wins!");
    computerScore += 1;
    comscore.innerText = computerScore;
    localStorage.setItem("computerScore", computerScore);
    localStorage.setItem("userChoice", userChoice);
    localStorage.setItem("computerChoice", computerChoice);
    navigateToResultPage("lose.html");
  }
}

// Function to navigate to the result page
function navigateToResultPage(page) {
  window.location.href = `./pages/${page}`;
}

// Attach event listeners to the game buttons (rock, paper, scissor)
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playGame(this.id);
  });
});

// Handle the display of game rules
crossBtn.addEventListener("click", () => {
  gameRule.style.visibility = "hidden";
  crossBtn.style.visibility = "hidden";
});

ruleBtn.addEventListener("click", () => {
  gameRule.style.visibility = "visible";
  crossBtn.style.visibility = "visible";
});
