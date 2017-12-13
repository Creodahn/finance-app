import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

moduleForModel('role', 'Unit | Model | role', {
  // Specify the other units that are required for this test.
  needs: [
    'model:base-model',
    'model:group',
    'model:membership',
    'model:profile',
    'model:right'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attribute tests
test('name is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'role', 'name', 'string', false, 'test');
});

// relationship tests
test('should have many audits', function(assert) {
  runRelationshipTest.call(this, assert, 'role', 'audits', 'hasMany', 'audit', 'auditable', false, false);
});

test('should have many groups', function(assert) {
  runRelationshipTest.call(this, assert, 'role', 'groups', 'hasMany', 'group', null, false, false);
});

test('should have many memberships', function(assert) {
  runRelationshipTest.call(this, assert, 'role', 'memberships', 'hasMany', 'membership', null, false, false);
});

test('should have many profiles', function(assert) {
  runRelationshipTest.call(this, assert, 'role', 'profiles', 'hasMany', 'profile', null, false, false);
});

test('should have many rights', function(assert) {
  runRelationshipTest.call(this, assert, 'role', 'rights', 'hasMany', 'right', null, false, false);
});
