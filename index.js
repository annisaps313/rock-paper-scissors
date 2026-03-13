const getComputerChoice = ()=> Math.floor(Math.random() * 3);
const getHumanChoice = ()=> prompt("Please input your choice");

let humanScore = 0;
let computerScore = 0;

let showChoice = document.querySelector(".choice");
showChoice.textContent = "Start Game!";

let showScore = document.querySelector(".score");
showScore.textContent = "";

let result = document.querySelector(".result");
result.textContent = "";

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

    showChoice.textContent = `You: ${humanChoice} vs Bot: ${computerChoice}`;

    // logic beating game
    if (humanChoice === "rock" && computerChoice === "paper"){
        showScore.textContent = `You: ${humanScore} | Bot: ${computerScore+=1}`;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        showScore.textContent = `You: ${humanScore} | Bot: ${computerScore+=1}`;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        showScore.textContent = `You: ${humanScore} | Bot: ${computerScore+=1}`;
    } else if (humanChoice === computerChoice){
        showScore.textContent = `You: ${humanScore} | Bot: ${computerScore}`;
    } else {
        showScore.textContent = `You: ${humanScore+=1} | Bot: ${computerScore}`;
    }
}

function playGame(){
    let btn = document.querySelectorAll("input");
    btn.forEach(button =>{
        button.addEventListener("click", ()=>{
            playRound(button.value, getComputerChoice());
        })
    });

    if (humanScore > computerScore){
        showScore.textContent = "Congratulations! You are the winner";
    } else if (humanScore === computerScore){
        showScore.textContent = "We are tied!";
    } else{
        showScore.textContent = "Sorry, you lose the game:(";
    }
}

playGame()