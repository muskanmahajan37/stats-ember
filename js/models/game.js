Bawlin.Game = DS.Model.extend({
  date: DS.attr(),
  homeTeam: DS.attr(),
  awayTeam: DS.attr(),
  homeScore: DS.attr(),
  awayScore: DS.attr(),
  players: DS.hasMany('player', {async: true}),
  shotAttempts: DS.hasMany('shotAttempt', {async: true})
});
