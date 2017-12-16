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
  server.create('profile', { name: 'Justin Drew' });
  server.create('user', { username: 'justin@test.com', password: 'test', profileId: 1 });

  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/', `expected /, got ${currentURL()}`);

    click('#log-in');

    andThen(() => {
      assert.equal(currentURL(), '/login', `expected /login, got ${currentURL()}`);

      $('input[type="text"][placeholder="Username"]').val('justin@test.com');
      $('input[type="password"][placeholder="Password"]').val('test');

      $('button.positive').click();

      andThen(() => {
        assert.equal(currentURL(), '/home', `expected /home, got ${currentURL()}`);
      });
    });
  });
});
