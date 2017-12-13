import Ember from 'ember';
import ImageableMixin from 'finance-app/mixins/imageable';
import { module, test } from 'qunit';

module('Unit | Mixin | imageable');

// Replace this with your real tests.
test('it works', function(assert) {
  const ImageableObject = Ember.Object.extend(ImageableMixin),
        subject = ImageableObject.create();

  assert.ok(subject);
});
