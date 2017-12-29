import Ember from 'ember';
import Controller from '@ember/controller';
const { error } = Ember.Logger;

export default Controller.extend({
  actions: {
    authenticate() {
      this.actions.authenticateWithOAuth2.call(this);
      $('button').blur();
    },
    authenticateWithOAuth2() {
      const session = this.get('session'),
            { username, password } = this.getProperties('username', 'password');

      session.set('data.login', username);

      session.authenticate('authenticator:oauth2', username, password).catch((reason) => {
        error(reason);

        this.send('setMessage', this.get('formatMessage').process('error', JSON.parse(reason).errors[0].detail));
      });
    },
    cancel() {
      $('#login-modal').modal('hide');
      this.transitionToRoute('main');
    }
  }
});
