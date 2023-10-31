let player1score = 0;
let player2score = 0;
let player1turn = true;

const player1 = document.getElementById("Player1");
const player2 = document.getElementById("Player2");
const messagetext = document.getElementById("message");
const score1 = document.getElementById("Score1");
const score2 = document.getElementById("Score2");

const roll1 = document.getElementById("roll1");
const roll2 = document.getElementById("roll2");
const reset = document.getElementById("reset");

roll1.addEventListener("click", startGame);
roll2.addEventListener("click", startGame);
reset.addEventListener("click", startNewgame);

function images(randomNumber) {
  var dice = "img/" + "Dice-" + randomNumber + ".png";
  var img = document.querySelectorAll("img")[0];
  img.setAttribute("src", dice);
}

function enableRoll1() {
  document.getElementById("roll2").setAttribute("disabled", "true");
  document.getElementById("roll1").removeAttribute("disabled");
}

function enableRoll2() {
  document.getElementById("roll1").setAttribute("disabled", "true");
  document.getElementById("roll2").removeAttribute("disabled");
}

function resetgame() {
  reset.style.display = "block";
  roll1.style.display = "None";
  roll2.style.display = "None";
}

function startGame() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  images(randomNumber);
  if (player1turn) {
    player1score += randomNumber;
    score1.textContent = player1score;
    player1.classList.remove("active");
    player2.classList.add("active");
    enableRoll2();
    messagetext.textContent = "Player-2 turn";
  } else {
    player2score += randomNumber;
    score2.textContent = player2score;
    player2.classList.remove("active");
    player1.classList.add("active");
    enableRoll1();
    messagetext.textContent = "Player-1 turn";
  }

  if (player1score >= 30) {
    messagetext.textContent = "Player 1 Won";
    resetgame();
  } else if (player2score >= 30) {
    messagetext.textContent = "Player 2 Won";
    resetgame();
  }
  player1turn = !player1turn;
}

function startNewgame() {
  window.location.reload();
}
