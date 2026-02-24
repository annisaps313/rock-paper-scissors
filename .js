console.log("Welcome to the game!");

const getComputerChoice = ()=> Math.floor(Math.random() * 3);
const getHumanChoice = ()=> prompt("Please input your choice");

let humanScore = 0;
let computerScore = 0;

// const computerSelection = getComputerChoice();
// const humanSelection = getHumanChoices;

// playRound(humanSelection, computerSelection);