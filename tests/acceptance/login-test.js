import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, fillIn, click, currentURL } from '@ember/test-helpers';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  test('visit login', async (assert) => {
    assert.expect(2);

    await visit('/');

    assert.equal(currentURL(), '/', `expected /, got ${currentURL()}`);

    await click('#log-in');

    assert.equal(currentURL(), '/login', `expected /login, got ${currentURL()}`);
  });

  test('can login', async (assert) => {
    assert.expect(3);

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

  test('redirect to main/home/dashboard if already authenticated', async (assert) => {
    assert.expect(4);

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
});
