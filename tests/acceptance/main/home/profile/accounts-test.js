import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/profile/accounts');

test('cannot visit /home/profile/accounts without authentication', function(assert) {
  visit('/home/profile/accounts');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
