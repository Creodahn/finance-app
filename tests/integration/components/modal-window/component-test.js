import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | modal window', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('cancelAction', function() {
      return true;
    });

    this.set('okAction', function() {
      return true;
    });

    await render(hbs`
      {{#modal-window
        cancelAction=(action cancelAction)
        okAction=(action okAction)
      }}
        template block text
      {{/modal-window}}
    `);

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
