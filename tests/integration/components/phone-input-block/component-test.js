import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | phone input block', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('phone', {
      isPrimary: true,
      countryCode: '1',
      areaCode: '555',
      prefix: '555',
      subscriberNumber: '5555',
      extension: ''
    });

    await this.render(hbs`{{phone-input-block model=phone}}`);

    assert.ok(this.element.querySelector('#areaCode'), 'did not find areaCode input');
    assert.equal(this.element.querySelector('#areaCode').value, '555', `expected areaCode = '555', got ${this.element.querySelector('#areaCode').value}`);
    assert.ok(this.element.querySelector('#prefix'), 'did not find prefix input');
    assert.equal(this.element.querySelector('#prefix').value, '555', `expected prefix = '555', got ${this.element.querySelector('#prefix').value}`);
    assert.ok(this.element.querySelector('#subscriberNumber'), 'did not find subscriberNumber input');
    assert.equal(this.element.querySelector('#subscriberNumber').value, '5555', `expected subscriberNumber = '5555', got ${this.element.querySelector('#subscriberNumber').value}`);
    assert.ok(this.element.querySelector('#extension'), 'did not find extension input');
    assert.equal(this.element.querySelector('#extension').value, '', `expected extension = '', got ${this.element.querySelector('#extension').value}`);
  });
});
