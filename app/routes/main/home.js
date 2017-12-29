import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  afterModel(model, transition) {
    const targets = ['main.home.index', 'main.home'];

    if(targets.indexOf(transition.targetName) > -1) {
      this.transitionTo('main.home.dashboard');
    }
  }
});
