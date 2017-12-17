import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/profile/groups');

test('cannot visit /home/profile/groups without authentication', function(assert) {
  visit('/home/profile/groups');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
