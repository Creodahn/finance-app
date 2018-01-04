import DS from 'ember-data';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  images: DS.hasMany('image', { inverse: 'imageable' })
});
