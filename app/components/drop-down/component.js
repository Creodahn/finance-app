import Ember from 'ember';

export default Ember.Component.extend({
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
