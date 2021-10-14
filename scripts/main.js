import { alphabet } from "./alphabet.js";
// import { morse } from "./morse.js";
// import { translate } from "./translateToMorse.js";

// dom
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const translate = document.querySelector("#translateButton");
const clear = document.querySelector("#clearButton");

translate.addEventListener("click", () => {
    let text = input.value.toLowerCase().split(""); // split "" between every character in inputted text
    for (let i = 0; i < text.length; i++) {
        text[i] = alphabet[text[i]];
    }
    output.value = text.join(" "); // join between morse characters
});

// submit.addEventListener("click", () => {
//     let inputText = document.querySelector("#input");
//     let translatedText = translate(inputText.value);
//     document.querySelector("#output").innerHTML = translatedText;
// });

clearInput.addEventListener("click", () => {
    input.value = "";
});

clearOutput.addEventListener("click", () => {
    output.value = "";
});
