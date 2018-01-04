import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

import { run } from '@ember/runloop';

module('Unit | Model | right', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('right'));
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
});