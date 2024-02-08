"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das indhold", location: "p" },
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Indhold", location: "p" },
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
  en: {
    texts: [
      { text: "Content", location: "p" },
      { text: "Boat", location: ".header" },
      { text: "The Robot", location: ".footer" },
    ],
  },
};


let lang = document.querySelector("html").lang;

const selectElement = document.querySelector(".option");
const result = document.querySelector(".result");

// dropdown menu
selectElement.addEventListener("change", (event) => {
  lang = event.target.value;
  result.textContent = `${event.target.value}`;
  languageChange(lang);
});


// for hver enkelte objekt i det valgte sprog
function languageChange(change) {
  console.log(change);

  if(change === "da"){
    result.textContent = "Dansk"
  } else if(change === "de"){
    result.textContent = "Tysk"
  } else {
    result.textContent = "Engelsk"
  }
  texts[change].texts.forEach((each) => {
    console.log(each.text);
    console.log(each.location);
    document.querySelector(each.location).textContent = each.text;
  });
}







