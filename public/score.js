//Create and add a new score item to the list on the scores page
function insertNewScore(scoreName, scoreScore) {
    var newScore = {
        name: scoreName,
        score: scoreScore
    };
    var newScoreHTML = Handlebars.templates.newScore(newScore);
    var scoreContainer = document.getElementsByClassName(scoreList);
    scoreContainer.insertAdjacentHTML('beforeend', newScoreHTML);
}
