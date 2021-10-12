// dom
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const translate = document.querySelector("#button");

const alphabet = {
    //.toLowerCase
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
};

translate.addEventListener("click", () => {
    text = input.value.toLowerCase().split(""); // split "" between every character in text
    for (i = 0; i < text.length; i++) {
        text[i] = alphabet[text[i]];
    }
    output.value = text.join(" ");
});
