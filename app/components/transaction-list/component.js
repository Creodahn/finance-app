import Component from '@ember/component';
import { computed } from '@ember/object';
const { reads } = computed;

export default Component.extend({
  // attributes
  tagName: 'section',
  classNames: ['ui', 'card', 'full-width'],
  // computed properties
  transactions: reads('model.transactions'),
  savedTransactions: computed('transactions.@each.id', function() {
    return this.get('transactions').map((transaction) => {
      return transaction.get('id') ? transaction : null;
    }).filter((item) => {
      return item !== null;
    });
  }),
  // hooks
  didInsertElement() {
    this._super(...arguments);

    this.set('now', new Date());
  }
});
