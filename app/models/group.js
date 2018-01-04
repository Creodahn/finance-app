import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';
import Imageable from 'finance-app/mixins/imageable';
import { computed } from '@ember/object';

export default BaseModel.extend(Imageable, {
  // attributes
  balance: DS.attr('number', { readOnly: true }),
  description: DS.attr('string'),
  name: DS.attr('string'),
  // computed properties
  isNegative: computed('balance', function() {
    return Number(this.get('balance')) < 0;
  }),
  // relationships
  accounts: DS.hasMany('account'),
  profiles: DS.hasMany('profile')
});
