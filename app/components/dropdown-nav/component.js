import Component from '@ember/component';

export default Component.extend({
  // attributes
  tagName: '',
  actions: {
    logOut() {
      this.sendAction('logOut');
    }
  }
});
