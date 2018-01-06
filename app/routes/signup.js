import $ from 'jquery';
import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  routeIfAlreadyAuthenticated: 'main.home.dashboard',
  model() {
    return this.store.createRecord('profile');
  },
  actions: {
    willTransition() {
      $('#signup-modal').modal('hide');

      this._super(...arguments);
    }
  }
});
