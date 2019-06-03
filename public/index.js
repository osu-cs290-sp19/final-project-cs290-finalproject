//add js here for index page

var navItems = document.getElementsByClassName('navitem');

navItems.addEventListener('click', function (event) {
    //get name of tag and open corresponding page
    if (event.target.textContent == 'Game')
        console.log("Open the game page (home page)");
    else if (event.target.textContent == 'Rules')
        console.log("Open the rules page");
    else if (event.target.textContent == 'Customize')
        console.log("Open the customization page");
});