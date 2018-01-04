import $ from 'jquery';
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTransaction() {
      this.set('newTransaction', this.store.createRecord('transaction', {
        account: this.get('model')
      }));

      $('#transaction-modal').modal('show');
    },
    cancelAdd() {
      this.get('newTransaction').deleteRecord();
    },
    completeAdd() {
      const transaction = this.get('newTransaction');

      $('#transaction-modal-ok').addClass('loading');

      this.get('sessionAccount.profile').then((profile) => {
        transaction.set('profile', profile);

        transaction.save().then((transaction) => {
          this.get('model.transactions').addObject(transaction);

          this.get('model').save().then(() => {
            $('#transaction-modal').modal('hide');
            $('#transaction-modal-ok').removeClass('loading');
          });
        });
      });
    },
    setTransactionDate(date) {
      this.set('newTransaction.transactionDate', date);
    },
    updateTransactionType(id) {
      this.get('newTransaction').set('transactionType', this.get('transactionTypes').findBy('id', id));
    }
  }
});
