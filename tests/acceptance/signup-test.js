import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | signup');

test('visiting /signup', function(assert) {
  assert.expect(2);
  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/');

    click('#signup');

    andThen(function() {
      assert.equal(currentURL(), '/signup');
    });
  });
});

test('can cancel', function(assert) {
  assert.expect(3);
  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/');

    click('#signup');

    andThen(() => {
      assert.equal(currentURL(), '/signup');

      click('#signup-modal-cancel');

      andThen(() => {
        assert.equal(currentURL(), '/');
      });
    });
  });
});

test('can signup', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/');
  });
});

test('redirected to /home if already authenticated', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/');
  });
});
