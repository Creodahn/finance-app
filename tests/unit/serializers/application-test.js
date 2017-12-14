import { moduleForModel, test } from 'ember-qunit';

moduleForModel('application', 'Unit | Serializer | application', {
  // Specify the other units that are required for this test.
  needs: [
    'model:account-type',
    'model:account',
    'model:address',
    'model:audit',
    'model:base-model',
    'model:contact-info-type',
    'model:group',
    'model:image',
    'model:membership',
    'model:phone-number',
    'model:profile',
    'model:right',
    'model:role',
    'model:transaction-type',
    'model:transaction',
    'serializer:application'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  const record = this.subject(),
        serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
