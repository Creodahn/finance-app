import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import RunMixin from 'ember-lifeline/mixins/run';

export default Route.extend(ApplicationRouteMixin, RunMixin, {
  routeAfterAuthentication: 'main.home',
  actions: {
    setMessage(message) {
      this.runTask(() => {
        this.controller.set('message', message);
      }, 1);
    },
    willTransition() {
      this.actions.setMessage.call(this, null);
    }
  }
});
