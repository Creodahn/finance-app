import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    add() {
      this.get('model').save().then(() => {
        this.actions.transitionAway.call(this);
      });
    },
    cancel() {
      this.get('model').rollbackAttributes();
      this.actions.transitionAway.call(this);
    },
    transitionAway() {
      $('#address-modal').modal('hide');
      this.transitionToRoute('main.home.profile.edit');
    },
    updateType(type) {
      this.get('model').set('contactInfoType', this.get('contactInfoTypes').findBy('id', type));
    }
  }
});
