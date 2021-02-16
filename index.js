
//generating a random number between 1 to 6 for the 6 dice images
var randomNumber1= Math.floor((Math.random()*6)+1);
var randomNumber2= Math.floor((Math.random()*6)+1);

//getting source for one random dice at a time
var imageNumber1="images/dice"+randomNumber1+".png";
var imageNumber2="images/dice"+randomNumber2+".png";

//fetching the image elements and setting their source to a random dice image
document.querySelector(".img1").src=imageNumber1;
document.querySelector(".img2").src=imageNumber2;

//conditions for winning a Game or a draw depending on bigger number on Dice.

if(randomNumber1>randomNumber2){
  document.querySelector(".container h1").textContent="⛳️ Player 1 Wins!"
}
else if(randomNumber1<randomNumber2){
  document.querySelector(".container h1").textContent="Player 2 Wins! ⛳️"
}
else{
  document.querySelector(".container h1").textContent="🤝 Draw! 🤝"
}
