import { getRandomNumber } from "./numbers.js"

function getRandomHSLColor() {
    const h = getRandomNumber(360)
    const s = getRandomNumber(100)
    const l = getRandomNumber(100);

    return `hsl${h}, ${s}%, ${l}%`;
} 