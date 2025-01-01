"use strict";

const ioDiv = document.getElementById("ioDiv");
let equalPressed = true;
let numPressed = false;
let ans;

let π = Math.PI;

function sqrt(val) {
    return Math.sqrt(val);
}
function sin(val) {
    return Math.sin(val);
}
function cos(val) {
    return Math.cos(val);
}
function tan(val) {
    return Math.tan(val);
}

function pushNumBtn(btnValue) {

    if (equalPressed) {
        ioDiv.innerHTML = "";
        equalPressed = false;
    }
    ioDiv.innerHTML += btnValue;
    numPressed = true;
}
function pushOperatorBtn(btnValue, addBracket = false) {
    if (equalPressed) {
        ioDiv.innerHTML = "";
        equalPressed = false;
    }
    if (addBracket) {
        ioDiv.innerHTML += " " + btnValue + "( ";
    } else {
        ioDiv.innerHTML += " " + btnValue + " "
    }
}
function pushEqualsBtn() {
    try {
        if (ioDiv.innerHTML === "SyntaxError" || ioDiv.innerHTML == "") {
            return;
        } else {
            const calculateString = ioDiv.innerHTML.replace(/\^/g,"**").replace(/√/g,"sqrt").replace(/\)\s+\d|\d\s+\(/g, (match) => match.replace(/\s+/g, '*')); 
            
            // console.log("ioDiv",ioDiv.innerHTML); 
            // console.log(calculateString);

            ans = eval(calculateString);
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