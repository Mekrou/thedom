// To get the selected win condition.
const scoreSelector = document.querySelector("#score-select");
scoreSelector.addEventListener('change', function (e) {
    winScore = e.target.value;
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

// whenever a player wins, update scoreboard & disable buttons.
function updateForWin(player) {
    if (player === 1)
    {
        scoreboard.innerHTML = "Player 1 WINS!"
    } else if (player === 2) {
        scoreboard.innerHTML = "Player 2 WINS!"
    }
    
    // disable score change
    p1Button.disabled = true;
    p2Button.disabled = true;
}

// reset p1 and p2 score to 0, then update the board to show the change.
function reset() {
    p1Score = 0;
    p2Score = 0;

    //re-enable buttons
    p1Button.disabled = false;
    p2Button.disabled = false;

    
    updateScore();
}

// Behavior
p1Button.addEventListener('click', function (e) {
    p1Score += 1;

    if (win(p1Score)) {
        updateForWin(1);
        
        // prevent scoreboard from being over-ridden in line 73
        return
    }

    updateScore();
});
p2Button.addEventListener('click', function (e) {
    p2Score +=1;

    if (win(p2Score)) {
        updateForWin(2);
        
        //prevent scoreboard from being over-ridden. in like 82
        return
    }

    updateScore();
});

resetButton.addEventListener('click', () => reset());

