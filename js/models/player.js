Bawlin.Player = DS.Model.extend({
  name: DS.attr(),
  position: DS.attr(),
  number: DS.attr(),
  shotAttempts: DS.hasMany('shotAttempt', {async: true})
});
