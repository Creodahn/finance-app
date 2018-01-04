import Ember from 'ember';
import Controller from '@ember/controller';
const { error } = Ember.Logger;

export default Controller.extend({
  actions: {
    save() {
      Ember.RSVP.Promise.resolve(this.get('sessionAccount.profile')).then((profile) => {
        this.get('model').save().then((group) => {
          const membership = this.store.createRecord('membership', {
            group,
            profile
          });

          membership.save().then(() => {
            profile.save().then(() => {
              this.transitionToRoute('main.home.group.edit', group.get('id'));
            });
          }).catch((reason) => {
            error(reason);
          });
        }).catch((reason) => {
          error(reason);
        });
      });
    }
  }
});
