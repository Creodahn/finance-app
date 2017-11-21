import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('testimonial-card', 'Integration | Component | testimonial card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{testimonial-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#testimonial-card}}
      template block text
    {{/testimonial-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
