import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';

export default BaseModel.extend({
  // attributes
  password: DS.attr('string'),
  username: DS.attr('string', { readOnly: true }),
  // relationships
  profile: DS.belongsTo('profile')
});
