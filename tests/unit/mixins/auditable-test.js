import AuditableMixin from 'finance-app/mixins/auditable';
import { module, test } from 'qunit';
import Object from '@ember/object';

module('Unit | Mixin | auditable');

// Replace this with your real tests.
test('it works', function(assert) {
  const AuditableObject = Object.extend(AuditableMixin),
        subject = AuditableObject.create();

  assert.ok(subject);
});
