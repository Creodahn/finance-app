import Ember from 'ember';
import AuditableMixin from 'finance-app/mixins/auditable';
import { module, test } from 'qunit';

module('Unit | Mixin | auditable');

// Replace this with your real tests.
test('it works', function(assert) {
  const AuditableObject = Ember.Object.extend(AuditableMixin),
        subject = AuditableObject.create();
  assert.ok(subject);
});
