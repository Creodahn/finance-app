import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';

export default BaseModel.extend({
  // attributes
  description: DS.attr('string'),
  name: DS.attr('string'),
  phoneOnly: DS.attr('boolean'),
  // relationships
  addresses: DS.hasMany('address'),
  phoneNumbers: DS.hasMany('phone-number')
});
