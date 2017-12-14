import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/profile/groups');

test('visiting /home/profile/groups', function(assert) {
  visit('/home/profile/groups');

  andThen(function() {
    assert.equal(currentURL(), '/home/profile/groups');
  });
});
