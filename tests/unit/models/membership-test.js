import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

import { run } from '@ember/runloop';

module('Unit | Model | membership', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('membership'));
    // let store = this.store();
    assert.ok(!!model);
  });

  // attribute tests
  test('createdAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'membership', 'createdAt', 'date', true, new Date());
  });

  test('updatedAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'membership', 'updatedAt', 'date', true, new Date());
  });

  // relationship tests
  test('should have many audits', function(assert) {
    runRelationshipTest.call(this, assert, 'membership', 'audits', 'hasMany', 'audit', 'auditable', false, false);
  });

  test('should have a group', function(assert) {
    runRelationshipTest.call(this, assert, 'membership', 'group', 'belongsTo', 'group', null, false, false);
  });

  test('should have a profile', function(assert) {
    runRelationshipTest.call(this, assert, 'membership', 'profile', 'belongsTo', 'profile', null, false, false);
  });

  test('should have a role', function(assert) {
    runRelationshipTest.call(this, assert, 'membership', 'role', 'belongsTo', 'role', null, false, false);
  });
});