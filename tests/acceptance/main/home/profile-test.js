import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/profile');

test('cannot visit /home/profile without authentication', function(assert) {
  visit('/home/profile');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
