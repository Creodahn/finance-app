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
    update() {
      this.set('descriptiveItem', null);
    }
  }
});
