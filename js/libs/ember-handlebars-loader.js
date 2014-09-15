var EmberHandlebarsLoader = {
  loadTemplates: function(templateNames) {
    for (var i = 0; i < templateNames.length; i++) {
      var name = templateNames[i];
      $.ajax({
        url: "js/templates/" + name + ".hbs",
        async: false,
        success: function(template) {
          var compiledTemplate = Ember.Handlebars.precompile(template);
          Ember.TEMPLATES[name] = Ember.Handlebars.template(compiledTemplate);
        }
      });
    }
  }
};
