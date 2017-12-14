import { moduleFor, test } from 'ember-qunit';

moduleFor('route:main/home/group', 'Unit | Route | main/home/group', {
  // Specify the other units that are required for this test.
  needs: ['service:session']
});

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});
