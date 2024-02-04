"user strict"

// Lav variabler "const/let" (userGuess/compGuess/result)
let userChoice;
let compChoice;
let result;


// læg eventlistener på knapper
document.querySelector(".rock").addEventListener("click", klickRock);
document.querySelector(".paper").addEventListener("click", klickPaper);
document.querySelector(".scissors").addEventListener("click", klickScissors);


function klickRock() {
    userChoice = "rock";
    // console.log("Rock");
    makeCompChoice();
}

function klickPaper() {
    userChoice = "paper";
    // console.log("Paper");
    makeCompChoice();
}

function klickScissors() {
    userChoice = "scissors";
    // console.log("Scissors");
    makeCompChoice();
}


// tilfældigt valg fra computeren (sten, saks, papir)
function makeCompChoice() {
    console.log("compChoice", userChoice);
    const randNum = Math.floor(Math.random() * 3);
    if (randNum === 0){
        compChoice = "rock";
    } else if (randNum === 1) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
    console.log("RANDO", randNum);
    detervinderen();
}


// Find en vinder
function detervinderen() {
    if( userChoice === compChoice){
    result ="draw";
    } else {
        if(( userChoice === "rock" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "scissors") ||
      (userChoice === "scissors" && compChoice === "rock")){
        result = "lose";
    } else {
        result = "win";
    }
  }

 startHandAnimations();
}



function startHandAnimations() {
    document.querySelector("#player1").addEventListener("animationend", handAnimationsEnd);
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");


}

function handAnimationsEnd() {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.remove("paper");
    document.querySelector("#player1").classList.remove("scissors");
    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.remove("paper");
    document.querySelector("#player2").classList.remove("scissors");


// hand animation for player1
    console.log("Animation ended");
    if(userChoice === "rock"){
        document.querySelector("#player1").classList.add("rock");
    } else if (userChoice === "paper"){
        document.querySelector("#player1").classList.add("paper");
    } else {
        document.querySelector("#player1").classList.add("scissors");
    }

// hand animation for player2
    if(compChoice === "rock"){
        document.querySelector("#player2").classList.add("rock");
    } else if (userChoice === "paper"){
        document.querySelector("#player2").classList.add("paper");
    } else {
        document.querySelector("#player2").classList.add("scissors");

    showWinnerScreen();
    }

// Skærm title
    function showWinnerScreen (){



        if (result === "win"){
            document.querySelector("#win").classList.remove("hidden");
        } else if(result === "lose"){
            document.querySelector("#lose").classList.remove("hidden");
        } else {
            document.querySelector("#draw").classList.remove("hidden");
        }
    }
}


        // document.querySelector("#draw").classList.add("hidden");
        // document.querySelector("#win").classList.add("hidden");
        // document.querySelector("#lose").classList.add("hidden");

