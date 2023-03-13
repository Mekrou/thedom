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

