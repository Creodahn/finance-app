import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

import { run } from '@ember/runloop';

module('Unit | Model | role', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('role'));
    // let store = this.store();
    assert.ok(!!model);
  });

  // attribute tests
  test('name is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'role', 'name', 'string', false, 'test');
  });

  // relationship tests
  test('should have many audits', function(assert) {
    runRelationshipTest.call(this, assert, 'role', 'audits', 'hasMany', 'audit', 'auditable', false, false);
  });

  test('should have many groups', function(assert) {
    runRelationshipTest.call(this, assert, 'role', 'groups', 'hasMany', 'group', null, false, false);
  });

  test('should have many memberships', function(assert) {
    runRelationshipTest.call(this, assert, 'role', 'memberships', 'hasMany', 'membership', null, false, false);
  });

  test('should have many profiles', function(assert) {
    runRelationshipTest.call(this, assert, 'role', 'profiles', 'hasMany', 'profile', null, false, false);
  });

  test('should have many rights', function(assert) {
    runRelationshipTest.call(this, assert, 'role', 'rights', 'hasMany', 'right', null, false, false);
  });
});