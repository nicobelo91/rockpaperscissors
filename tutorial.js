var userChoice;
var computerChoice;
var result;
var ranNum;

const displayResult = document.getElementById('result');
const computerPick = document.getElementById('compChoice');
const userPick = document.getElementById('userChoice');
const resetBtn = document.getElementById('reset');
const possibleChoices = document.querySelectorAll('.choices');

//User Choice, when pressing buttons

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', e =>
{
userChoice = e.target.id;
ranNum = Math.floor(Math.random() * 3) + 1;
generateCompChoice();
compareChoices();
computerPick.innerHTML = '<img src="' + computerChoice + '.png">';
userPick.innerHTML = '<img src="' + userChoice + '.png">'
displayResult.innerHTML = result;
}
))



//Computer Choice
function generateCompChoice() {
    if(ranNum == 1) {
        computerChoice = "rock";
    } else if(ranNum == 2) {
        computerChoice = "paper";
    } else if(ranNum == 3) {
        computerChoice = "scissors";
    }
}

//Reset button
function reset(){
computerChoice = "?";
computerPick.innerHTML = computerChoice;
ranNum = 0;
userChoice = "?";
userPick.innerHTML = userChoice;
displayResult.innerHTML = "?";
}

//Rock, Paper or Scissors?
function compareChoices() {
    if (userChoice == computerChoice) {
        result = "It's a tie game!";
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        result = "You win!";
    } else if (userChoice == "paper" && computerChoice == "rock") {
        result = "You win!";
    } else if (userChoice == "rock" && computerChoice == "scissors") {
        result = "You win!";
    } else if (userChoice == "scissors" && computerChoice == "rock") {
        result = "You lose!";
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        result = "You lose!";
    } else if (userChoice == "rock" && computerChoice == "paper") {
        result = "You lose!";
    } 

}