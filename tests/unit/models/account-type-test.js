import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

moduleForModel('account-type', 'Unit | Model | account type', {
  // Specify the other units that are required for this test.
  needs: [
    'model:account',
    'model:base-model'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attribute tests
test('createdAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'account-type', 'createdAt', 'date', true, new Date());
});

test('description is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'account-type', 'description', 'string', false, 'test');
});

test('isDebt is a boolean attribute', function(assert) {
  runAttrTest.call(this, assert, 'account-type', 'isDebt', 'boolean', false, true);
});

test('name is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'account-type', 'name', 'string', false, 'test');
});

test('requireRoutingNumber is a boolean attribute', function(assert) {
  runAttrTest.call(this, assert, 'account-type', 'requireRoutingNumber', 'boolean', false, true);
});

test('updatedAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'account-type', 'updatedAt', 'date', true, new Date());
});

// relationship tests
test('should have many accounts', function(assert) {
  runRelationshipTest.call(this, assert, 'account-type', 'accounts', 'hasMany', 'account', null, false, false);
});

test('should have many audits', function(assert) {
  runRelationshipTest.call(this, assert, 'account-type', 'audits', 'hasMany', 'audit', 'auditable', false, false);
});
