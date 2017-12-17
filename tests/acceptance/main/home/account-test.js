import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/account');

test('cannot visit /home/account without authentication', function(assert) {
  visit('/home/account');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
