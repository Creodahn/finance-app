import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { log } = Ember.Logger;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('sessionAccount.profile').then((profile) => {
      log(profile);

      return Ember.RSVP.hash({
        account: this.store.createRecord('account', { profile }),
        types: this.store.findAll('accountType')
      });
    });
  },
  setupController(controller, model) {
    this._super(controller, model.account);

    controller.set('accountTypes', model.types);
  }
});
