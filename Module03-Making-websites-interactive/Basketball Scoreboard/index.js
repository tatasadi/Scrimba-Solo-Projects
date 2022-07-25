let homeScore = 0;
let guestScore = 0;

const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

function addOnePointToHome() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
  updateScoreColor();
}

function addTwoPointToHome() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
  updateScoreColor();
}

function addThreePointToHome() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
  updateScoreColor();
}

function addOnePointToGuest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
  updateScoreColor();
}

function addTwoPointToGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
  updateScoreColor();
}

function addThreePointToGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
  updateScoreColor();
}

function newGame() {
  homeScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScore = 0;
  guestScoreEl.textContent = guestScore;
  updateScoreColor();
}

function updateScoreColor() {
  homeScoreEl.classList.remove("score-green");
  homeScoreEl.classList.remove("score-red");
  guestScoreEl.classList.remove("score-green");
  guestScoreEl.classList.remove("score-red");
  if (homeScore > guestScore) {
    homeScoreEl.classList.add("score-green");
    guestScoreEl.classList.add("score-red");
  }
  if (guestScore > homeScore) {
    guestScoreEl.classList.add("score-green");
    homeScoreEl.classList.add("score-red");
  }
}
