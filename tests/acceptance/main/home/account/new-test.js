import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/account/new');

test('visiting /home/account/new', function(assert) {
  visit('/home/account/new');

  andThen(function() {
    assert.equal(currentURL(), '/home/account/new');
  });
});
