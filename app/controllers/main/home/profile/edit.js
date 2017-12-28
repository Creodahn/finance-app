import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    removeAddress(id) {
      const addr = this.get('model.addresses').findBy('id', id);

      addr.destroyRecord();
    },
    removePhone(phone) {
      phone.destroyRecord();
    }
  }
});
