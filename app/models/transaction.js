import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';
import { computed } from '@ember/object';

export default BaseModel.extend({
  // attributes
  amount: DS.attr('number'),
  // computed properties
  displayAmount: computed('amount', 'transactionType', function() {
    return this.get('amount') * (this.get('transactionType.isDebit') ? -1 : 1);
  }),
  // relationships
  account: DS.belongsTo('account'),
  profile: DS.belongsTo('profile'),
  transactionType: DS.belongsTo('transaction-type')
});
