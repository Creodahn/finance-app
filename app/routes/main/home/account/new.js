import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('sessionAccount.profile').then((profile) => {
      return hash({
        account: this.store.createRecord('account', { profile }),
        transactionTypes: this.store.findAll('transactionType'),
        types: this.store.findAll('accountType')
      });
    });
  },
  setupController(controller, model) {
    this._super(controller, model.account);

    controller.set('accountTypes', model.types);
    controller.set('transactionTypes', model.transactionTypes);
  }
});
