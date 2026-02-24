console.log("Welcome to the game! \nPlease choose: \n(0)Rock; (1)Paper; (2)Scissors");

let getComputerChoice = n => Math.floor(Math.random() * n);
console.log("Computer: "+showComputerChoices(getComputerChoice(3)));

function showComputerChoices(num){
    let computer;
    switch (num){
        case 0:
            computer = "Rock";
            break;
        case 1:
            computer = "Paper";
            break;
        case 2:
            computer = "Scissors";
    }
    return computer;
}

function getHumanChoices(){
    let human = prompt("Please input your choice");
    let humanChoice;
    switch (human.toLowerCase()){
        case "rock":
            humanChoice = 0;
            break;
        case "paper":
            humanChoice = 1;
            break;
        case "scissors":
            humanChoice = 2;
            break;
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (computerChoice === 0 && humanChoice === 1){
        console.log("You win! Paper beats Rock");
        humanChoice++;
    } else if (computerChoice === 0 && humanChoice === 2){
        console.log("You Lose");
        computerChoice++;
    } else if (computerChoice === 1 && humanChoice === 0){
        console.log("You lose");
        computerChoice++;
    } else if (computerChoice === 1 && humanChoice === 2){
        console.log("You win");
        humanChoice++;
    } else if (computerChoice === 2 && humanChoice === 0){
        console.log("win");
        humanChoice++;
    } else if (computerChoice === 2 && humanChoice === 1){
        console.log("lose");
        computerChoice++;
    } else{
        console.log("We are tied")
    }
}