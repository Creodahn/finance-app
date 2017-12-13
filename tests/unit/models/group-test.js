import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

moduleForModel('group', 'Unit | Model | group', {
  // Specify the other units that are required for this test.
  needs: [
    'mixin:imageable',
    'model:account',
    'model:base-model'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attributes
test('createdAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'group', 'createdAt', 'date', true, new Date());
});

test('description is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'group', 'description', 'string', false, 'test');
});

test('membershipCount is a number attribute', function(assert) {
  runAttrTest.call(this, assert, 'group', 'membershipCount', 'number', true, 5);
});

test('name is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'group', 'name', 'string', false, 'test');
});

test('updatedAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'group', 'updatedAt', 'date', true, new Date());
});

// relationships
test('should have many accounts', function(assert) {
  runRelationshipTest.call(this, assert, 'group', 'accounts', 'hasMany', 'account', null, false, false);
});

test('should have many audits', function(assert) {
  runRelationshipTest.call(this, assert, 'group', 'audits', 'hasMany', 'audit', 'auditable', false, false);
});

test('should have many images', function(assert) {
  runRelationshipTest.call(this, assert, 'group', 'images', 'hasMany', 'image', 'imageable', false, false);
});

test('should have many profiles', function(assert) {
  runRelationshipTest.call(this, assert, 'group', 'profiles', 'hasMany', 'profile', null, false, false);
});
