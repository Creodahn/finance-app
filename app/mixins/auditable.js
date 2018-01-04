import DS from 'ember-data';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  audits: DS.hasMany('audit', { inverse: 'auditable' })
});
