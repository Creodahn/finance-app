import Ember from 'ember';
const { error } = Ember.Logger;

export default Ember.Controller.extend({
  actions: {
    save() {
      this.get('model').save().then((group) => {
        this.transitionToRoute('main.home.group.edit', group.get('id'));
      }).catch((reason) => {
        error(reason);
      });
    }
  }
});
