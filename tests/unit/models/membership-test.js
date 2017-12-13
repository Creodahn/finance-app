import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

moduleForModel('membership', 'Unit | Model | membership', {
  // Specify the other units that are required for this test.
  needs: [
    'model:base-model',
    'model:group',
    'model:profile',
    'model:role'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attribute tests
test('createdAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'membership', 'createdAt', 'date', true, new Date());
});

test('updatedAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'membership', 'updatedAt', 'date', true, new Date());
});

// relationship tests
test('should have many audits', function(assert) {
  runRelationshipTest.call(this, assert, 'membership', 'audits', 'hasMany', 'audit', 'auditable', false, false);
});

test('should have a group', function(assert) {
  runRelationshipTest.call(this, assert, 'membership', 'group', 'belongsTo', 'group', null, false, false);
});

test('should have a profile', function(assert) {
  runRelationshipTest.call(this, assert, 'membership', 'profile', 'belongsTo', 'profile', null, false, false);
});

test('should have a role', function(assert) {
  runRelationshipTest.call(this, assert, 'membership', 'role', 'belongsTo', 'role', null, false, false);
});
