import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';
import createUser from 'finance-app/tests/helpers/create-user';

moduleForAcceptance('Acceptance | main/home/group/edit');

test('cannot visit /home/group/edit without authentication', async (assert) => {
  await visit('/home/group/edit');

  assert.equal(currentURL(), '/login');
});

test('can visit /home/group/edit if authenticated', async (assert) => {
  const group = server.create('group', { name: 'test group' });
  createUser();

  await visit(`/home/group/${group.id}`);

  assert.equal(currentURL(), '/login');

  await fillIn('input[type="text"][placeholder="Username"]', 'justin@test.com');
  await fillIn('input[type="password"][placeholder="Password"]', 'test');

  await click('#login-modal-ok');

  // Ember-Simple-Auth caches the attempted transition, so we end up right
  // where we wanted to be after authentication
  assert.equal(currentURL(), `/home/group/${group.id}`);
});
