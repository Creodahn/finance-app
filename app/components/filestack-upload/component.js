import Component from '@ember/component';
import { run } from '@ember/runloop';
import ENV from 'finance-app/config/environment';

export default Component.extend({
  // attributes
  tagName: '',
  // hooks
  didInsertElement() {
    run.scheduleOnce('afterRender', (function() {
      this.set('client', filestack.init(ENV.APP.filestackKey));
    }).bind(this));
  },
  didReceiveAttrs() {
    const opts = this.get('options');

    this.set('options', opts ? opts : {});
  },
  // actions
  actions: {
    showPicker() {
      this.get('client').pick(this.get('options')).then(((result) => {
        this.send('upload', result.filesUploaded);
      }));
    }
  }
});
