import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';

export default BaseModel.extend({
  // attributes
  description: DS.attr('string'),
  isDebt: DS.attr('boolean'),
  name: DS.attr('string'),
  requireRoutingNumber: DS.attr('boolean'),
  // relationships
  accounts: DS.hasMany('account')
});
