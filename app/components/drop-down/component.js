import $ from 'jquery';
import Component from '@ember/component';
import { run } from '@ember/runloop';
import RunMixin from 'ember-lifeline/mixins/run';

export default Component.extend(RunMixin, {
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
      this.runTask(() => {
        this.set('descriptiveItem', item);
      }, 1);
    },
    update() {
      this.runTask(() => {
        this.set('descriptiveItem', null);
      }, 1);
    }
  }
});
