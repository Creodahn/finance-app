import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  description: DS.attr('string'),
  fileName: DS.attr('string'),
  url: DS.attr('string'),
  // relationships
  imageable: DS.belongsTo('imageable', { polymorphic: true }),
  uploader: DS.belongsTo('profile')
});
