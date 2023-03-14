// To get the selected win condition.
const scoreSelector = document.querySelector("#score-select");
scoreSelector.addEventListener('change', function (e) {
    winScore = parseInt(this.value);
    console.log(e);
    reset();
});

// Define winning condition & player scores.
let winScore = scoreSelector.value;
let p1Score = 0;
let p2Score = 0;

// References
const p1Button = document.querySelector("#p1-score");
const p2Button = document.querySelector("#p2-score");
const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');
const scoreboard = document.querySelector('#scoreboard');
const resetButton = document.querySelector('#reset');

// Functions

// updates scoreboard h1 to represent new player scores.
function updateScore() {
    p1Display.innerHTML = p1Score;
    p2Display.innerHTML = p2Score;
}

// checks if a player has reached the winScore
function win(score) {
    if (score >= winScore)
        return true;
    else
        return false;
}

// whenever a player wins, update scoreboard & disable buttons.
function updateForWin(player) {
    if (player === 1)
    {
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
    } else if (player === 2) {
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
    }
    
    // disable score change
    p1Button.disabled = true;
    p2Button.disabled = true;
}

// reset p1 and p2 score to 0, then update the board to show the change.
function reset() {
    p1Score = 0;
    p2Score = 0;

    //reset display
    p1Display.classList.remove(p1Display.classList.value)
    p2Display.classList.remove(p2Display.classList.value)

    //re-enable buttons
    p1Button.disabled = false;
    p2Button.disabled = false;

    
    updateScore();
}

// Behavior
p1Button.addEventListener('click', function (e) {
    p1Score += 1;
    updateScore();
    if (win(p1Score)) {
        updateForWin(1);
    }
});
p2Button.addEventListener('click', function (e) {
    p2Score +=1;
    updateScore();
    if (win(p2Score)) {
        updateForWin(2);
    }
});

resetButton.addEventListener('click', () => reset());

