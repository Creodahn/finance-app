import Controller from '@ember/controller';
import { task } from 'ember-concurrency';

export default Controller.extend({
  save: task(function * (e) {
    e.preventDefault();
    yield this.get('model').save();
  }),
  actions: {
    removeAddress(id) {
      const addr = this.get('model.addresses').findBy('id', id);

      addr.destroyRecord();
    },
    removePhone(phone) {
      phone.destroyRecord();
    },
  }
});
