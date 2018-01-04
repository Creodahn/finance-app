import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return hash({
      account: this.store.findRecord('account', params.id),
      transactionTypes: this.store.findAll('transaction-type')
    });
  },
  setupController(controller, model) {
    this._super(controller, model.account);

    controller.set('transactionTypes', model.transactionTypes);
  }
});
