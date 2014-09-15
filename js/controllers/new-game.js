Bawlin.NewGameController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newGame = this.store.createRecord('game', {
        date: this.get('date'),
        homeTeam: this.get('homeTeam'),
        awayTeam: this.get('awayTeam')
      });
      newGame.save();
      this.transitionToRoute('games');
    }
  }
});
