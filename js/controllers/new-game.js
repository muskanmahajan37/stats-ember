Bawlin.NewGameController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newGame = this.store.createRecord('game', {
        date: this.get('date')
      });
      newGame.save();
      this.transitionToRoute('games');
    }
  }
});
