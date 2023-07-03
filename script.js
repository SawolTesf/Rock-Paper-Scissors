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
    document.querySelector('.user-choice').textContent = userChoice;
    return userChoice;
}

function getComputerChoice(){
    let randomChoice = Math.floor((Math.random() * 3) + 1);
    document.querySelector('.computer-choice').textContent = randomChoice;
    return randomChoice;
}

function winRound(playerSelection, computerSelection){
    if((playerSelection === 1 && computerSelection === 3) || (playerSelection === 2 && computerSelection === 1) || (playerSelection === 3 && computerSelection === 2)){
        return true;
    }
    else if((playerSelection === 1 && computerSelection === 2) || (playerSelection === 2 && computerSelection === 3) || (playerSelection === 3 && computerSelection === 1)){
        return false;
    }

}

function playGame(userChoice, computerChoice){

    let resultPar = document.querySelector('.result-par');
    let currRound = document.querySelector('.curr-round');

    if(roundsPlayed != 5){
        if(winRound(userChoice, computerChoice) === true){
            roundsPlayed++;
            userWins++;
            //document.querySelector('user-choice').textContent
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
        alert("Game over!");
    }
    

        
}

// add event listeners to the buttons
rockbtn.addEventListener('click', function() {
    let userChoice = getUserChoice(1);
    let computerChoice = getComputerChoice();
    
    playGame(userChoice, computerChoice);
});

paperbtn.addEventListener('click', function() {
    let userChoice = getUserChoice(2);
    let computerChoice = getComputerChoice();
    
    playGame(userChoice, computerChoice);
});

scissorsbtn.addEventListener('click', function() {
    let userChoice = getUserChoice(3);
    let computerChoice = getComputerChoice();

    playGame(userChoice, computerChoice);
});
