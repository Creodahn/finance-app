import Component from '@ember/component';
import RunMixin from 'ember-lifeline/mixins/run';

export default Component.extend(RunMixin, {
  // attributes
  tagName: '',
  // lifecycle
  didUpdateAttrs() {
    this.runTask(() => {
      switch(this.get('message.type')) {
        case 'error':
          this.set('color', 'red');
          break;
        case 'success':
          this.set('color', 'green');
          break;
        case 'info':
          this.set('color', 'info');
          break;
        case 'warn':
          this.set('color', 'yellow');
          break;
      }
    }, 1);
  },
  // actions
  actions: {
    collapse() {
      this.runTask(() => {
        this.set('message', null);
      }, 1);
    }
  }
});
