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


