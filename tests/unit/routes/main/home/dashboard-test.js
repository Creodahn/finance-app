import { moduleFor, test } from 'ember-qunit';

moduleFor('route:main/home/dashboard', 'Unit | Route | main/home/dashboard', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});
