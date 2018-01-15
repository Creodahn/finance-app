import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, fillIn, click, currentURL } from '@ember/test-helpers';


module('Acceptance | main/home/profile', function(hooks) {
  setupApplicationTest(hooks);

  test('cannot visit /home/profile without authentication', async (assert) => {
    assert.expect(1);

    await visit('/home/profile');

    assert.equal(currentURL(), '/login');
  });

  test('can visit /home/profile if authenticated', async (assert) => {


    await visit('/home/profile');

    assert.equal(currentURL(), '/login');

    await fillIn('input[type="text"][placeholder="Username"]', 'justin@test.com');
    await fillIn('input[type="password"][placeholder="Password"]', 'test');

    await click('#login-modal-ok');

    // Ember-Simple-Auth caches the attempted transition, so we end up right
    // where we wanted to be after authentication
    assert.equal(currentURL(), '/home/profile/edit');
  });
});
