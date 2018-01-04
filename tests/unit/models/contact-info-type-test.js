import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

import { run } from '@ember/runloop';

module('Unit | Model | contact info type', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('contact-info-type'));
    // let store = this.store();
    assert.ok(!!model);
  });

  // attribute tests
  test('createdAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'contact-info-type', 'createdAt', 'date', true, new Date());
  });

  test('description is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'contact-info-type', 'description', 'string', false, 'test');
  });

  test('name is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'contact-info-type', 'name', 'string', false, 'test');
  });

  test('updatedAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'contact-info-type', 'updatedAt', 'date', true, new Date());
  });

  // relationship tests
  test('should have many addresses', function(assert) {
    runRelationshipTest.call(this, assert, 'contact-info-type', 'addresses', 'hasMany', 'address', null, false, false);
  });

  test('should have many audits', function(assert) {
    runRelationshipTest.call(this, assert, 'contact-info-type', 'audits', 'hasMany', 'audit', 'auditable', false, false);
  });

  test('should have many phone-numbers', function(assert) {
    runRelationshipTest.call(this, assert, 'contact-info-type', 'phoneNumbers', 'hasMany', 'phone-number', null, false, false);
  });
});