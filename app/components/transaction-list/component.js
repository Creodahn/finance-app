import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  // attributes
  tagName: 'section',
  classNames: ['ui', 'card', 'full-width'],
  // computed properties
  balance: computed('model.@each.{amount,isDebit}', function() {
    const transactions = this.get('model').map((transaction) => {
      return transaction.get('amount') * (transaction.get('isDebit') ? -1 : 1);
    });

    return transactions.length > 0 ? transactions.reduce((i, c) => {
      return i + c;
    }) : 0;
  }),
  isNegative: computed('balance', function() {
    return this.get('balance') < 0;
  })
});
