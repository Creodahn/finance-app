import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logOut() {
      const session = this.get('session');

      session.invalidate();
      session.set('data.login', null);
    }
  }
});
