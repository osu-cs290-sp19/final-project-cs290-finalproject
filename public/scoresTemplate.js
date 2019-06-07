(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['scoresPage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.newScore,depth0,{"name":"newScore","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<script src=\"/score.js\" charset=\"utf-8\" defer></script>\r\n<link rel=\"stylesheet\" href=\"scorePage.css\" media=\"screen\" />\r\n\r\n<h2 class=\"scoreTitle\">Name: Score</h2>\r\n    <ol class=\"scoreList\">\r\n        <!--template to fill in name and score-->\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.scores : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>";
},"usePartial":true,"useData":true});
})();