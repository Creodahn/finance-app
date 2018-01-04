import ImageableMixin from 'finance-app/mixins/imageable';
import { module, test } from 'qunit';
import Object from '@ember/object';

module('Unit | Mixin | imageable');

// Replace this with your real tests.
test('it works', function(assert) {
  const ImageableObject = Object.extend(ImageableMixin),
        subject = ImageableObject.create();

  assert.ok(subject);
});
