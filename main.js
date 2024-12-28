"use strict";

const ioDiv = document.getElementById("ioDiv");
let equalPressed = true;
let numPressed = false;
let ans;

function pushNumBtn(btnValue) {

    if (equalPressed) {
        ioDiv.innerHTML = "";
        equalPressed = false;
    }
    ioDiv.innerHTML += btnValue;
    numPressed = true;
}
function pushOperatorBtn(btnValue) {
    if (equalPressed) {
        ioDiv.innerHTML = "";
        equalPressed = false;
    }
    ioDiv.innerHTML += " " + btnValue + " ";
}
function pushEqualsBtn() {
    try {
        if (ioDiv.innerHTML === "SyntaxError" || ioDiv.innerHTML == "") {
            return;
        } else {
            ans =  eval(ioDiv.innerHTML);
            ioDiv.innerHTML = ans;
        }
    } catch (error) {
        ioDiv.innerHTML = `SyntaxError`
    } finally {
        equalPressed = true;
        numPressed = false;
    }
}

function clearScreen() {
    ioDiv.innerHTML = "";
}