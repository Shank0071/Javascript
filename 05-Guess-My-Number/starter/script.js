'use strict';
const secretNumber = Math.floor(Math.random()*20)+1;
let score = 5;

document.querySelector(".check").addEventListener("click", function() {
    let userGuess = +document.querySelector(".guess").value;
    console.log(typeof userGuess);
    
    if(userGuess === secretNumber) {
        document.querySelector(".message").textContent = "You won!";
        document.querySelector("body").classList.add("green");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".number").classList.add("width");
    } else if (!userGuess) {
        document.querySelector(".message").textContent = "Please enter a number!";
    } else if (userGuess !== secretNumber){
        document.querySelector(".message").textContent = userGuess > secretNumber ? "Too high!" : "Too Low!"
        score -= 1;
        if(score > 0) {
            document.querySelector(".score").textContent = score;
        } else if(!score){
            document.querySelector(".score").textContent = score;
            document.querySelector(".message").textContent = "You lost the game!";
            document.querySelector("body").style.backgroundColor = "red";
        } 
    } else {
        console.log("error");
    }

})

document.querySelector(".again").addEventListener("click", function() {
    setTimeout(() => {window.location.reload();}, 500);
})