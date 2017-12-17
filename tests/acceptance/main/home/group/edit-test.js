import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/group/edit');

test('cannot visit /home/group/edit without authentication', function(assert) {
  visit('/home/group/edit');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
