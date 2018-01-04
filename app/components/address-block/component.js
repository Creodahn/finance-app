import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  actions: {
    remove() {
      this.sendAction('remove', this.get('model'));
    }
  }
});
