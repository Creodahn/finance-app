import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filestack-upload', 'Integration | Component | filestack upload', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{filestack-upload label="File Upload"}}`);

  assert.equal(this.$().text().trim(), 'File Upload');
});
