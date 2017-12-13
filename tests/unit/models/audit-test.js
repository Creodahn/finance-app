import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

moduleForModel('audit', 'Unit | Model | audit', {
  // Specify the other units that are required for this test.
  needs: [
    'model:profile'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attribute tests
test('action is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'audit', 'action', 'string', false, 'test');
});

test('columnName is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'audit', 'columnName', 'string', false, 'test');
});

test('createdAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'audit', 'createdAt', 'date', true, new Date());
});

test('currentValue is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'audit', 'currentValue', 'string', false, 'test');
});

test('initialValue is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'audit', 'initialValue', 'string', false, 'test');
});

test('recordId is a number attribute', function(assert) {
  runAttrTest.call(this, assert, 'audit', 'recordId', 'number', false, 5);
});

test('recordType is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'audit', 'recordType', 'string', false, 'test');
});

test('updatedAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'audit', 'updatedAt', 'date', true, new Date());
});

// relationship tests
test('should have an auditable record', function(assert) {
  runRelationshipTest.call(this, assert, 'audit', 'auditable', 'belongsTo', 'auditable', null, false, true);
});

test('should have a profile', function(assert) {
  runRelationshipTest.call(this, assert, 'audit', 'profile', 'belongsTo', 'profile', null, false, false);
});
