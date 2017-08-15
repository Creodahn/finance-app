import DS from 'ember-data';
import Auditable from 'finance-app/mixins/auditable';
import BaseModel from 'finance-app/models/base-model';
import Imageable from 'finance-app/mixins/imageable';

export default BaseModel.extend(Auditable, Imageable, {
  // attributes
  description: DS.attr('string'),
  name: DS.attr('string'),
  // relationships
  profiles: DS.hasMany('profile')
});
