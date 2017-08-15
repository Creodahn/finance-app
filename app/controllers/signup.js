import Ember from 'ember';
const { error, log } = Ember.Logger;

export default Ember.Controller.extend({
  actions: {
    cancel() {
      $('#signup-modal').remove();
      this.get('model').rollbackAttributes();
      this.transitionToRoute('main');
    },
    signUp() {
      const password = this.get('password');

      if(password === this.get('passwordConfirm')) {
        const user = this.store.createRecord('user', { password });

        user.save().then((user) => {
          this.get('model').set('user', user);

          this.get('model').save().then(() => {
            log('account created!');
          }).catch((reason) => {
            error(reason);
          });
        });
      } else {
        error('passwords didn\'t match!');
      }
    }
  }
});
