import DS from 'ember-data';
import BaseModel from './base-model';

export default BaseModel.extend({
  // attributes
  name: DS.attr('string'),
  // relationships
  groups: DS.hasMany('group'),
  memberships: DS.hasMany('membership'),
  profiles: DS.hasMany('profile'),
  rights: DS.hasMany('right')
});
