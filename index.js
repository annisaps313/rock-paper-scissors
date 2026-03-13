const getComputerChoice = ()=> Math.floor(Math.random() * 3);
const getHumanChoice = ()=> prompt("Please input your choice");

let humanScore = 0;
let computerScore = 0;

let showChoice = document.querySelector("h1");
showChoice.textContent = "Start Game!";

let showScore = document.querySelector("h2");
showScore.textContent = "";

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

    showChoice.textContent = `Bot(${computerChoice}) Vs You(${humanChoice})`;

    // logic beating game
    if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("Paper beats rock");
        showScore.textContent = `Bot: ${computerScore +=1;} | You: ${humanScore}`;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Scissors beats paper");
        computerScore +=1;
        showScore.textContent = `Bot: ${computerScore +=1;} | You: ${humanScore}`;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("Rock beats scissors");
        computerScore +=1;
        showScore.textContent = `Bot: ${computerScore +=1;} | You: ${humanScore}`;
    } else if (humanChoice === computerChoice){
        console.log("It's draw:)")
        showScore.textContent = `Bot: ${computerScore +=1;} | You: ${humanScore}`;
    } else {
        showScore.textContent = `Bot: ${humanScore +=1} | You: ${humanScore}`;
    }
}

function playGame(){
    let btn = document.querySelectorAll("input");
    btn.forEach(button =>{
        button.addEventListener("click", ()=>{
            playRound(button.value, getComputerChoice());
        })
    });

    let result = document.querySelector(".result");

    if (humanScore > computerScore){
        result.textContent = "Congratulations! You are the winner";
    } else if (humanScore === computerScore){
        result.textContent = "We are tied!";
    } else{
        result.textContent = "Sorry, you lose the game:(";
    }
}

playGame()