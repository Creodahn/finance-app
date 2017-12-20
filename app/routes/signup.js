import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  routeIfAlreadyAuthenticated: 'main.home',
  model() {
    return this.store.createRecord('profile');
  },
  actions: {
    willTransition() {
      this._super(...arguments);

      $('#signup-modal').modal('hide');
    }
  }
});
