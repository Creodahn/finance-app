import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('testimonial-card', 'Integration | Component | testimonial card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{testimonial-card header="header" subheader="subheader" body="body"}}`);

  assert.equal(this.$('div.header').text().trim(), 'header');
  assert.equal(this.$('h4.sub.header').text().trim(), 'subheader');
  assert.equal(this.$('div.content > p').text().trim(), 'body');
});
