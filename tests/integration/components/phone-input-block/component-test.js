import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('phone-input-block', 'Integration | Component | phone input block', {
  integration: true
});

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

  assert.ok(this.$('#areaCode'), 'did not find areaCode input');
  assert.equal(this.$('#areaCode').val(), '555', `expected areaCode = '555', got ${this.$('#areaCode').val()}`);
  assert.ok(this.$('#prefix'), 'did not find prefix input');
  assert.equal(this.$('#prefix').val(), '555', `expected prefix = '555', got ${this.$('#prefix').val()}`);
  assert.ok(this.$('#subscriberNumber'), 'did not find subscriberNumber input');
  assert.equal(this.$('#subscriberNumber').val(), '5555', `expected subscriberNumber = '5555', got ${this.$('#subscriberNumber').val()}`);
  assert.ok(this.$('#extension'), 'did not find extension input');
  assert.equal(this.$('#extension').val(), '', `expected extension = '', got ${this.$('#extension').val()}`);
});
