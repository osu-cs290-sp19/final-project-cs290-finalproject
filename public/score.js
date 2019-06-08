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


var scoreList = document.getElementsByClassName('navitem');
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', handleNavItemClicked);
}


 function handleNavItemClicked(event) {
//get name of tag and open corresponding page
    if (event.target.textContent == 'Game')
        //res.status(200).render('gamePage');
        console.log('game page gets loaded');
