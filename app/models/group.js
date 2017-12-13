import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';
import Imageable from 'finance-app/mixins/imageable';

export default BaseModel.extend(Imageable, {
  // attributes
  description: DS.attr('string'),
  membershipCount: DS.attr('number', { readOnly: true }),
  name: DS.attr('string'),
  // relationships
  accounts: DS.hasMany('account'),
  profiles: DS.hasMany('profile')
});
