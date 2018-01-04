import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

module('Unit | Model | transaction', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('transaction'));
    // let store = this.store();
    assert.ok(!!model);
  });

  // attribute tests
  test('amount is a number attribute', function(assert) {
    runAttrTest.call(this, assert, 'transaction', 'amount', 'number', false, 5);
  });

  test('createdAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'transaction', 'createdAt', 'date', true, new Date());
  });

  test('isDebit is a boolean attribute', function(assert) {
    runAttrTest.call(this, assert, 'transaction', 'isDebit', 'boolean', true, true);
  });

  test('updatedAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'transaction', 'updatedAt', 'date', true, new Date());
  });

  // computed property tests
  test('displayAmount is negative if isDebit is true', function(assert) {
    run(() => {
      const transaction = run(() => this.owner.lookup('service:store').createRecord('transaction', {
        amount: 5,
        isDebit: true
      }));

      assert.ok(transaction.get('displayAmount') < 0);
    });
  });

  test('displayAmount is positive if transactionType.isDebit is false', function(assert) {
    run(() => {
      const transaction = run(() => this.owner.lookup('service:store').createRecord('transaction', {
        amount: 5,
        isDebit: false
      }));

      assert.ok(transaction.get('displayAmount') > 0);
    });
  });

  // relationship tests
  test('should have an account', function(assert) {
    runRelationshipTest.call(this, assert, 'transaction', 'account', 'belongsTo', 'account', null, false, false);
  });

  test('should have many audits', function(assert) {
    runRelationshipTest.call(this, assert, 'transaction', 'audits', 'hasMany', 'audit', 'auditable', false, false);
  });

  test('should have a profile', function(assert) {
    runRelationshipTest.call(this, assert, 'transaction', 'profile', 'belongsTo', 'profile', null, false, false);
  });

  test('should have a transaction-type', function(assert) {
    runRelationshipTest.call(this, assert, 'transaction', 'transactionType', 'belongsTo', 'transaction-type', null, false, false);
  });
});