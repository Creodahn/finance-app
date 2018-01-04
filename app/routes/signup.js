import $ from 'jquery';
import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
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
