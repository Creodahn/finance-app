import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    add() {
      if(this.get('model.isPrimary')) {
        this.get('model.profile.addresses').then((addresses) => {
          addresses.toArray().forEach((address) => {
            if(address.get('id')) {
              address.set('isPrimary', false);

              address.save();
            }
          });
        });
      }

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
