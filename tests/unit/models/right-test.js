import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

moduleForModel('right', 'Unit | Model | right', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attribute tests
test('name is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'right', 'name', 'string', false, 'test');
});

// relationship tests
test('should have many roles', function(assert) {
  runRelationshipTest.call(this, assert, 'right', 'roles', 'hasMany', 'role', null, false, false);
});
