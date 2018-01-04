import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | testimonial card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{testimonial-card header="header" subheader="subheader" body="body"}}`);

    assert.equal(this.$('div.header').text().trim(), 'header');
    assert.equal(this.$('h4.sub.header').text().trim(), 'subheader');
    assert.equal(this.$('div.content > p').text().trim(), 'body');
  });
});