import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/account/new');

test('cannot visit /home/account/new without authentication', function(assert) {
  visit('/home/account/new');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
