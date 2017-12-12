import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';

export default BaseModel.extend({
  // attributes
  amount: DS.attr('number'),
  // relationships
  account: DS.belongsTo('account'),
  profile: DS.belongsTo('profile'),
  transactionType: DS.belongsTo('transaction-type')
});
