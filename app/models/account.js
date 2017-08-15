import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';

export default BaseModel.extend({
  // attributes
  accountNumber: DS.attr('string'),
  balance: DS.attr('number'),
  description: DS.attr('string'),
  name: DS.attr('string'),
  routingNumber: DS.attr('string'),
  // relationships
  accountType: DS.belongsTo('account-type'),
  profile: DS.belongsTo('profile')
});
