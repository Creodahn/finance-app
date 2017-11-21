import Ember from 'ember';
const { error, log } = Ember.Logger;

export default Ember.Controller.extend({
  actions: {
    save() {
      this.get('model').save().then((account) => {
        this.transitionToRoute('main.home.account.edit', account.get('id'));
      }).catch((err) => {
        error(err);
      });
    },
    updateType(id) {
      const type = this.get('accountTypes').findBy('id', id);
      log(type);
      this.get('model').set('accountType', type);
    }
  }
});
