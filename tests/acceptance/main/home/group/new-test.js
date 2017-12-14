import { test } from 'qunit';
import moduleForAcceptance from 'finance-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/home/group/new');

test('visiting /home/group/new', function(assert) {
  visit('/home/group/new');

  andThen(function() {
    assert.equal(currentURL(), '/home/group/new');
  });
});
