// const list = document.querySelector("ul");
// const arrCue = [];
// setInterval(generateBars, 1000);


// function generateBars() {
//     console.log("arrCue");
//     const randoNum = getRandoNum();
//     arrCue.push(randoNum);
//     const li = document.createElement("li");
//     li.style.setProperty("--height", randoNum);
//     list.appendChild(li);

//     if(arrCue.length > 17){
//         arrCue.shift();
//         list.removeChild(list.firstChild);
//     }

//     // console.log("generateBars");
// }

// function getRandoNum() {
//     return Math.round(Math.random() * 100);
// }








// eller
const list = document.querySelector("ul");
const cueArr = [];

setInterval(generateBars, 1000);

function generateBars() {
    cueArr.push(getRandoNum());
    // console.log("cueArr");

    document.querySelectorAll("li").forEach((li, i) => {
        li.style.setProperty("--height", cueArr[i]);
    });

    if(cueArr.length > 20){
        cueArr.shift();
    }
}

function getRandoNum(){
    return Math.round(Math.random() * 100);
}











// eller

// const list = document.querySelector("ul");
// const arrCue = [];
// const li = document.createElement("li");
// const valueArr = [];

// setInterval(genererSoejle, 1000);

// li.style.setProperty("--height", "10");
// list.appendChild(li);




// function genererSoejle() {
//     arrCue.push(getRandomNum());
//     valueArr.push(Math.round(Math.random() * 100));
//     console.log(valueArr);
//     const li = document.createElement("li");
//     li.style.setProperty("--height", Math.round(Math.random() * 100));
//     list.appendChild(li);
//     if(arrCue.length > 20){
//         arrCue.shift();
//     }

//     // console.log("genererSoejle");
// }

// function getRandomNum() {
//     return Math.round(Math.random() * 100);
// }










