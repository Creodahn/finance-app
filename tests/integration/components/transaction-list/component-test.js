import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import Object from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | transaction list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('model', {
      balance: 0,
      transactions: [
        Object.create({
          id: 1,
          amount: 50,
          transactionDate: new Date()
        }),
        Object.create({
          id: 2,
          amount: -50,
          transactionDate: new Date()
        })
      ]
    });

    await render(hbs`{{transaction-list model=model}}`);

    assert.equal(this.$('.transaction-list > .record-row').length, 2);
  });
});
