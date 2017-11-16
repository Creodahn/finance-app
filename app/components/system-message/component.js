import Component from '@ember/component';

export default Component.extend({
  // attributes
  tagName: '',
  // lifecycle
  didUpdateAttrs() {
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
  },
  // actions
  actions: {
    collapse() {
      this.set('message', null);
    }
  }
});
