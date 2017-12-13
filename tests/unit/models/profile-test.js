import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

moduleForModel('profile', 'Unit | Model | profile', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attribute tests

test('createdAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'account', 'createdAt', 'date', true, new Date());
});

test('name is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'account', 'name', 'string', false, 'test');
});

test('updatedAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'account', 'updatedAt', 'date', true, new Date());
});

// computed property tests

// relationship tests
test('should have many audits', function(assert) {
  runRelationshipTest.call(this, assert, 'account', 'audits', 'hasMany', 'audit', 'auditable', false, false);
});
