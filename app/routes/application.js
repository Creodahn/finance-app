import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  routeAfterAuthentication: 'main.home',
  actions: {
    setMessage(message) {
      this.controller.set('message', message);
    },
    willTransition() {
      this.actions.setMessage.call(this, null);
    }
  }
});
