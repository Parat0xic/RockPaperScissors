
let userscore = 0;
let aiscore = 0;

let btns = document.querySelectorAll("button");

const div = document.createElement("div");
div.classList.add("container");

const userdiv = document.createElement("div");
userdiv.classList.add("userscorepage");

const aidiv = document.createElement("div");
aidiv.classList.add("aiscorepage");

const resultdiv = document.createElement("div");
resultdiv.classList.add("resultpage");

div.appendChild(userdiv);
div.appendChild(aidiv);
div.appendChild(resultdiv);
document.body.appendChild(div);

for (let i of btns) {
    i.addEventListener("click", (e) => {
        
        let btnclass = e.target.className;
        let computerSelection = getcomputerchoice();
        let currentround = playround(btnclass,computerSelection);
        
        //checks who won the round, updates score on page and in vars
        if (currentround == "win"){
            userscore++;
            userdiv.textContent = "User:  " + userscore.toString();
            resultdiv.textContent = "Round Win";
        }
        else if (currentround == "lose"){
            aiscore++;
            aidiv.textContent = "AI:  " + aiscore.toString();
            resultdiv.textContent = "Round Loss";
        }
        else {
            resultdiv.textContent = "Round Draw";
        }
        
        //checks for game end and displays who won
        if (userscore == 5 || aiscore == 5){
            if (userscore > aiscore) {
                resultdiv.textContent = "You Win The Game!";
            }
            else if (aiscore > userscore) {
                resultdiv.textContent = "You Lose The Game!";
            }
            else {
                resultdiv.textContent = "You somehow drew the game this shouldn't be possible!";
            }
            userscore = 0;
            aiscore = 0;
            userdiv.textContent = "User:  " + userscore.toString();
            aidiv.textContent = "AI:  " + aiscore.toString();
        }
        
    })
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
        return "draw";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
        return "win";
    }
    else {
        return "lose";
    }
}