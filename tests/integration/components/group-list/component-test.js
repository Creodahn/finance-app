import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | group list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('groups', [
      {
        id: 1,
        balance: -50,
        name: 'test group',
        memberships: [
          {
            id: 1
          }
        ]
      }
    ]);

    await render(hbs`{{group-list model=groups}}`);

    assert.equal(this.$('.group-list > .record-row').length, 1);
  });
});
