import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';

export default BaseModel.extend({
  // attributes
  action: DS.attr('string'),
  columnName: DS.attr('string'),
  currentValue: DS.attr('string'),
  initialValue: DS.attr('string'),
  recordId: DS.attr('number'),
  recordType: DS.attr('string'),
  // relationships
  auditable: DS.belongsTo('auditable', { polymorphic: true }),
  profile: DS.belongsTo('profile')
});
