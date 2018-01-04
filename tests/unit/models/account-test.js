import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

import { run } from '@ember/runloop';

module('Unit | Model | account', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('account'));
    // let store = this.store();
    assert.ok(!!model);
  });

  // attribute tests
  test('accountNumber is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'account', 'accountNumber', 'string', false, 'test');
  });

  test('balance is a number attribute', function(assert) {
    runAttrTest.call(this, assert, 'account', 'balance', 'number', true, 5);
  });

  test('createdAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'account', 'createdAt', 'date', true, new Date());
  });

  test('description is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'account', 'description', 'string', false, 'test');
  });

  test('name is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'account', 'name', 'string', false, 'test');
  });

  test('routingNumber is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'account', 'routingNumber', 'string', false, 'test');
  });

  test('updatedAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'account', 'updatedAt', 'date', true, new Date());
  });

  // computed property tests
  test('isNegative should be true if balance is less than zero', function(assert) {
    const account = run(() => this.owner.lookup('service:store').createRecord('account', {
      balance: -5
    }));

    assert.ok(account.get('isNegative'));
  });

  test('isNegative should be false if balance is greater than or equal to zero', function(assert) {
    const account = run(() => this.owner.lookup('service:store').createRecord('account', {
            balance: 5
          })),
          account2 = run(() => this.owner.lookup('service:store').createRecord('account', {
            balance: 0
          }));

    assert.notOk(account.get('isNegative'));
    assert.notOk(account2.get('isNegative'));
  });

  // relationship tests
  test('should have an account-type', function(assert) {
    runRelationshipTest.call(this, assert, 'account', 'accountType', 'belongsTo', 'account-type', null, false, false);
  });

  test('should have many audits', function(assert) {
    runRelationshipTest.call(this, assert, 'account', 'audits', 'hasMany', 'audit', 'auditable', false, false);
  });

  test('should have a group', function(assert) {
    runRelationshipTest.call(this, assert, 'account', 'group', 'belongsTo', 'group', null, false, false);
  });
});