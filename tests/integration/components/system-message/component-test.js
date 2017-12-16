import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('system-message', 'Integration | Component | system message', {
  integration: true
});

test('it renders', function(assert) {
  this.set('message', {
    content: 'this is a message'
  });
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{system-message message=message}}`);

  assert.equal(this.$().text().trim(), 'this is a message');
});
