import DS from 'ember-data';
import BaseModel from 'finance-app/models/base-model';
import Imageable from 'finance-app/mixins/imageable';

export default BaseModel.extend(Imageable, {
  // attributes
  email: DS.attr('string'),
  name: DS.attr('string'),
  // computed properties
  firstName: Ember.computed('name', function() {
    return this.get('name').split(' ').slice(0, 1).join(' ');
  }),
  lastName: Ember.computed('name', function() {
    const nameArray = this.get('name').split(' ');
    return nameArray.length > 1 ? nameArray.slice(-1).join(' ') : '';
  }),
  middleName: Ember.computed('name', function() {
    return this.get('name').split(' ').slice(1, -1).join(' ');
  }),
  primaryAddress: Ember.computed('addresses', function() {
    return this.get('addresses').filterBy('isPrimary', true);
  }),
  primaryPhoneNumber: Ember.computed('phoneNumbers', function() {
    return this.get('phoneNumbers').filterBy('isPrimary', true);
  }),
  profilePicture: Ember.computed('images', function() {
    return this.get('images.firstObject');
  }),
  // relationships
  accounts: DS.hasMany('account'),
  addresses: DS.hasMany('address'),
  groups: DS.hasMany('group'),
  memberships: DS.hasMany('membership'),
  phoneNumbers: DS.hasMany('phone-number'),
  roles: DS.hasMany('role'),
  uploadedImages: DS.hasMany('image', { inverse: 'uploader' }),
  user: DS.belongsTo('user')
});
