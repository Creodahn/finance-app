import $ from 'jquery';
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    add() {
      if(this.get('model.isPrimary')) {
        this.get('model.profile.phoneNumbers').then((phoneNumbers) => {
          phoneNumbers.toArray().forEach((phoneNumber) => {
            if(phoneNumber.get('id')) {
              phoneNumber.set('isPrimary', false);

              phoneNumber.save();
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
      $('#phone-modal').modal('hide');
      this.transitionToRoute('main.home.profile.edit');
    },
    updateType(type) {
      this.get('model').set('contactInfoType', this.get('contactInfoTypes').findBy('id', type));
    }
  }
});
