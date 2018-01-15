import Component from '@ember/component';
import RunMixin from 'ember-lifeline/mixins/run';

export default Component.extend(RunMixin, {
  // attributes
  description: null,
  tagName: '',
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
