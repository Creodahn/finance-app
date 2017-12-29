import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';
import createUser from 'finance-app/tests/helpers/create-user';

moduleForAcceptance('Acceptance | login');

test('visit login', async (assert) => {
  assert.expect(2);

  await visit('/');

  assert.equal(currentURL(), '/', `expected /, got ${currentURL()}`);

  await click('#log-in');

  assert.equal(currentURL(), '/login', `expected /login, got ${currentURL()}`);
});

test('can login', async (assert) => {
  assert.expect(3);

  createUser();

  await visit('/');

  assert.equal(currentURL(), '/', `expected /, got ${currentURL()}`);

  await click('#log-in');

  assert.equal(currentURL(), '/login', `expected /login, got ${currentURL()}`);

  await fillIn('input[type="text"][placeholder="Username"]', 'justin@test.com');
  await fillIn('input[type="password"][placeholder="Password"]', 'test');

  await click('#login-modal-ok');

  assert.equal(currentURL(), '/home/dashboard', `expected /home/dashboard, got ${currentURL()}`);
});

test('can cancel', async (assert) => {
  assert.expect(3);

  await visit('/');

  assert.equal(currentURL(), '/', `expected /, got ${currentURL()}`);

  await click('#log-in');

  assert.equal(currentURL(), '/login', `expected /login, got ${currentURL()}`);

  await click('#login-modal-cancel');

  assert.equal(currentURL(), '/', `expected /, got ${currentURL()}`);
});

test('redirect to main/home if already authenticated', async (assert) => {
  assert.expect(4);

  // server.create('profile', { name: 'Justin Drew' });
  // server.create('user', { username: 'justin@test.com', password: 'test', profileId: 1 });

  await visit('/');

  assert.equal(currentURL(), '/');

  await click('#log-in');

  assert.equal(currentURL(), '/login');

  await fillIn('input[type="text"][placeholder="Username"]', 'justin@test.com');
  await fillIn('input[type="password"][placeholder="Password"]', 'test');

  await click('#login-modal-ok');

  assert.equal(currentURL(), '/home/dashboard', `expected /home/dashboard, got ${currentURL()}`);

  await visit('/login');

  assert.equal(currentURL(), '/home/dashboard');
});
