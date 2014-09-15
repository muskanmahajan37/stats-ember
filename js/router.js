Bawlin.Router.map(function() {
  this.resource('games', {path: '/'});
  this.resource('game', {path: 'games/:game_id'}, function(){
    this.resource('player', {path: '/:player_id'}, function(){
      this.resource('shotattempt');
    });
    this.resource('new-player');
  });
  this.resource('new-game');
});
