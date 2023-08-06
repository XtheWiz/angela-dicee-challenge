let randomNumber1 = Math.random();
let randomNumber2 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);

let dice1 = "./images/dice" + randomNumber1 + ".png";
let dice2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

let h1 = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  h1.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  h1.textContent = "Player 2 Wins! 🚩";
} else {
  h1.textContent = "Draws !!!";
}