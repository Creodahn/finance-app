import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attribute tests
test('password is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'user', 'password', 'string', false, 'test');
});

test('username is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'user', 'username', 'string', true, 'test');
});

// relationship tests
test('should have many audits', function(assert) {
  runRelationshipTest.call(this, assert, 'user', 'audits', 'hasMany', 'audit', 'auditable', false, false);
});

test('should have a profile', function(assert) {
  runRelationshipTest.call(this, assert, 'user', 'profile', 'belongsTo', 'profile', null, false, false);
});
