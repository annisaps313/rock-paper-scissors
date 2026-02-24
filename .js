console.log("Welcome to the game!");

let getComputerChoice = () => Math.floor(Math.random() * 3);

let humanChoice;
let getHumanChoices = ()=> {
    humanChoice = prompt("Please input your choice");
    return humanChoice;
};

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice){
//     if (computerChoice === 0 && humanChoice === 1){
//         humanChoice++;
//         console.log("You win! Paper beats Rock");
//     } else if (computerChoice === 0 && humanChoice === 2){
//         computerChoice++;
//         console.log("You Lose");
//     } else if (computerChoice === 1 && humanChoice === 0){
//         computerChoice++;
//         console.log("You lose");
//     } else if (computerChoice === 1 && humanChoice === 2){
//         humanChoice++;
//         console.log("You win");
//     } else if (computerChoice === 2 && humanChoice === 0){
//         humanChoice++;
//         console.log("win");
//     } else if (computerChoice === 2 && humanChoice === 1){
//         computerChoice++;
//         console.log("lose");
//     } else{
//         console.log("We are tied")
//     }
// }

// const computerSelection = getComputerChoice();
// const humanSelection = getHumanChoices;

// playRound(humanSelection, computerSelection);