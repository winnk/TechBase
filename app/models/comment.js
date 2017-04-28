import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  question: DS.belongsTo('rental', { async: true })
});