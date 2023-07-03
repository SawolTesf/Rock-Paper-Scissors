/*
rock = 1
paper = 2
scissors = 3

rock beats scissors
paper beats rock
scissors beats paper

*/
let roundsPlayed = 0;
let userWins = 0;
let userLosses = 0;

let rockbtn = document.querySelector('.rock-btn');
let paperbtn = document.querySelector('.paper-btn');
let scissorsbtn = document.querySelector('.scissors-btn');

function getUserChoice(userChoice){
    if(roundsPlayed != 5){
        document.querySelector('.user-choice').textContent = userChoice;
    }
    return userChoice;
}

function getComputerChoice(){
    let randomChoice = Math.floor((Math.random() * 3) + 1);
    if(randomChoice === 1){
        randomChoice = "rock";
    }
    else if(randomChoice === 2){
        randomChoice = "paper";
    }
    else{
        randomChoice = "scissors";
    }
    
    if(roundsPlayed != 5)
    document.querySelector('.computer-choice').textContent = randomChoice;
    return randomChoice;
}

function winRound(playerSelection, computerSelection){
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        return true;
    }
    else if((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")){
        return false;
    }
}

function winGame(userWins, userLosses){
    if(userWins > userLosses){
        return true;
    }
    else if(userWins < userLosses){
        return false;
    }
    else{
        return null;
    }
}
function playGame(userChoice, computerChoice){

    let resultPar = document.querySelector('.result-par');
    let currRound = document.querySelector('.curr-round');

    if(roundsPlayed != 5){
        if(winRound(userChoice, computerChoice) === true){
            roundsPlayed++;
            userWins++;
            resultPar.textContent = "You win! " + userChoice + " beats " + computerChoice + "";
            currRound.textContent = roundsPlayed + " rounds out of 5 played";
        }
        else if(winRound(userChoice, computerChoice) === false){
            roundsPlayed++;
            userLosses++;

            resultPar.textContent = "You lose! " + computerChoice + " beats " + userChoice + "";
            currRound.textContent = roundsPlayed + " rounds out of 5 played";
        }
        else{
            resultPar.textContent = "It's a tie!";

        }
    }
    else{
        if(winGame(userWins, userLosses) === true){
            resultPar.textContent = "You win the game with " + userWins + " wins and " + userLosses + " losses! Reload the page to play again!";
        }
        else if(winGame(userWins, userLosses) === false){
            resultPar.textContent = "You lose the game with " + userWins + " wins and " + userLosses + " losses! Reload the page to play again!";
        }
    }     
}

// add event listeners to the buttons
rockbtn.addEventListener('click', function() {
    let userChoice = getUserChoice("rock");
    let computerChoice = getComputerChoice();
    
    playGame(userChoice, computerChoice);
});

paperbtn.addEventListener('click', function() {
    let userChoice = getUserChoice("paper");
    let computerChoice = getComputerChoice();
    
    playGame(userChoice, computerChoice);
});

scissorsbtn.addEventListener('click', function() {
    let userChoice = getUserChoice("scissors");
    let computerChoice = getComputerChoice();

    playGame(userChoice, computerChoice);
});
