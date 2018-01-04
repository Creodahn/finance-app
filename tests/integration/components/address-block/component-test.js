import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | address block', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('address', {
      address: '1 Main St',
      city: 'Denver',
      state: 'CO',
      zipCode: '00000',
      contactInfoType: {
        name: 'Home'
      }
    });

    await render(hbs`{{address-block model=address}}`);

    assert.ok(this.$().text().indexOf('Home address') > -1);
    assert.ok(this.$().text().indexOf('1 Main St') > -1);
    assert.ok(this.$().text().indexOf('Denver, CO 00000') > -1);
  });
});