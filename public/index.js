var roundScore = 0;

//Code for dice game
window.addEventListener('DOMContentLoaded', function () {
    //if the roll button is clicked this adds the dice
    var rollButton = document.getElementById('rollBTN');
    if (rollButton) {
        rollButton.addEventListener('click', handleDiceRoll());
    }
});

//this rolls and renders the dice
function handleDiceRoll() {
    var rolls = [];

    for (var i = 0; i < 5; i++) {
        rolls[i] = getRandomInt(5) + 1;
        var curDie = "dice" + (i + 1);
        document.getElementById(curDie).src = "./dice/" + (i + 1) + ".PNG";
        document.getElementById(curDie).classList.remove("inactive");
        roundScore += rolls[i];
    }
    alert("Nice! You scored a " + roundScore+ "! Play Again!");
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function handleScoreSave() {
    var name = document.getElementById('name-input').value.trim();

    if (!name) {
        alert("Must provide a name!");
    }
    else {
        var postReq = new XMLHttpRequest();
        var reqUrl = '/scores/addScore';
        postReq.open('POST', reqUrl);
    }
}