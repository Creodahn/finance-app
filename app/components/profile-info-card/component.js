import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  // attributes
  tagName: '',
  // computed properties
  joined: computed('model.createdAt', function() {
    const joined = this.get('model.createdAt');

    return joined ? joined : new Date();
  })
});
