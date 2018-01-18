import $ from 'jquery';
import Ember from 'ember';
import verifyEmail from 'finance-app/utils/verify-email';
import Controller from '@ember/controller';
import ENV from 'finance-app/config/environment';
import { run } from '@ember/runloop';
const { error } = Ember.Logger;

export default Controller.extend({
  actions: {
    cancel() {
      $('#signup-modal').modal('hide');

      // only rollback attributes on a record that was changed and not saved
      if(Object.keys(this.get('model').changedAttributes()).length > 0) {
        this.get('model').rollbackAttributes();
      }

      this.transitionToRoute('main');
    },
    signUp() {
      const email = this.get('model.email'),
            password = this.get('password');
      let message = null;

      $.ajax({
        type: 'GET',
        url: `${ENV.APP.apiURL}/api/confirmemail?email=${email}`
      }).done((response) => {
        switch(true) {
          case response.data.toArray()[0]:
            message = this.get('formatMessage').process('error', 'The provided email cannot be used to create an account. Please try another email');
            break;
          case !this.get('model.name'):
            message = this.get('formatMessage').process('error', 'You must provide a name');
            break;
          case !email:
            message = this.get('formatMessage').process('error', 'You must provide an email');
            break;
          case !verifyEmail(email):
            message = this.get('formatMessage').process('error', 'The email you provided is not valid');
            break;
          case !password:
            message = this.get('formatMessage').process('error', 'You must provide a password');
            break;
          case !this.get('passwordConfirm'):
            message = this.get('formatMessage').process('error', 'You must confirm your password');
            break;
          case password !== this.get('passwordConfirm'):
            message = this.get('formatMessage').process('error', 'The password and confirmation you provided do not match');
            break;
          default:
            run(() => {
              this.store.createRecord('user', { password }).save().then((user) => {
                this.get('model').set('user', user);

                this.get('model').save().then((profile) => {
                  const email = profile.get('email');

                  this.send('setMessage', this.get('formatMessage').process('success', 'Your account was created successfully. Logging you in...'));

                  this.get('session').set('data.login', email);

                  this.get('session').authenticate('authenticator:oauth2', email, password).then(() => {
                    $('#signup-modal').modal('hide');
                  }).catch((reason) => {
                    error(reason);
                  });
                }).catch((reason) => {
                  error(reason);
                });
              });
            });
        }

        if(message) {
          this.send('setMessage', message);
        }

        return false;
      });
    }
  }
});
