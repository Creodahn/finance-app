import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/account/edit');

test('visiting /home/account/edit', function(assert) {
  visit('/home/account/edit');

  andThen(function() {
    assert.equal(currentURL(), '/home/account/edit');
  });
});
