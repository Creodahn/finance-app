import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  routeIfAlreadyAuthenticated: 'main.home',
  actions: {
    willTransition() {
      this._super(...arguments);

      $('#login-modal').modal('hide');
    }
  }
});
