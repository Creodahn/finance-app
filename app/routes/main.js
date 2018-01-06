import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let model = null;

    if(this.get('session.isAuthenticated')) {
      model = this.get('sessionAccount.profile');
    }

    return model;
  }
});
