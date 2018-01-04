import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | helper | format-currency', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it formats a number as currency', async function(assert) {
    const expected = '$1,234.00';
    let actual = '';

    this.set('inputValue', '1234');

    await render(hbs`{{format-currency inputValue}}`);

    actual = this.$().text().trim();

    assert.equal(actual, expected, `expected '${expected}', got '${actual}'`);
  });

  test('it formats a negative number as currency', async function(assert) {
    const expected = '$-1,234.00';
    let actual = '';

    this.set('inputValue', '-1234');

    await render(hbs`{{format-currency inputValue}}`);

    actual = this.$().text().trim();

    assert.equal(actual, expected, `expected '${expected}', got '${actual}'`);
  });
});