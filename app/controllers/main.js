import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    logOut() {
      const session = this.get('session');

      session.invalidate();
      session.set('data.login', null);
    }
  }
});
