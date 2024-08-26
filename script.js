const input = document.querySelector("input");
const copyBtn = document.querySelector("#copyBtn");
const GenBtn = document.querySelector("button");

const lenght = 16;

const UpperCase = "ABCDEFGHIJKLOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklopqrstuvwxyz";
const number = "0123456789";
const symbol = "`~!@#$%^&*()-_=+[]{}:;,<>./?/*-+";

const allChars = UpperCase + LowerCase + number + symbol;

GenBtn.addEventListener("click", e=> {
    let password = "";

    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    input.value = password;
})

copyBtn.addEventListener("click", e=> {
    input.select();
    document.execCommand("copy")
})

