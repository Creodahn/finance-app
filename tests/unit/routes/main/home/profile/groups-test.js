import { moduleFor, test } from 'ember-qunit';

moduleFor('route:main/home/profile/groups', 'Unit | Route | main/home/profile/groups', {
  // Specify the other units that are required for this test.
  needs: ['service:session']
});

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});
