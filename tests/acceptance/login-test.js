import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visit login', (assert) => {
  assert.expect(2);

  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/', `expected /, got ${currentURL()}`);

    click('#log-in');

    andThen(() => {
      assert.equal(currentURL(), '/login', `expected /login, got ${currentURL()}`);
    });
  });
});

test('can login', (assert) => {
  assert.expect(3);

  server.create('profile', { name: 'Justin Drew' });
  server.create('user', { username: 'justin@test.com', password: 'test', profileId: 1 });

  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/', `expected /, got ${currentURL()}`);

    click('#log-in');

    andThen(() => {
      assert.equal(currentURL(), '/login', `expected /login, got ${currentURL()}`);

      andThen(() => {
        fillIn('input[type="text"][placeholder="Username"]', 'justin@test.com');
        fillIn('input[type="password"][placeholder="Password"]', 'test');

        click('#login-modal-ok');

        andThen(() => {
          assert.equal(currentURL(), '/home', `expected /home, got ${currentURL()}`);
        });
      });
    });
  });
});

test('can cancel', (assert) => {
  assert.expect(3);

  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/', `expected /, got ${currentURL()}`);

    click('#log-in');

    andThen(() => {
      assert.equal(currentURL(), '/login', `expected /login, got ${currentURL()}`);

      click('#login-modal-cancel');

      andThen(() => {
        assert.equal(currentURL(), '/', `expected /, got ${currentURL()}`);
      });
    });
  });
});

test('redirect to main/home if already authenticated', function(assert) {
  assert.expect(4);

  server.create('profile', { name: 'Justin Drew' });
  server.create('user', { username: 'justin@test.com', password: 'test', profileId: 1 });

  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/');

    click('#log-in');

    andThen(() => {
      assert.equal(currentURL(), '/login');

      fillIn('input[type="text"][placeholder="Username"]', 'justin@test.com');
      fillIn('input[type="password"][placeholder="Password"]', 'test');

      click('#login-modal-ok');

      andThen(() => {
        assert.equal(currentURL(), '/home', `expected /home, got ${currentURL()}`);

        visit('/login');

        andThen(() => {
          assert.equal(currentURL(), '/home');
        });
      });
    });
  });
});
