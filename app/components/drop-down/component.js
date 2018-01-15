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
      });
    },
    update() {
      this.runTask(() => {
        this.set('descriptiveItem', null);
      });
    }
  }
});
