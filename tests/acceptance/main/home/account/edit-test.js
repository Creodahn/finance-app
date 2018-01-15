import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, fillIn, click, currentURL } from '@ember/test-helpers';


module('Acceptance | main/home/account/edit', function(hooks) {
  setupApplicationTest(hooks);

  test('cannot visit /home/account/edit without authentication', async (assert) => {
    await visit('/home/account/edit');

    assert.equal(currentURL(), '/login');
  });

  test('can visit /home/account/edit if authenticated', async (assert) => {
    const account = server.create('account', { name: 'test account' });
    

    await visit(`/home/account/${account.id}`);

    assert.equal(currentURL(), '/login');

    await fillIn('input[type="text"][placeholder="Username"]', 'justin@test.com');
    await fillIn('input[type="password"][placeholder="Password"]', 'test');

    await click('#login-modal-ok');

    // Ember-Simple-Auth caches the attempted transition, so we end up right
    // where we wanted to be after authentication
    assert.equal(currentURL(), `/home/account/${account.id}`);
  });
});
