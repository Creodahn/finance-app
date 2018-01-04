import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
import runAttrTest from 'finance-app/tests/helpers/attribute-test';
import runRelationshipTest from 'finance-app/tests/helpers/relationship-test';

module('Unit | Model | profile', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('profile'));
    // let store = this.store();
    assert.ok(!!model);
  });

  // attribute tests

  test('createdAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'profile', 'createdAt', 'date', true, new Date());
  });

  test('name is a string attribute', function(assert) {
    runAttrTest.call(this, assert, 'profile', 'name', 'string', false, 'test');
  });

  test('updatedAt is a date attribute', function(assert) {
    runAttrTest.call(this, assert, 'profile', 'updatedAt', 'date', true, new Date());
  });

  // computed property tests
  test('firsName is set properly based on name', function(assert) {
    assert.expect(3);

    run(() => {
      const profile = run(() => this.owner.lookup('service:store').createRecord('profile', {
        name: 'Justin'
      }));

      assert.equal(profile.get('firstName'), 'Justin', `expected 'Justin', got '${profile.get('firstName')}'`);

      profile.set('name', 'Justin Drew');

      assert.equal(profile.get('firstName'), 'Justin', `expected 'Justin', got '${profile.get('firstName')}'`);

      profile.set('name', 'Justin Adam Drew');

      assert.equal(profile.get('firstName'), 'Justin', `expected 'Justin', got '${profile.get('firstName')}'`);
    });
  });

  test('lastName is set properly based on name', function(assert) {
    assert.expect(3);

    run(() => {
      const profile = run(() => this.owner.lookup('service:store').createRecord('profile', {
        name: 'Justin'
      }));

      assert.equal(profile.get('lastName'), '', `expected '', got '${profile.get('lastName')}'`);

      profile.set('name', 'Justin Drew');

      assert.equal(profile.get('lastName'), 'Drew', `expected 'Drew', got '${profile.get('lastName')}'`);

      profile.set('name', 'Justin Adam Drew');

      assert.equal(profile.get('lastName'), 'Drew', `expected 'Drew', got '${profile.get('lastName')}'`);
    });
  });

  test('middleName is set properly based on name', function(assert) {
    assert.expect(3);

    run(() => {
      const profile = run(() => this.owner.lookup('service:store').createRecord('profile', {
        name: 'Justin'
      }));

      assert.equal(profile.get('middleName'), '', `expected '', got '${profile.get('middleName')}'`);

      profile.set('name', 'Justin Drew');

      assert.equal(profile.get('middleName'), '', `expected '', got '${profile.get('middleName')}'`);

      profile.set('name', 'Justin Adam Drew');

      assert.equal(profile.get('middleName'), 'Adam', `expected 'Adam', got '${profile.get('middleName')}'`);
    });
  });

  // test('primaryAddress is selected properly', function(assert) {
  //   Ember.run(() => {
  //     const profile = this.subject({
  //       name: 'Justin Drew'
  //     });
  //   });
  // });
  //
  // test('primaryPhoneNumber is selected properly', function(assert) {
  //   Ember.run(() => {
  //     const profile = this.subject({
  //       name: 'Justin Drew'
  //     });
  //   });
  // });
  //
  // test('profilePicture is selected properly', function(assert) {
  //   const profile = this.subject({
  //     name: 'Justin Drew'
  //   });
  // });

  // relationship tests
  test('should have many accounts', function(assert) {
    runRelationshipTest.call(this, assert, 'profile', 'accounts', 'hasMany', 'account', null, false, false);
  });

  test('should have many addresses', function(assert) {
    runRelationshipTest.call(this, assert, 'profile', 'addresses', 'hasMany', 'address', null, false, false);
  });

  test('should have many audits', function(assert) {
    runRelationshipTest.call(this, assert, 'profile', 'audits', 'hasMany', 'audit', 'auditable', false, false);
  });

  test('should have many groups', function(assert) {
    runRelationshipTest.call(this, assert, 'profile', 'groups', 'hasMany', 'group', null, false, false);
  });

  test('should have many images', function(assert) {
    runRelationshipTest.call(this, assert, 'profile', 'images', 'hasMany', 'image', 'imageable', false, false);
  });

  test('should have many memberships', function(assert) {
    runRelationshipTest.call(this, assert, 'profile', 'memberships', 'hasMany', 'membership', null, false, false);
  });

  test('should have many phoneNumbers', function(assert) {
    runRelationshipTest.call(this, assert, 'profile', 'phoneNumbers', 'hasMany', 'phone-number', null, false, false);
  });

  test('should have many roles', function(assert) {
    runRelationshipTest.call(this, assert, 'profile', 'roles', 'hasMany', 'role', null, false, false);
  });

  test('should have many uploadedImages', function(assert) {
    runRelationshipTest.call(this, assert, 'profile', 'uploadedImages', 'hasMany', 'image', 'uploader', false, false);
  });

  test('should have a user', function(assert) {
    runRelationshipTest.call(this, assert, 'profile', 'user', 'belongsTo', 'user', null, false, false);
  });
});