import { moduleFor, test } from 'ember-qunit';

moduleFor('route:main/home/account/new', 'Unit | Route | main/home/account/new', {
  // Specify the other units that are required for this test.
  needs: ['service:session']
});

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});
