import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Object from '@ember/object';

module('Integration | Component | account list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('model', [
      Object.create({
        id: 1,
        balance: 50,
        name: 'test account'
      })
    ]);

    await render(hbs`{{account-list model=model}}`);

    assert.equal(this.$('.account-list > .record-row').length, 1);
  });
});
