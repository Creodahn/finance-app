import $ from 'jquery';
import Component from '@ember/component';
import { run } from '@ember/runloop';

export default Component.extend({
  // attributes
  tagName: '',
  // lifecycle
  didInsertElement() {
    run.scheduleOnce('afterRender', () => {
      const drop = $('#dropdown-nav');

      if(drop.length > 0) {
        $(drop).dropdown();
      }
    });
  }
});
