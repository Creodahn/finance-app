import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/home/profile/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:main/home/profile/edit');
    assert.ok(route);
  });
});