import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { log } = Ember.Logger;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('sessionAccount.profile').then((profile) => {
      return Ember.RSVP.hash({
        account: this.store.createRecord('account', { profile }),
        transactionTypes: this.store.findAll('transactionType'),
        types: this.store.findAll('accountType')
      });
    });
  },
  setupController(controller, model) {
    this._super(controller, model.account);

    log(model.transactionTypes);

    controller.set('accountTypes', model.types);
    controller.set('transactionTypes', model.transactionTypes);
  }
});
