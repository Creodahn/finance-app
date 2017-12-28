import Controller from '@ember/controller';
import { run } from '@ember/runloop';

export default Controller.extend({
  actions: {
    removeAddress(id) {
      const addr = this.get('model.addresses').findBy('id', id);

      addr.destroyRecord();
    },
    removePhone(phone) {
      phone.destroyRecord();
    },
    save() {
      $('#save').addClass('loading');
      this.get('model').save().then(() => {
        run.later(() => {
          $('#save').removeClass('loading');
        }, 2000);
      });
    }
  }
});
