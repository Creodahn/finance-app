import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  save: task(function*(e) {
    e.preventDefault();
    yield this.get('model').save();
    // looks better if the loading animation doesn't
    // disappear as soon as it's added
    yield timeout(1000);
  }),
  actions: {
    removeAddress(addr) {
      addr.destroyRecord();
    },
    removePhone(phone) {
      phone.destroyRecord();
    },
  }
});
