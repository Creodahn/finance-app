import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';
import createUser from 'finance-app/tests/helpers/create-user';

moduleForAcceptance('Acceptance | main/home/account/new');

test('cannot visit /home/account/new without authentication', async (assert) => {
  await visit('/home/account/new');

  assert.equal(currentURL(), '/login');
});

test('can visit /home/account/new if authenticated', async (assert) => {
  createUser();

  await visit('/home/account/new');

  assert.equal(currentURL(), '/login');

  await fillIn('input[type="text"][placeholder="Username"]', 'justin@test.com');
  await fillIn('input[type="password"][placeholder="Password"]', 'test');

  await click('#login-modal-ok');

  // Ember-Simple-Auth caches the attempted transition, so we end up right
  // where we wanted to be after authentication
  assert.equal(currentURL(), '/home/account/new');
});
