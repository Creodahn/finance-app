import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/group');

test('cannot visit /home/group without authentication', function(assert) {
  visit('/home/group');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
