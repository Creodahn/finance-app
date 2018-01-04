import $ from 'jquery';
import Ember from 'ember';
import verifyEmail from 'finance-app/utils/verify-email';
import Controller from '@ember/controller';
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

      this.store.query('user', {
        filter: {
          username: email
        }
      }).then((records) => {
        switch(true) {
          case records.toArray().length > 0:
            message = this.get('formatMessage').process('error', 'The provided email cannot be used to create an account. Please try another email');
            error('email in use');
            break;
          case !this.get('model.name'):
            message = this.get('formatMessage').process('error', 'You must provide a name');
            error('name is not present');
            break;
          case !email:
            message = this.get('formatMessage').process('error', 'You must provide an email');
            error('email is not present');
            break;
          case !verifyEmail(email):
            message = this.get('formatMessage').process('error', 'The email you provided is not valid');
            error('email is not valid');
            break;
          case !password:
            message = this.get('formatMessage').process('error', 'You must provide a password');
            error('password is not present');
            break;
          case !this.get('passwordConfirm'):
            message = this.get('formatMessage').process('error', 'You must confirm your password');
            error('password confirmation is not present');
            break;
          case password !== this.get('passwordConfirm'):
            message = this.get('formatMessage').process('error', 'The password and confirmation you provided do not match');
            error('password does not match confirmation');
            break;
          default: {
            const user = this.store.createRecord('user', { password });

            user.save().then((user) => {
              this.get('model').set('user', user);

              this.get('model').save().then((profile) => {
                const email = profile.get('email');

                this.send('setMessage', this.get('formatMessage').process('success', 'Your account was created successfully. Logging you in...'));

                this.get('session').set('data.login', email);

                this.get('session').authenticate('authenticator:oauth2', email, password).catch((reason) => {
                  error(reason);
                });
              }).catch((reason) => {
                error(reason);
              });
            });
          }
        }

        if(message) {
          this.send('setMessage', message);
        }
      });
    }
  }
});
