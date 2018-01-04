import $ from 'jquery';
import Component from '@ember/component';
import { run } from '@ember/runloop';

export default Component.extend({
  // attributes
  description: null,
  tagName: '',
  // actions
  didInsertElement() {
    this._super(...arguments);

    run.scheduleOnce('afterRender', () => {
      $(`#${this.get('id')}`).dropdown();
    });
  },
  actions: {
    displayDescription(item) {
      this.set('descriptiveItem', item);
    },
    update() {
      this.set('descriptiveItem', null);
    }
  }
});
