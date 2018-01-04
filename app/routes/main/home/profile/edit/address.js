import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('sessionAccount.profile').then((profile) => {
      return hash({
        address: this.store.createRecord('address', {
          profile
        }),
        contactInfoTypes: this.store.query('contact-info-type', {
          filter: {
            'phone-only': false
          }
        })
      });
    });
  },
  setupController(controller, model) {
    this._super(controller, model.address);

    controller.set('contactInfoTypes', model.contactInfoTypes);
  }
});
