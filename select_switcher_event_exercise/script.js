
// D 13 feb
// ved brug af denne kode så skifter baggrunden farver for hver farve man vælger
// document.querySelector("select").addEventListener("change", selectChange);
// let currentCol = "orange";
// function selectChange(evt) {
//   console.log("change", evt.target.value);
//   document.querySelector("body").style.setProperty("--bgcolor", evt.target.value);
// }



document.querySelector("select").addEventListener("change", selectChange);
let currentCol = "orange";
function selectChange(evt) {
  currentCol = evt.target.value;

  document.querySelector("body").addEventListener("animationend", colorAniEnd);
  console.log("change", evt.target.value);
  document.querySelector("body").style.setProperty("--bgcolor", currentCol);
  document.querySelector("body").classList.add("ani");
}


// ved brug af denne function, der fjerner vi den farve vi gerne vil have vist frem efter den er vist.
function colorAniEnd(){
  document.querySelector("body").classList.remove("ani");

  // Her får vi en mere smooth overgang mellem farverne
  document.querySelector("body").style.backgroundColor = currentCol;
}





