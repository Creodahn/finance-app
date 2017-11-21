import Ember from 'ember';
const { error } = Ember.Logger;

export default Ember.Controller.extend({
  actions: {
    save() {
      Ember.RSVP.Promise.resolve(this.get('sessionAccount.profile')).then((profile) => {
        this.get('model').save().then((group) => {
          const membership = this.store.createRecord('membership', {
            group,
            profile
          });

          membership.save().then(() => {
            this.transitionToRoute('main.home.group.edit', group.get('id'));
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
