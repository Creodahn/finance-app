import { moduleForModel, test } from 'ember-qunit';
import { run } from '@ember/runloop';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

moduleForModel('transaction', 'Unit | Model | transaction', {
  // Specify the other units that are required for this test.
  needs: [
    'model:account',
    'model:audit',
    'model:base-model',
    'model:profile',
    'model:transaction-type'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
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

test('updatedAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'transaction', 'updatedAt', 'date', true, new Date());
});

// computed property tests
test('displayAmount is negative if transactionType.isDebit is true', function(assert) {
  run(() => {
    const transaction = this.subject({
      amount: 5,
      transactionType: this.store().createRecord('transactionType', {
        name: 'Debit',
        isDebit: true
      })
    });

    assert.ok(transaction.get('displayAmount') < 0);
  });
});

test('displayAmount is positive if transactionType.isDebit is false', function(assert) {
  run(() => {
    const transaction = this.subject({
      amount: 5,
      transactionType: this.store().createRecord('transactionType', {
        name: 'Credit',
        isDebit: false
      })
    });

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
