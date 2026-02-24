const getComputerChoice = ()=> Math.floor(Math.random() * 3);
const getHumanChoice = ()=> prompt("Please input your choice");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    // convert random number to string
    if (computerChoice == 0){
        computerChoice = "rock";
    } else if (computerChoice == 1){
        computerChoice = "paper";
    } else if (computerChoice == 2){
        computerChoice = "scissors";
    }

    // logic beating game
    if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats rock");
        computerScore +=1;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper");
        computerScore +=1;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors");
        computerScore +=1;
    } else {
        console.log("You win!");
        humanScore +=1;
    }
}
