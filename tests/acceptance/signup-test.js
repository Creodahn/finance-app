import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | signup');

test('visiting /signup', async function(assert) {
  assert.expect(2);

  await visit('/');

  assert.equal(currentURL(), '/');

  await click('#signup');

  assert.equal(currentURL(), '/signup');
});

test('can cancel', async function(assert) {
  assert.expect(3);

  await visit('/');

  assert.equal(currentURL(), '/');

  await click('#signup');

  assert.equal(currentURL(), '/signup');

  await click('#signup-modal-cancel');

  assert.equal(currentURL(), '/');
});

test('can signup', async function(assert) {
  await visit('/');

  assert.equal(currentURL(), '/');

  await click('#signup');

  assert.equal(currentURL(), '/signup');

  await fillIn('input[type="text"][name="name"]', 'Justin Drew');
  await fillIn('input[type="text"][name="email"]', 'justin@test.com');
  await fillIn('input[type="password"][name="password"]', 'test');
  await fillIn('input[type="password"][name="password-confirm"]', 'test');

  await click('#signup-modal-ok');

  assert.equal(currentURL(), '/home');
});

test('signup button is hidden after signing up', async function(assert) {
  await visit('/');

  assert.equal(currentURL(), '/');

  await click('#signup');

  assert.equal(currentURL(), '/signup');

  await fillIn('input[type="text"][name="name"]', 'Justin Drew');
  await fillIn('input[type="text"][name="email"]', 'justin@test.com');
  await fillIn('input[type="password"][name="password"]', 'test');
  await fillIn('input[type="password"][name="password-confirm"]', 'test');

  await click('#signup-modal-ok');

  assert.equal(currentURL(), '/home');

  assert.equal(find('#signup').length, 0);
});
