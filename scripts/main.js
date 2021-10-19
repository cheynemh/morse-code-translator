import { toMorse, toEnglish } from "./translate.js";

const translateToMorse = document.querySelector("#toMorse");
const translateToEnglish = document.querySelector("#toEnglish");

translateToMorse.addEventListener("click", () => {
    let input = document.querySelector("#input").value;
    let output = document.querySelector("#output");

    output.innerHTML = toMorse(input);
});

translateToEnglish.addEventListener("click", () => {
    let input = document.querySelector("#input").value;
    let output = document.querySelector("#output");

    output.innerHTML = toEnglish(input);
});

let btnClear = document.querySelector("#btnClear");
let inputs = document.querySelectorAll(".text-field");

btnClear.addEventListener("click", () => {
    inputs.forEach((input) => (input.value = ""));
});
