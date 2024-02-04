
import { getRandomNumber } from "../utils/numbers.js";
import { getRandomHSLColor } from "../utils/colors.js";
import { $, $$ } from "../utils/dom.js";

const h1 = $("h1");
const btn = $ ("button");
const ps = $$("p");

// h1.textContent = `Random Number: ${getRandomNumber(100)}`;
// console.log(getRandomHSLColor());
// h1.style.backgroundColor = getRandomHSLColor();


function callback() {
    ps.forEach((p) => {
    p.textContent = `Random number: ${getRandomNumber(100)}`;
    p.style.color = getRandomHSLColor();
});
}

btn.addEventListener("click", callback);

