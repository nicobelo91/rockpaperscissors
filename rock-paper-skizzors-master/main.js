const CHOICES = ['rock', 'paper', 'scissors']

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return (CHOICES[randomIndex])
}

let computerPoints = 0;
let playerPoints = 0;

function playRound(playerSelection) {
    const results = document.querySelector('#results')
    const computerScore = document.querySelector('#computer-score');
    const playerScore = document.querySelector('#player-score');


    playerScore.textContent = 'Player points: '+ playerPoints;
    computerScore.textContent = 'Computer points: '+ computerPoints;

    const computerSelection = computerPlay();

    if (computerSelection == playerSelection.toLowerCase()) {
        results.textContent = 'It\'s a draw!';
    } else if (computerSelection == 'rock') {
        if (playerSelection.toLowerCase() == 'paper') {
            ++playerPoints
            results.textContent = 'Paper beats rock. You win!'
            playerScore.textContent = 'Player points: ' + playerPoints;
        } else if (playerSelection.toLowerCase() == 'scissors') {
            ++computerPoints
            results.textContent = 'Rock beats scissors. You lose.'
            computerScore.textContent = 'Computer points: ' + computerPoints;
        }
    } else if (computerSelection == 'paper') {
        if (playerSelection.toLowerCase() == 'rock') {
            ++computerPoints
            results.textContent = 'Paper beats rock. You lose.'
            computerScore.textContent = 'Computer points: ' + computerPoints;
        } else if (playerSelection.toLowerCase() == 'scissors') {
            ++playerPoints
            results.textContent = 'Scissors beats paper. You win!'
            playerScore.textContent = 'Player points: ' + playerPoints;
        }
    } else if (computerSelection == 'scissors') {
        if (playerSelection.toLowerCase() == 'rock') {
            ++playerPoints
            results.textContent = 'Rock beats scissors. You win!'
            playerScore.textContent = 'Player points: ' + playerPoints;
        } else if (playerSelection.toLowerCase() == 'paper') {
            ++computerPoints
            results.textContent = 'Scissors beats paper. You lose'
            computerScore.textContent = 'Computer points: ' + computerPoints;
        }
    }
}

function checkForWinner() {
    const round = document.querySelector('#round-end'); 
    if (computerPoints == 5) {
        round.textContent = "Computer won this match! You lose."
        playAgainButton();
    } else if (playerPoints == 5) {
        round.textContent =  "You won this match, congratulations!"
        playAgainButton();
    } 
}

function playAgainButton () {
    const playAgain = document.createElement("BUTTON");
    const computerScore = document.querySelector('#computer-score');
    const playerScore = document.querySelector('#player-score');
    const results = document.querySelector('#results')
    const round = document.querySelector('#round-end'); 

    playAgain.innerHTML = "Play Again?";
    playAgain.style.backgroundColor = 'rgb(24, 213, 247)';
    playAgain.style.color = 'rgb(10, 38, 196)';
    playAgain.style.borderRadius = '5%'
    playAgain.style.borderColor = 'rgb(10, 38, 196)'
    document.getElementById('reset-button').appendChild(playAgain);
    playAgain.addEventListener('click', function(event) {
        results.textContent = "";
        playerPoints = 0;
        computerPoints = 0;
        computerScore.textContent = 'Computer points: ' + computerPoints;
        playerScore.textContent = 'Player points: ' + playerPoints;
        document.getElementById('reset-button').removeChild(playAgain);
        round.textContent = "";
    })
}

   



    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((button) => {
    button.addEventListener('click', function(event) {
        playRound(event.target.value);
        checkForWinner();
    })
})

  
