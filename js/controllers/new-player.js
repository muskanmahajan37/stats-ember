Bawlin.NewPlayerController = Ember.Controller.extend({
  needs: "game",
  teams: function(){
    var home = this.get("controllers.game.homeTeam")
    var away = this.get("controllers.game.awayTeam")
    var teams = [home, away]
    return teams
  }.property(),
  actions: {
    save: function() {
      var newPlayer = this.store.createRecord('player', {
        name: this.get('name'),
        position: this.get('position'),
        number: this.get('number'),
        team: this.get('team')
      });
      newPlayer.save();

      var game = this.get('controllers.game.model');
      game.get('players').pushObject(newPlayer);
      game.save();

      this.transitionToRoute('game', game.id);
    }
  }
});
