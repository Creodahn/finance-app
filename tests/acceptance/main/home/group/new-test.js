import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/group/new');

test('cannot visit /home/group/new without authentication', function(assert) {
  visit('/home/group/new');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
