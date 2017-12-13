import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  action: DS.attr('string'),
  columnName: DS.attr('string'),
  createdAt: DS.attr('date', { readOnly: true }),
  currentValue: DS.attr('string'),
  initialValue: DS.attr('string'),
  recordId: DS.attr('number'),
  recordType: DS.attr('string'),
  updatedAt: DS.attr('date', { readOnly: true }),
  // relationships
  auditable: DS.belongsTo('auditable', { polymorphic: true }),
  profile: DS.belongsTo('profile')
});
