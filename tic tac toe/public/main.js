"use strict";
let btn = document.querySelectorAll("input");
let xSymbol = "X";
let oSymbol = "O";
let turn = true;
let playerName = "";
let resetBtn = document.getElementsByClassName("reset");
let tossCoin = document.getElementById("toss");
let playersTurn = document.getElementById("playersTurn").innerHTML;
//Coin Toss
tossCoin.addEventListener("click", coinToss);
//Event-resetBtn
for (let i = 0; i < 1; i++) {
    resetBtn[i].addEventListener("click", reset);
}
//Event-Play
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", clicked);
}
function coinToss(e) {
    let element = e.target;
    let i = Math.round(Math.random() * 1);
    let playersTurn = document.getElementById("playersTurn").innerHTML;
    if (i == 0) {
        playerName = "Player X";
        playersTurn = document.getElementById("playersTurn").innerHTML = playerName;
        element.value = xSymbol;
        turn = true;
    }
    else {
        playerName = "Player O";
        playersTurn = document.getElementById("playersTurn").innerHTML = playerName;
        element.value = oSymbol;
        turn = false;
    }
    let unhide = document.getElementById("hidden").style.display = "block";
    let hideBtn = document.getElementById("toss").style.display = "none";
    console.log(playersTurn);
}
function clicked(e) {
    let element = e.target;
    let playersTurn = document.getElementById("playersTurn").innerHTML;
    if (element.value == '') {
        if (turn == true) {
            playerName = "Player O";
            playersTurn = document.getElementById("playersTurn").innerHTML = playerName;
            element.value = xSymbol;
            turn = false;
            playerName = "Player X";
        }
        else {
            playerName = "Player X";
            playersTurn = document.getElementById("playersTurn").innerHTML = playerName;
            element.value = oSymbol;
            turn = true;
            playerName = "Player O";
        }
    }
    checkWin();
    tieGame(8);
}
function reset() {
    let playersTurn = document.getElementById("playersTurn").innerHTML = playerName;
    let btn = document.querySelectorAll("input");
    for (let i = 0; i < btn.length; i++) {
        playerName = "";
        playersTurn = document.getElementById("playersTurn").innerHTML = playerName;
        btn[i].value = "";
        let hide = document.getElementById("hidden").style.display = "none";
        let unhideBtn = document.getElementById("toss").style.display = "block";
    }
}
function checkWin() {
    let btn = document.querySelectorAll("input");
    if (btn[0].value != "") {
        if (btn[0].value == btn[1].value && btn[1].value == btn[2].value) {
            alert(playerName + "Win!");
            reset();
        }
        else if (btn[0].value == btn[3].value && btn[3].value == btn[6].value) {
            alert(playerName + "Win!");
            reset();
        }
        else if (btn[0].value == btn[4].value && btn[4].value == btn[8].value) {
            alert(playerName + "Win!");
            reset();
        }
    }
    if (btn[4].value != "") {
        if (btn[1].value == btn[4].value && btn[4].value == btn[7].value) {
            alert(playerName + "Win!");
            reset();
        }
        else if (btn[2].value == btn[4].value && btn[4].value == btn[6].value) {
            alert(playerName + "Win!");
            reset();
        }
        else if (btn[3].value == btn[4].value && btn[4].value == btn[5].value) {
            alert(playerName + "Win!");
            reset();
        }
    }
    if (btn[8].value != "") {
        if (btn[6].value == btn[7].value && btn[7].value == btn[8].value) {
            alert(playerName + "Win!");
            reset();
        }
        else if (btn[2].value == btn[5].value && btn[5].value == btn[8].value) {
            alert(playerName + "Win!");
            reset();
        }
    }
}
function tieGame(i) {
    if (i == 0) {
        reset();
        alert("DRAW!");
        turn = true;
    }
    let btn = document.querySelectorAll("input");
    if (btn[i].value == xSymbol || btn[i].value == oSymbol) {
        tieGame(i - 1);
    }
}
