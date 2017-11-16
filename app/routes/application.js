import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    setMessage(message) {
      this.controller.set('message', message);
    },
    willTransition() {
      this.actions.setMessage.call(this, null);
    }
  }
});
