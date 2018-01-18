import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, fillIn, click, currentURL } from '@ember/test-helpers';

module('Acceptance | signup', function(hooks) {
  setupApplicationTest(hooks);

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
    await fillIn('input[type="text"][name="email"]', 'justin2@test.com');
    await fillIn('input[type="password"][name="password"]', 'test');
    await fillIn('input[type="password"][name="password-confirm"]', 'test');

    await click('#signup-modal-ok');

    assert.equal(currentURL(), '/home/dashboard');

    assert.equal(this.element.querySelectorAll('#signup').length, 0);
  });
});
