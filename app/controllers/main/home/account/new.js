import Ember from 'ember';
import Controller from '@ember/controller';
const { error } = Ember.Logger;

export default Controller.extend({
  actions: {
    save() {
      this.get('model').save().then((account) => {
        if(this.get('balance')) {
          this.get('sessionAccount.profile').then((profile) => {
            const transactionType = this.get('transactionTypes').findBy('isDebit', Number(this.get('balance')) < 0);

            this.store.createRecord('transaction', {
              account,
              amount: Math.abs(this.get('balance')),
              profile,
              transactionType
            }).save().then(() => {
              this.transitionToRoute('main.home.account.edit', account.get('id'));
            });
          });
        } else {
          this.transitionToRoute('main.home.account.edit', account.get('id'));
        }
      }).catch((err) => {
        error(err);
      });
    },
    updateType(id) {
      this.get('model').set('accountType', this.get('accountTypes').findBy('id', id));
    }
  }
});
