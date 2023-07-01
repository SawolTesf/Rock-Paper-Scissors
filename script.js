/*
rock = 1
paper = 2
scissors = 3
*/

function getComputerChoice(){
    return Math.floor((Math.random() * 3) + 1);
}

function winRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return null;
    } 
    else if ((playerSelection === 1 && computerSelection === 3) || (playerSelection === 2 && computerSelection === 1) || (playerSelection === 3 && computerSelection === 2)) {
        return true;
    } 
    else {
        return false;
    }
}
/*
function playRound{

}

function game(){

}

*/