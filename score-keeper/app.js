// To get the selected win condition.
const scoreSelector = document.querySelector("#score-select");
scoreSelector.addEventListener('change', function (e) {
    winScore = e.target.value;
    console.log(e);
    // TODO: Reset score when winScore is changed.
});

// Define winning condition & player scores.
let winScore = scoreSelector.value;
let p1Score = 0;
let p2Score = 0;

// References
const p1Button = document.querySelector("#p1-score");
const p2Button = document.querySelector("#p2-score");
const scoreboard = document.querySelector('#scoreboard');
const resetButton = document.querySelector('#reset');

// Functions

// updates scoreboard h1 to represent new player scores.
function updateScore() {
    scoreboard.innerHTML = `${p1Score} to ${p2Score}`;
}

// checks if a player has reached the winScore
function win(score) {
    if (score >= winScore)
        return true;
    else
        return false;
}

// reset p1 and p2 score to 0, then update the board to show the change.
function reset() {
    p1Score = 0;
    p2Score = 0;
    updateScore();
}

// Behavior
p1Button.addEventListener('click', function (e) {
    p1Score += 1;

    if (win(p1Score)) console.log("Player 1 WINS!");

    updateScore();
});
p2Button.addEventListener('click', function (e) {
    p2Score +=1;

    if (win(p2Score)) console.log("Player 2 WINS!");

    updateScore();
});

resetButton.addEventListener('click', () => reset());

