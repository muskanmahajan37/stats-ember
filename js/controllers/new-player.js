Bawlin.NewPlayerController = Ember.Controller.extend({
  needs: "game",
  actions: {
    save: function() {
      var newPlayer = this.store.createRecord('player', {
        name: this.get('name'),
        position: this.get('position'),
        number: this.get('number')
      });
      newPlayer.save();

      var game = this.get('controllers.game.model');
      game.get('players').pushObject(newPlayer);
      game.save();

      this.transitionToRoute('game', game.id);
    }
  }
});
