//The fourth solution
let leftRandomNumber = Math.floor(Math.random() * 6) + 1;
let rightRandomNumber = Math.floor(Math.random() * 6) + 1;

let leftImage = `images/dice${leftRandomNumber}.png`;
let rightImage= `images/dice${rightRandomNumber}.png`;

let leftDice = document.querySelectorAll("img")[0];
let rightDice = document.querySelectorAll("img")[1];

function changeLeftImage (image) {
        leftDice.setAttribute("src", image);
}

function changeRightImage (image) {
        rightDice.setAttribute("src", image);
}

function whoWins () {
        if (leftRandomNumber > rightRandomNumber) {
                document.querySelector("h1").textContent = "🚩 Player 1 wins!";
        } else if (leftRandomNumber < rightRandomNumber) {
                document.querySelector("h1").textContent = "Player 2 wins! 🚩 ";
        } else {
                document.querySelector("h1").textContent = "🚩 Draw! 🚩";
        }
}

changeLeftImage(leftImage);
changeRightImage(rightImage);
whoWins();



//The first solution

// let randomNumber1 = Math.floor((Math.random() * 6)) + 1;
// let randomNumber2 = Math.floor((Math.random() * 6)) + 1;
//

// function diceImage1 () {
//     if (randomNumber1 === 1) {
//         document.querySelector(".img1").setAttribute("src", "images/dice1.png");
//     }
//     if (randomNumber1 === 2) {
//         document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//     }
//     if (randomNumber1 === 3) {
//         document.querySelector(".img1").setAttribute("src", "images/dice3.png");
//     }
//     if (randomNumber1 === 4) {
//         document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//     }
//     if (randomNumber1 === 5) {
//         document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//     }
//     if (randomNumber1 === 6) {
//         document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//     }
// }
//
// function diceImage2 () {
//     if (randomNumber2 === 1) {
//         document.querySelector(".img2").setAttribute("src", "images/dice1.png");
//     }
//     if (randomNumber2 === 2) {
//         document.querySelector(".img2").setAttribute("src", "images/dice2.png");
//     }
//     if (randomNumber2 === 3) {
//         document.querySelector(".img2").setAttribute("src", "images/dice3.png");
//     }
//     if (randomNumber2 === 4) {
//         document.querySelector(".img2").setAttribute("src", "images/dice4.png");
//     }
//     if (randomNumber2 === 5) {
//         document.querySelector(".img2").setAttribute("src", "images/dice5.png");
//     }
//     if (randomNumber2 === 6) {
//         document.querySelector(".img2").setAttribute("src", "images/dice6.png");
//     }
// }
//
// function whoWins () {
//     if (randomNumber1 === randomNumber2) {
//         document.querySelector("h1").textContent = "Draw!";
//     }
//      else if (randomNumber1 > randomNumber2) {
//         document.querySelector("h1").textContent = "Player 1 Wins";
//     }
//      else {
//         document.querySelector("h1").textContent = "Player 2 Wins";
//     }
//
// }
//
// whoWins ();
// diceImage1();
// diceImage2();




//The second solution
// function getRandomNumber() {
//     return Math.floor(Math.random() * 6) + 1;
// }
//
// function diceImageBeautiful (selector, number) {
//     document.querySelector(selector).setAttribute('src', `images/dice${number}.png`);
// }
// diceImageBeautiful(".img1", getRandomNumber());
// diceImageBeautiful(".img2", getRandomNumber());
//




//The third solution
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
//
// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
//
// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//
// var image1 = document.querySelectorAll("img")[0];
//
// image1.setAttribute("src", randomImageSource);
//
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//
//
// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//     document.querySelector("h1").innerHTML = "Draw!";
// }
