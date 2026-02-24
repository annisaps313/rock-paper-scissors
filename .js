console.log("Welcome to the game!");

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
        humanChoice++;
        console.log("You win! Paper beats Rock");
    } else if (computerChoice === 0 && humanChoice === 2){
        computerChoice++;
        console.log("You Lose");
    } else if (computerChoice === 1 && humanChoice === 0){
        computerChoice++;
        console.log("You lose");
    } else if (computerChoice === 1 && humanChoice === 2){
        humanChoice++;
        console.log("You win");
    } else if (computerChoice === 2 && humanChoice === 0){
        humanChoice++;
        console.log("win");
    } else if (computerChoice === 2 && humanChoice === 1){
        computerChoice++;
        console.log("lose");
    } else{
        console.log("We are tied")
    }
}

const humanSelection = getHumanChoices();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

playGame()