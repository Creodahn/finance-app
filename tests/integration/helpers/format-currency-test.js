import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('format-currency', 'Integration | helper | format-currency', {
  integration: true
});

// Replace this with your real tests.
test('it formats a number as currency', function(assert) {
  const expected = '$1,234.00';
  let actual = '';

  this.set('inputValue', '1234');

  this.render(hbs`{{format-currency inputValue}}`);

  actual = this.$().text().trim();

  assert.equal(actual, expected, `expected '${expected}', got '${actual}'`);
});

test('it formats a negative number as currency', function(assert) {
  const expected = '$-1,234.00';
  let actual = '';

  this.set('inputValue', '-1234');

  this.render(hbs`{{format-currency inputValue}}`);

  actual = this.$().text().trim();

  assert.equal(actual, expected, `expected '${expected}', got '${actual}'`);
});
