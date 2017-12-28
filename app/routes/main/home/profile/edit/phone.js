import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('sessionAccount.profile').then((profile) => {
      return Ember.RSVP.hash({
        contactInfoTypes: this.store.findAll('contact-info-type'),
        phone: this.store.createRecord('phone-number', {
          profile
        })
      });
    });
  },
  setupController(controller, model) {
    this._super(controller, model.phone);

    controller.set('contactInfoTypes', model.contactInfoTypes);
  }
});
