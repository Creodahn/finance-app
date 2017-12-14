import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/group/edit');

test('visiting /home/group/edit', function(assert) {
  visit('/home/group/edit');

  andThen(function() {
    assert.equal(currentURL(), '/home/group/edit');
  });
});
