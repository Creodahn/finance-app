import verifyEmail from 'finance-app/utils/verify-email';
import { module, test } from 'qunit';

module('Unit | Utility | verify email', function() {
  // Replace this with your real tests.
  test('returns true on emails with valid structure', function(assert) {
    assert.ok(verifyEmail('test@example.com'));
    assert.ok(verifyEmail('test_email@example.com'));
    assert.ok(verifyEmail('test42@email.com'));
  });

  test('returns false on invalid emails', function(assert) {
    assert.expect(8);
    assert.notOk(verifyEmail('not_an_email'));
    assert.notOk(verifyEmail('not_an_email@foo'));
    assert.notOk(verifyEmail('@foo.com'));
    assert.notOk(verifyEmail());
    assert.notOk(verifyEmail(''));
    assert.notOk(verifyEmail([]));
    assert.notOk(verifyEmail({}));
    assert.notOk(verifyEmail(42));
  });
});