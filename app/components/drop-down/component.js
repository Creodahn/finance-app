import Component from '@ember/component';

export default Component.extend({
  // attributes
  description: null,
  tagName: '',
  // actions
  actions: {
    displayDescription(item) {
      this.set('descriptiveItem', item);
    },
    update(value) {
      this.set('descriptiveItem', null);
      this.sendAction('update', value);
    }
  }
});
