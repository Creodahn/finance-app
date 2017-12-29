import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('address-block', 'Integration | Component | address block', {
  integration: true
});

test('it renders', function(assert) {
  this.set('address', {
    address: '1 Main St',
    city: 'Denver',
    state: 'CO',
    zipCode: '00000',
    contactInfoType: {
      name: 'Home'
    }
  });

  this.render(hbs`{{address-block model=address}}`);

  assert.ok(this.$().text().indexOf('Home address') > -1);
  assert.ok(this.$().text().indexOf('1 Main St') > -1);
  assert.ok(this.$().text().indexOf('Denver, CO 00000') > -1);
});
