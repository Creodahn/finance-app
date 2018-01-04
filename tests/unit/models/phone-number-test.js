import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

import { run } from '@ember/runloop';

module('Unit | Model | phone number', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('phone-number'));
    // let store = this.store();
    assert.ok(!!model);
  });

  // attribute tests
  test('areaCode is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'phone-number', 'areaCode', 'string', false, 'test');
  });

  test('countryCode is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'phone-number', 'countryCode', 'string', false, 'test');
  });

  test('createdAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'phone-number', 'createdAt', 'date', true, new Date());
  });

  test('extension is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'phone-number', 'extension', 'string', false, 'test');
  });

  test('prefix is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'phone-number', 'prefix', 'string', false, 'test');
  });

  test('subscriberNumber is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'phone-number', 'subscriberNumber', 'string', false, 'test');
  });

  test('updatedAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'phone-number', 'updatedAt', 'date', true, new Date());
  });

  // relationship tests
  test('should have many audits', function(assert) {
    runRelationshipTest.call(this, assert, 'phone-number', 'audits', 'hasMany', 'audit', 'auditable', false, false);
  });

  test('should have a contact-info-type', function(assert) {
    runRelationshipTest.call(this, assert, 'phone-number', 'contactInfoType', 'belongsTo', 'contact-info-type', null, false, false);
  });

  test('should have a profile', function(assert) {
    runRelationshipTest.call(this, assert, 'phone-number', 'profile', 'belongsTo', 'profile', null, false, false);
  });
});