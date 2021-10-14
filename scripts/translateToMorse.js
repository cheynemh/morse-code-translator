import { alphabet } from "./alphabet";

const translateToMorse = (input) => {
    let inputText = input.toLowerCase();
    const morseArr = [];
    if ((input.length = 0)) {
        alert("please enter something to translate.");
    } else {
        let inputArr = inputText.split("");
        inputArr.forEach((element) => {
            if (alphabet.hasOwnProperty(element)) {
                let translation = alphabet[element];
                morseArr.push(translation);
            }
        });
        let translatedText = morseArr.join(" ");
        return translatedText;
    }
};

// translate.addEventListener("click", () => {
//     let text = input.value.toLowerCase().split(""); // split "" between every character in inputted text
//     for (let i = 0; i < text.length; i++) {
//         text[i] = alphabet[text[i]];
//     }
//     output.value = text.join(" / "); // join morse words with 2 spaces
// });

export default translateToMorse;
