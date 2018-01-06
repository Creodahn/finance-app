import $ from 'jquery';
import Component from '@ember/component';
import { computed } from '@ember/object';
import RunMixin from 'ember-lifeline/mixins/run';

export default Component.extend(RunMixin, {
  // attributes
  classNames: ['phone-input'],
  // computed properties
  areaCodeLength: computed('model.areaCode.length', function() {
    return this.get('model.areaCode.length') || 0;
  }),
  extensionLength: computed('model.extension.length', function() {
    return this.get('model.extension.length') || 0;
  }),
  prefixLength: computed('model.prefix.length', function() {
    return this.get('model.prefix.length') || 0;
  }),
  subscriberNumberLength: computed('model.subscriberNumber.length', function() {
    return this.get('model.subscriberNumber.length') || 0;
  }),
  // lifecycle
  didInsertElement() {
    this.runTask(() => {
      this.set('maxLengths', {
        areaCode: {
          length: 3,
          next: 'prefix'
        },
        prefix: {
          length: 3,
          next: 'subscriberNumber'
        },
        subscriberNumber: {
          length: 4,
          next: 'extension'
        }
      });
    }, 1);
  },
  didReceiveAttrs() {
    this._super(...arguments);

    if(!this.get('model.countryCode')) {
      this.runTask(() => {
        this.set('model.countryCode', '1');
      }, 1);
    }
  },
  actions: {
    change(changed) {
      const length = this.get(`${changed}Length`),
            constants = this.get('maxLengths')[changed];

      if(length >= constants.length) {
        $(`#${constants.next}`).focus();
      }
    }
  }
});
