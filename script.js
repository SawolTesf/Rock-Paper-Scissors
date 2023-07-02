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
    return userChoice;
}

function getComputerChoice(){
    return Math.floor((Math.random() * 3) + 1);
}

function winRound(playerSelection, computerSelection){
    if((playerSelection === 1 && computerSelection === 3) || (playerSelection === 2 && computerSelection === 1) || (playerSelection === 3 && computerSelection === 2)){
        return true;
    }
    else if((playerSelection === 1 && computerSelection === 2) || (playerSelection === 2 && computerSelection === 3) || (playerSelection === 3 && computerSelection === 1)){
        return false;
    }

}

function playRound(userChoice, computerChoice){
    if(winRound(userChoice, computerChoice) === true){
        roundsPlayed++;
        userWins++;
        console.log("You win! " + userChoice + " beats " + computerChoice + "");
    }
    else if(winRound(userChoice, computerChoice) === false){
        roundsPlayed++;
        userLosses++;
        console.log("You lose! " + computerChoice + " beats " + userChoice + "");
    }
    else{
    
    }
        
}

// add event listeners to the buttons
rockbtn.addEventListener('click', function() {
    let userChoice = getUserChoice(1);
    let computerChoice = getComputerChoice();
    
    playRound(userChoice, computerChoice);
});

paperbtn.addEventListener('click', function() {
    let userChoice = getUserChoice(2);
    let computerChoice = getComputerChoice();
    
    playRound(userChoice, computerChoice);
});

scissorsbtn.addEventListener('click', function() {
    let userChoice = getUserChoice(3);
    let computerChoice = getComputerChoice();

    playRound(userChoice, computerChoice);
});

/*

function game(){

}
*/
