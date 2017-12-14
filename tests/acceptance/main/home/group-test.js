import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/group');

test('visiting /home/group', function(assert) {
  visit('/home/group');

  andThen(function() {
    assert.equal(currentURL(), '/home/group');
  });
});
