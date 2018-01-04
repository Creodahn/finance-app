import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

import { run } from '@ember/runloop';

module('Unit | Model | image', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('image'));
    // let store = this.store();
    assert.ok(!!model);
  });

  // attribute tests
  test('createdAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'image', 'createdAt', 'date', true, new Date());
  });

  test('description is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'image', 'description', 'string', false, 'test');
  });

  test('fileName is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'image', 'fileName', 'string', false, 'test');
  });

  test('updatedAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'image', 'updatedAt', 'date', true, new Date());
  });

  test('url is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'image', 'url', 'string', false, 'test');
  });

  // relationship tests
  test('should have many audits', function(assert) {
    runRelationshipTest.call(this, assert, 'image', 'audits', 'hasMany', 'audit', 'auditable', false, false);
  });

  test('should have an imageable', function(assert) {
    runRelationshipTest.call(this, assert, 'image', 'imageable', 'belongsTo', 'imageable', null, false, true);
  });

  test('should have an uploader', function(assert) {
    runRelationshipTest.call(this, assert, 'image', 'uploader', 'belongsTo', 'profile', null, false, false);
  });
});