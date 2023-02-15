game();

//function for whole game
function game () {
    let score;
    //loop through 5 rounds and increment or decrement score based on results
    for (let i = 0; i < 5; i++) {
        let playerSelection = promptuser();
        //exits if user gave incorrect input
        if (playerSelection == null) {
            return;
        }

        let computerSelection = getcomputerchoice();
        console.log(computerSelection);
        let currentround = playround(playerSelection, computerSelection);
        if (currentround = "win"){
            score++;
        }
        else if (currentround = "lose"){
            score--;
        }
    }
    //makes console look nicer
    console.log("---------");
    //check final score tally and declare winner
    if (score > 0){
        console.log("You Win!");
    }
    else if (score < 0){
        console.log("You Lose!");
    }
    else {
        console.log("It's A Draw!");
    }
}

//randomly select a choice for AI
function getcomputerchoice() {
    randomnum = Math.floor(Math.random() * 3);
    if (randomnum == 0) {
        return "rock";
    }
    else if (randomnum == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//function for each round of game
function playround (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("This round is a draw!");
        return "draw";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win this round!")
        return "win";
    }
    else {
        console.log("You lose this round!")
        return "lose";
    }
}

//function to get users valid input
function promptuser() {
    let userselection = prompt("Rock, Paper, Scissors?");

    //lowercase the input
    let userselectionlower = userselection.toLowerCase();

    //make sure prompt is valid
    if (userselectionlower != "rock" && userselectionlower != "paper" && userselectionlower != "scissors") {
        console.log("Please restart with valid inputs");
        return;
    }
    //return the value if valid 
    return userselectionlower;
}