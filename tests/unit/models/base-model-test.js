import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

import { run } from '@ember/runloop';

module('Unit | Model | base model', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('base-model'));
    // let store = this.store();
    assert.ok(!!model);
  });

  // attribute tests
  test('createdAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'base-model', 'createdAt', 'date', true, new Date());
  });

  test('updatedAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'base-model', 'updatedAt', 'date', true, new Date());
  });

  // relationship tests
  test('should have many audits', function(assert) {
    runRelationshipTest.call(this, assert, 'base-model', 'audits', 'hasMany', 'audit', 'auditable', false, false);
  });
});