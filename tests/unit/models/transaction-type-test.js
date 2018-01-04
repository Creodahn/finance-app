import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

import { run } from '@ember/runloop';

module('Unit | Model | transaction type', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('transaction-type'));
    // let store = this.store();
    assert.ok(!!model);
  });

  // attribute tests
  test('createdAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'transaction-type', 'createdAt', 'date', true, new Date());
  });

  test('isDebit is a boolean attribute', function(assert) {
    runAttrTest.call(this, assert, 'transaction-type', 'isDebit', 'boolean', false, true);
  });

  test('name is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'transaction-type', 'name', 'string', false, 'test');
  });

  test('updatedAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'transaction-type', 'updatedAt', 'date', true, new Date());
  });

  // relationship tests
  test('should have many audits', function(assert) {
    runRelationshipTest.call(this, assert, 'transaction-type', 'audits', 'hasMany', 'audit', 'auditable', false, false);
  });

  test('should have many transactions', function(assert) {
    runRelationshipTest.call(this, assert, 'transaction-type', 'transactions', 'hasMany', 'transaction', null, false, false);
  });
});