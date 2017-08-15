import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';

export default BaseModel.extend({
  // relationships
  group: DS.belongsTo('group'),
  profile: DS.belongsTo('profile')
});
