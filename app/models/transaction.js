import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';
import { computed } from '@ember/object';

export default BaseModel.extend({
  // attributes
  amount: DS.attr('number'),
  isDebit: DS.attr('boolean', { readOnly: true }),
  transactionDate: DS.attr('date' /* , { default: new Date() } */),
  // computed properties
  displayAmount: computed('amount', 'transactionType', function() {
    return this.get('amount') * (this.get('isDebit') ? -1 : 1);
  }),
  // relationships
  account: DS.belongsTo('account'),
  profile: DS.belongsTo('profile'),
  transactionType: DS.belongsTo('transaction-type')
});
