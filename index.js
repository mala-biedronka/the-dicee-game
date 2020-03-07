let randomNumber1 = Math.floor((Math.random() * 6)) + 1;
let randomNumber2 = Math.floor((Math.random() * 6)) + 1;

function diceImage1 () {
    if (randomNumber1 === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    }
    if (randomNumber1 === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    }
    if (randomNumber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    }
    if (randomNumber1 === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    }
    if (randomNumber1 === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    }
    if (randomNumber1 === 6) {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }
}

function diceImage2 () {
    if (randomNumber2 === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }
    if (randomNumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    }
    if (randomNumber2 === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    }
    if (randomNumber2 === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    }
    if (randomNumber2 === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }
    if (randomNumber2 === 6) {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
}

function whoWins () {
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").textContent = "Draw!";
    }
     else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Player 1 Wins";
    }
     else {
        document.querySelector("h1").textContent = "Player 2 Wins";
    }

}

whoWins ();
diceImage1();
diceImage2();





// function getRandomNumber() {
//     return Math.floor((Math.random() * 6)) + 1;
// }
//
// function diceImageBeautiful (selector, number) {
//     document.querySelector(selector).setAttribute('src', "images/dice${number}.png");
// }
// diceImageBeautiful(".img1", getRandomNumber());
// diceImageBeautiful(".img2", getRandomNumber());