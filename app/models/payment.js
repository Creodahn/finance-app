import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';

export default BaseModel.extend({
  // attributes
  amount: DS.attr('number'),
  completed: DS.attr('boolean'),
  completedOn: DS.attr('date'),
  // relationships
  profile: DS.belongsTo('profile'),
  transaction: DS.belongsTo('transaction')
});
