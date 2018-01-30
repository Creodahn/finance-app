import Component from '@ember/component';
import RunMixin from 'ember-lifeline/mixins/run';
import $ from 'jquery';

export default Component.extend(RunMixin, {
  // attributes
  description: null,
  tagName: '',
  // methods
  actions: {
    displayDescription(item) {
      this.runTask(() => {
        if($('.menu.hidden').length === 0) {
          this.set('descriptiveItem', item);
        }
      }, 150);
    },
    updateValue(value) {
      this.runTask(() => {
        this.set('descriptiveItem', null);
      });

      this.get('update')(value);
    },
  }
});
