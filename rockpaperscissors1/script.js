// Navngivning
const gameField = document.getElementById(`gamefield`);
const player = document.getElementById(`player1`);
const computer = document.getElementById(`player2`);

const rock = document.querySelector(`.rock`);
const paper = document.querySelector(`.paper`);
const scissors = document.querySelector(`.scissors`);

const lose = document.getElementById(`lose`);
const win = document.getElementById(`win`);
const tie = document.getElementById(`tie`);



//rock = 0, paper = 1, scissors = 2
// no glue
let compChoice;

//rock = 0, paper = 1, scissors = 2
// no glue
let userChoice;

// DOM load - send to titleScreen - Så snart documentet er blevet loaded færdigt. (meget vigtigt!!!!)
// intet virker hvis den ikke er med
window.addEventListener("DOMContentLoaded", titleScreen);




// titleScreen
function titleScreen() {
    console.log(`titleScreen`);


    // functionen her betyder at så snart man klikker igen på enten rock, scissors eller paper efter en title har været vist frem, så vil titlen forsvinde igen
    tie.classList = "hidden";
    win.classList = "hidden";
    lose.classList = "hidden";

    // // Denne er meget vigtigt (men den behøver kun at blive brugt en gang)
    compChoice = Math.floor(Math.random() * 3); // denne er med til at fremvisse titlescreen

    // er denne nødvendig? Hvad betyder den
    //console.log(`compChoice is : ${compChoice}`);

    // Denne function gøre at eventen vil reagere på ens klik
    rock.addEventListener("click", shakeHandsRock);
    paper.addEventListener("click", shakeHandsPaper);
    scissors.addEventListener("click", shakeHandsScissors);
  }





// shake animation
function shakeHandsRock() {
    console.log(`shakeHandsRock`);

    player.classList.add("shake");
    computer.classList.add("shake");
    player.addEventListener("animationend", rockClicked);
  }

function rockClicked() {
  player.removeEventListener("animationend", rockClicked);

  console.log(`rockClicked`);
  userChoice = 0;

  player.classList = "player rock";
  computer.classList = "player";

  player.classList.remove("shake");
  computer.classList.remove("shake");
  //   rock vs rock = tie
  if (userChoice == compChoice) {
    // shake animation

    // show hands pngs
    computer.classList.add(`rock`);

    tieScreen();
  }
  //   rock vs paper = player lose
  else if (compChoice == 1) {
    // shake animation

    // show hands pngs
    computer.classList.add(`paper`);

    loseScreen();
  }
  //   rock vs scissors = player win
  else if (compChoice == 2) {
    // shake animation

    // show hands pngs
    computer.classList.add(`scissors`);

    winScreen();
  }
}









function shakeHandsPaper() {
    console.log(`shakeHandsPaper`);

    player.classList.add("shake");
    computer.classList.add("shake");
    player.addEventListener("animationend", paperClicked);
  }

function paperClicked() {
  player.removeEventListener("animationend", paperClicked);
  console.log(`paperClicked`);
  userChoice = 1;

  player.classList = "player paper";
  computer.classList = "player";

  player.classList.remove("shake");
  computer.classList.remove("shake");

  //   paper vs rock = win
  if (compChoice == 0) {
    // shake animation

    // show hands pngs
    computer.classList.add("rock");

    winScreen();
  }

  //   paper vs paper = tie
  else if (compChoice == userChoice) {
    // shake animation

    // show hands pngs
    computer.classList.add(`paper`);

    tieScreen();
  }

  //   paper vs scissors = lose
  else if (compChoice == 2) {
    // shake animation

    // show hands pngs
    computer.classList.add(`scissors`);

    loseScreen();
  }
}







function shakeHandsScissors() {
    console.log(`shakeHandsScissors`);

    player.classList.add("shake");
    computer.classList.add("shake");
    player.addEventListener("animationend", scissorsClicked);
  }

function scissorsClicked() {
  player.removeEventListener("animationend", scissorsClicked);
  console.log(`scissorsClicked`);
  userChoice = 2;

  player.classList = "player scissors";
  computer.classList = "player";

  player.classList.remove("shake");
  computer.classList.remove("shake");



  //   scissors vs rock = lose
  if (compChoice == 0) {
    // show hands pngs
    computer.classList.add(`rock`);

    loseScreen();
  }


  //   scissors vs paper = win
  else if (compChoice == 1) {
    // shake animation

    // show hands pngs
    computer.classList.add(`paper`);

    winScreen();
  }


  //   scissors vs scissors = tie
  else if (compChoice == userChoice) {
    // shake animation

    // show hands pngs
    computer.classList.add(`scissors`);

    tieScreen();
  }
}






// tie, win og losescreen er for hvornår de forskellige titler skal fremvisses
// tieScreen
function tieScreen() {
  console.log(`tieScreen`);

  // display block tie
  tie.classList = "";
  win.classList = "hidden";
  lose.classList = "hidden";

  rock.addEventListener("click", titleScreen);
  paper.addEventListener("click", titleScreen);
  scissors.addEventListener("click", titleScreen);
}



// winScreen
function winScreen() {
  console.log(`winScreen`);

  // display block win
  win.classList = "";
  tie.classList = "hidden";
  lose.classList = "hidden";

  rock.addEventListener("click", titleScreen);
  paper.addEventListener("click", titleScreen);
  scissors.addEventListener("click", titleScreen);
}



// loseScreen
function loseScreen() {
  console.log(`loseScreen`);

  // display block lose
  lose.classList = "";
  win.classList = "hidden";
  tie.classList = "hidden";

  rock.addEventListener("click", titleScreen);
  paper.addEventListener("click", titleScreen);
  scissors.addEventListener("click", titleScreen);
}

// document load
// Lav variabler "const" (userGuess/compGuess/result)
// lægge eventlistener på knapper
// tilfældigt valg fra computeren (sten, saks, papir)
// Brugeren tager et valg (sten, saks, papir)
// Find en vinder
// Kør animationen (shake)
// Kør derefter de valgte håndtegn
// Vis title skærm 