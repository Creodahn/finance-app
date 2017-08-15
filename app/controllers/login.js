import Ember from 'ember';
const { error, log } = Ember.Logger;

export default Ember.Controller.extend({
  actions: {
    authenticate() {
      this.actions.authenticateWithOAuth2.call(this);
      $('button').blur();
    },
    authenticateWithOAuth2() {
      const session = this.get('session'),
            { username, password } = this.getProperties('username', 'password');

      session.set('data.login', username);

      session.authenticate('authenticator:oauth2', username, password).then(() => {
        log('authenticated!');
      }).catch((reason) => {
        error(reason);
      });
    },
    cancel() {
      this.transitionToRoute('main');
    }
  }
});
