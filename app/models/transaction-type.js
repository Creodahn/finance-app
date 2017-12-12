import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';

export default BaseModel.extend({
  // attributes
  isDebit: DS.attr('boolean'),
  name: DS.attr('string'),
  // relationships
  transactions: DS.hasMany('transactions')
});
