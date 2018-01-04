import Component from '@ember/component';
import { run } from '@ember/runloop';

export default Component.extend({
  // attributes
  tagName: '',
  // lifecycle
  didInsertElement() {
    run.scheduleOnce('afterRender', () => {
      $('#dropdown-nav').dropdown();
    });
  },
  actions: {
    logOut() {
      this.sendAction('logOut');
    }
  }
});
