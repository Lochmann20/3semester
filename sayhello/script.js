"use strict";

// øvelse 1b
// console.log(); betyder at javascript er igang
// firstName i funtionen er en parameter hvor silke er et argument
sayHello("Silke");
function sayHello(firstName){
    console.log("Hello", firstName)
}


// 1 - Funktionen er kaldt på en tidligere linje end den er lavet
// sayHello("Frank"); kan stå ovenover og under function, så længe den ikke er inden i functionen ellers kan functionen ikke køre
// sayHello("Frank");
// function sayHello(firstName){
//     console.log(firstName)
// }
// sayHello("Frank");



// 2 - Funktionen er kaldt med en variabel kaldet myName
// const/let er en variable
// Når "const" diffinere myName i sayHello så systemet kan genkende at det er Bo der skule bruges istedet for
// const myName = "Bo"
// sayHello(myName);
// function sayHello(firstName){
//     console.log("Hello", firstName)
// }


// 3 - Der er en ny variabel kaldet firstName udenfor funktionen
// Det er bare en meget dårlige måde at øve sig på
// Det fungerer på samme måde men er ikke den oprigtige måde at gøre det på som i 2'eren
// const myName = "Bo"
// const firstName = "Ko"
// sayHello(firstName);
// function sayHello(firstName){
//     console.log("Hello", firstName)
// }

// 4 - Funktionen er kaldet uden nogen parameter
// man får ingen værdi, console.log bliver som undefined
// const myName = "Bo"
// const firstName = "Ko"
// sayHello();
// function sayHello(firstName){
//     console.log("Hello", firstName)
// }

// 5 - funktionen er kaldet med firstName og lastName
// Det er række følgen der betyder noget her, så det første navn der bliver vist
// const firstName = "Bo"
// const lastName = "Ko"
// sayHello("Hans", "Jan");
// function sayHello(firstName){
//     console.log("Hello", firstName)
// }

// 6
// Det er række følgen der betyder noget her, så det første navn der bliver vist
// const lastName = "Bo"
// const firstName = "Ko"
// sayHello("Jan", "Hans");
// function sayHello(firstName){
//     console.log("Hello", firstName)
// }














