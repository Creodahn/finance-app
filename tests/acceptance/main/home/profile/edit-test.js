import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/profile/edit');

test('cannot visit /home/profile/edit without authentication', function(assert) {
  visit('/home/profile/edit');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
