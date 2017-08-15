import DS from 'ember-data';
import Ember from 'ember';

export default Ember.Mixin.create({
  audits: DS.hasMany('audit', { inverse: 'auditable' })
});
