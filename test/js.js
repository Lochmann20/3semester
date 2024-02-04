
// I denne funktion vælger vi at gøre billederne sort og hvid i stedetfor farvet ved at bruge = grayscale(100%)
// article skriver vi fordi der er der vores billeder ligger under
// each
// filter
document.querySelectorAll("article").forEach(each=>{
    each.style.filter ="grayscale(100%)";
    each.addEventListener("pointerover", pointerOver);
    each.addEventListener("pointerout", pointerOut);
})

// Denne funktion gør/betyder at så snart mussen er over et billedet/teksten så kommer der farve på dem
// T = Target (de små/enkelte elementer)
// CT = CurrenTarget (Hele articlen)
function pointerOver(evt){
    console.log("CT", evt.currentTarget);
    console.log("T", evt.currentTarget);

    evt.currentTarget.style.filter = "none";
}

// Denne funktion betyder/gør at så snart mussen ikke er over billedet/teksten længere så bliver billedet sort/hvid igen
function pointerOut(evt){
    evt.currentTarget.style.filter = "grayscale(100%)";
}








