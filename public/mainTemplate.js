(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['404Page'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main>\n	<h1 style=\"text-align: center;\">404 Error!</h1>\n	<h2 style=\"text-align: center;\">We were unable to find the specified page!</h2>\n\n	<h4 style=\"text-align: center;\">Click <a href=\"/\">here</a> to play the game.</h4>\n</main>";
},"useData":true});
templates['gamePage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.dieImg,depth0,{"name":"dieImg","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<script src=\"index.js\" charset=\"utf-8\" defer></script>\n<main>\n    <h1 style=\"text-align: center; color: white\">Lets Roll Some Dice!</h1>\n    <div id=\"GameBoard\">\n        <button id=\"rollBTN\">Roll</button>\n\n        <!--I was thinking this could be the spot for the random dice-->\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.renDice : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <!--<div id=\"playerHand\" class=\"fan active-hand\" data-fan='spacing: 0.2; width: 80; radius: 80; cards: AH, KH, QH, JH, QS'></div>\n        <div id=\"CPU_LEFT\" class=\"hand\" data-hand=\"x: -50; cards: 2H, 3H, 4H, 5H, 6H\"></div>\n        <div id=\"CPU_UP\" class=\"hand\" data-hand=\"y: -50; cards: AC, 2C, 3C, 4C, 5C\"></div>\n        <div id=\"CPU_RIGHT\" class=\"hand\" data-hand=\"x:  50; cards: AD, 2D, 3D, 4D, 5D\"></div>-->\n    </div>\n\n</main>\n<footer>\n    <p>This game is still a WIP</p>\n</footer>\n";
},"usePartial":true,"useData":true});
templates['rulesPage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main>\n    <div class=\"RuleBook\">\n        <div class=\"RuleBlock\">\n        	<h2>Game Objectives</h2>\n        	<p>To be the player with the highest score at the end of the game.</p>\n        </div>\n        <div class=\"RuleBlock\">\n        	<h2>Dice Values</h2>\n        		<p>Each die has the value corresponding to the number of dots showing</p>\n        </div>\n        <div class=\"RuleBlock\">\n        	<h2>Scoring</h2>\n        		<p>At the end of the roll, the total of all the dice are added and that is the final score</p>\n        </div>\n        <br><br>\n    </div>\n</main>\n";
},"useData":true});
templates['scoresPage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.newScore,depth0,{"name":"newScore","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<script src=\"/score.js\" charset=\"utf-8\" defer></script>\n<link rel=\"stylesheet\" href=\"scorePage.css\" media=\"screen\" />\n\n<div class=\"scoretab\">\n<h2 class=\"scoreTitle\">Top Scores</h2>\n    <ol class=\"scoreList\">\n        <!--template to fill in name and score-->\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.scores : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\n    <p style=\"text-align: center;\">-- Higher is better --</p>\n</div>\n";
},"usePartial":true,"useData":true});
templates['settingsPage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<head><title>Hearts - Play!</title></head>\n<body>\n    <h3 style=\"text-align: center;\">Change game settings here</h3>\n</body>\n";
},"useData":true});
templates['main'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "﻿<!--The basic framework for any of the other pages generated-->\n<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\"/>\n    <title>Dice</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <!--We can add 3rd party scripts and such here-->\n    <!--<link rel=\"stylesheet\" type=\"text/css\" href=\"https://unpkg.com/cardsJS/dist/cards.min.css\"/>-->\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\"/>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"GameStyle.css\"/>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"cards.css\"/>\n\n    <!--handlebar script to gain access to features-->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.runtime.js\" charset=\"utf-8\" defer></script>\n    <!--<script src=\"https://unpkg.com/cardsJS/dist/cards.min.js\" type=\"text/javascript\"></script>-->\n    <!--<script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js\" type='text/javascript'></script>-->\n    <!--<script src='http://cdnjs.cloudflare.com/ajax/libs/knockout/3.1.0/knockout-min.js' type='text/javascript'></script>-->\n    <!--<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js\" type='text/javascript'></script>-->\n    <!--<script src=\"https://unpkg.com/cardsJS/dist/cards.min.js\" type=\"text/javascript\"></script>-->\n</head>\n\n<body>\n    <header>\n        <h1 class=\"site-title\">Dice - A Timeless Classic</h1>\n    </header>\n    <header>\n        <nav class=\"navbar\">\n            <ul class=\"navlist\">\n                <li class=\"navitem\" id=\"navButton\"><a href=\"/\">Play!</a></li>\n                <li class=\"navitem\" id=\"navButton\"><a href=\"/rules\">Rules</a></li>\n                <li class=\"navitem\" id=\"navButton\"><a href=\"/scores\">Highscores</a></li>\n                <li class=\"navitem\" id=\"navButton\"><a href=\"/settings\">Settings</a></li>\n\n            </ul>\n        </nav>\n    </header>\n    <!--this is where the body of the other pages will go-->\n    <main class=\"playSpace\">\n    "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </main>\n</body>\n\n</html>\n";
},"useData":true});
templates['newScore'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n    <div class=\"score\">\n        <h2 class=\"scoreName\">\n            "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ": "
    + alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data}) : helper)))
    + "\n            <button id=\"deleteButton\" onclick=\"deleteScore()\">DELETE</button>\n        </h2>\n    </div>\n</li>\n\n<script>\n    function deleteScore() {\n        //send some kind of request to access db\n        console.log(\"Delete this score\");\n    }\n</script>";
},"useData":true});
templates['dieImg'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span id=\"dieImage\">\n    <!-- randomly assign and image of die -->\n    <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"image","hash":{},"data":data}) : helper)))
    + "\" />\n</span>";
},"useData":true});
})();