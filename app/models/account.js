import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';
import { computed } from '@ember/object';

export default BaseModel.extend({
  // attributes
  accountNumber: DS.attr('string'),
  balance: DS.attr('number', { readOnly: true }),
  description: DS.attr('string'),
  name: DS.attr('string'),
  routingNumber: DS.attr('string'),
  // computed properties
  isNegative: computed('balance', function() {
    return Number(this.get('balance')) < 0;
  }),
  // relationships
  accountType: DS.belongsTo('account-type'),
  group: DS.belongsTo('group'),
  profile: DS.belongsTo('profile')
});
