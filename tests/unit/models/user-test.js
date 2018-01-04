import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

import { run } from '@ember/runloop';

module('Unit | Model | user', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('user'));
    // let store = this.store();
    assert.ok(!!model);
  });

  // attribute tests
  test('password is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'user', 'password', 'string', false, 'test');
  });

  test('username is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'user', 'username', 'string', true, 'test');
  });

  // relationship tests
  test('should have many audits', function(assert) {
    runRelationshipTest.call(this, assert, 'user', 'audits', 'hasMany', 'audit', 'auditable', false, false);
  });

  test('should have a profile', function(assert) {
    runRelationshipTest.call(this, assert, 'user', 'profile', 'belongsTo', 'profile', null, false, false);
  });
});