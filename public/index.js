var roundScore = 0;
var round = 1;

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
    var lastRolls = [];
    roundScore = 0;

    for (var i = 0; i < 5; i++) {
        lastRolls[i] = rolls[i];
        rolls[i] = getRandomInt(5) + 1;                                      //returns a random int between 0 and 5, +1 to move range to 1
        var curDie = "dice" + (i + 1);
        document.getElementById(curDie).src = "./dice/" + rolls[i] + ".PNG"; //give the current diceID the proper source
        if (round >= 2) {
            var lastDie = "lastdice" + (i + 1);
            document.getElementById(lastDie).classList.remove("inactive");
            document.getElementById(lastDie).style.display = "inline-block"
            document.getElementById(lastDie).src = "./dice/" + lastRolls[i] + ".PNG"; 
        }
        document.getElementById(curDie).classList.remove("inactive");        //dissable the "inactive" class name for the images. This removed the display: none; in GameStyle.css
        document.getElementById(curDie).style.display = "inline-block";
        document.getElementById("finalScoreLabel").innerHTML = "You Scored: " + roundScore;
        document.getElementById("roundLabel").innerHTML = "Current Round: " + round + "  <>  ";
        roundScore += rolls[i];
    }
    round++;
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