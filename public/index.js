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