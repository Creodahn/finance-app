import Ember from 'ember';
const { error, log } = Ember.Logger;

export default Ember.Controller.extend({
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
            emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
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
          case !email.match(emailRegex):
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

                $('#signup-modal').modal('hide');

                this.get('session').authenticate('authenticator:oauth2', email, password).then(() => {
                  log('authenticated');
                }).catch((reason) => {
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
