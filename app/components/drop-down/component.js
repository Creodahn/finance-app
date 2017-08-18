import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    update(value) {
      this.sendAction('update', value);
    }
  }
});
