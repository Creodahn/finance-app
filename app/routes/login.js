import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  routeIfAlreadyAuthenticated: 'main.home',
  actions: {
    willTransition() {
      this._super(...arguments);

      $('#login-modal').modal('hide');
    }
  }
});
