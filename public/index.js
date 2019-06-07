//add js here for index page

var navItems = document.getElementsByClassName('navitem');
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', handleNavItemClicked);
}


function handleNavItemClicked(event) {
//get name of tag and open corresponding page
    if (event.target.textContent == 'Game')
        //res.status(200).render('gamePage');
        console.log('game page gets loaded');

    else if (event.target.textContent == 'Rules')
        res.status(200).render('rulesPage');
        console.log('rules page gets loaded');

    else if (event.target.textContent == 'Customize')
        //res.status(200).render('customizePage');
        console.log('customize page gets loaded');

    else if (event.target.textContent == 'Highscores')
        console.log('highscores get loaded');
}