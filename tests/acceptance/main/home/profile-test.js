import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/profile');

test('visiting /home/profile', function(assert) {
  visit('/home/profile');

  andThen(function() {
    assert.equal(currentURL(), '/home/profile');
  });
});
