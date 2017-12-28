import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';

export default BaseModel.extend({
  // attributes
  areaCode: DS.attr('string'),
  countryCode: DS.attr('string'),
  extension: DS.attr('string'),
  isPrimary: DS.attr('boolean'),
  prefix: DS.attr('string'),
  subscriberNumber: DS.attr('string'),
  // computed properties
  assembledNumber: Ember.computed('countryCode', 'areaCode', 'prefix', 'subscriberNumber', 'extension', function() {
    return `${this.get('countryCode')}(${this.get('areaCode')})${this.get('prefix')}-${this.get('subscriberNumber')}${this.get('extension') ? `, ext. ${this.get('extension')}` : ''}`;
  }),
  // relationships
  contactInfoType: DS.belongsTo('contact-info-type'),
  profile: DS.belongsTo('profile')
});
