import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  // attributes
  tagName: 'section',
  classNames: ['ui', 'card', 'full-width'],
  // computed properties
  savedTransactions: computed('model.transactions.length', function() {
    return this.get('model.transactions').map((transaction) => {
      return transaction.get('id') ? transaction : null;
    }).filter((item) => {
      return item !== null;
    });
  }),
  // hooks
  didInsertElement() {
    this.set('now', new Date());
  }
});
