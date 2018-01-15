import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('sessionAccount.profile');
  },
  afterModel(model, transition) {
    if(this.get('session.isAuthenticated')) {
      const targets = ['main.index', 'main'];

      if(targets.indexOf(transition.targetName) > -1) {
        this.transitionTo('main.home.dashboard');
      }
    }
  }
});
