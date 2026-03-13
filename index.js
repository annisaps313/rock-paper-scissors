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

let round = 0;

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
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
    } else if (humanChoice === computerChoice){
        computerScore;
    } else {
        humanScore++;
    }

    showScore.textContent = `You: ${humanScore} | Bot: ${computerScore}`;
    round++;
}

function playGame(){
    let btn = document.querySelectorAll("input");
    btn.forEach(button =>{
        button.addEventListener("click", ()=>{
            playRound(button.value, getComputerChoice());
            if (round === 5){
                if (humanScore > computerScore){
                    showScore.textContent = "Congratulations! You are the winner";
                    round = 0;
                } else if (humanScore === computerScore){
                    showScore.textContent = "We are tied!";
                    round = 0;
                } else{
                    showScore.textContent = "Sorry, you lose the game:(";
                    round = 0;
                }
            }
        })
    });
}

playGame()