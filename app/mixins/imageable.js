import DS from 'ember-data';
import Ember from 'ember';

export default Ember.Mixin.create({
  images: DS.hasMany('image', { inverse: 'imageable' })
});
