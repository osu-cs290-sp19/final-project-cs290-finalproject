(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "﻿<!--The basic framework for any of the other pages generated-->\r\n<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>TITLE</title>\r\n\r\n    <!--We can add 3rd party scripts and such here-->\r\n    <link rel=\"stylesheet\" href=\"style.css\" media=\"screen\" />\r\n\r\n    <!--handlebar script to gain access to features-->\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.runtime.js\" charset=\"utf-8\" defer></script>\r\n    <script src=\"/index.js\" charset=\"utf-8\" defer></script>\r\n    <!--Add scripts to include partials here-->\r\n\r\n</head>\r\n\r\n<body>\r\n    <header>\r\n        <h1 class=\"site-title\">TITLE!</h1>\r\n    </header>\r\n    <header>\r\n        <nav class=\"navbar\">\r\n            <ul class=\"navlist\">\r\n                <li class=\"navitem\" id=\"navButton\"><a>Game</a></li>\r\n                <li class=\"navitem\" id=\"navButton\"><a>Rules</a></li>\r\n                <li class=\"navitem\" id=\"navButton\"><a>Highscores</a></li>\r\n\r\n            </ul>\r\n        </nav>\r\n    </header>\r\n    <!--this is where the body of the other pages will go-->\r\n    "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n</body>\r\n\r\n</html>";
},"useData":true});
})();