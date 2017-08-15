import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';

export default BaseModel.extend({
  // attributes
  description: DS.attr('string'),
  name: DS.attr('string'),
  // relationships
  accounts: DS.hasMany('account')
});
