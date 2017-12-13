import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

moduleForModel('address', 'Unit | Model | address', {
  // Specify the other units that are required for this test.
  needs: [
    'model:base-model',
    'model:contact-info-type',
    'model:profile'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attribute tests
test('address is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'address', 'address', 'string', false, 'test');
});

test('apartmentNumber is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'address', 'apartmentNumber', 'string', false, 'test');
});

test('city is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'address', 'city', 'string', false, 'test');
});

test('createdAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'address', 'createdAt', 'date', true, new Date());
});

test('isPrimary is a boolean attribute', function(assert) {
  runAttrTest.call(this, assert, 'address', 'isPrimary', 'boolean', false, true);
});
test('state is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'address', 'state', 'string', false, 'test');
});
test('zipCode is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'address', 'zipCode', 'string', false, 'test');
});

test('updatedAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'address', 'updatedAt', 'date', true, new Date());
});

// relationship tests
test('should have many audits', function(assert) {
  runRelationshipTest.call(this, assert, 'address', 'audits', 'hasMany', 'audit', 'auditable', false, false);
});

test('should have a contact-info-type', function(assert) {
  runRelationshipTest.call(this, assert, 'address', 'contactInfoType', 'belongsTo', 'contact-info-type', null, false, false);
});

test('should have a profile', function(assert) {
  runRelationshipTest.call(this, assert, 'address', 'profile', 'belongsTo', 'profile', null, false, false);
});
