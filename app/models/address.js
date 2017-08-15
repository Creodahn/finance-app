import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';

export default BaseModel.extend({
  // attributes
  address: DS.attr('string'),
  apartmentNumber: DS.attr('string'),
  city: DS.attr('string'),
  isPrimary: DS.attr('boolean'),
  state: DS.attr('string'),
  zipCode: DS.attr('string'),
  // relationships
  contactInfoType: DS.belongsTo('contact-info-type'),
  profile: DS.belongsTo('profile')
});
