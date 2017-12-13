export default function runRelationshipTest(assert, modelName, relName, relType, relModelName, inverse, readOnly, polymorphic) {
  const record = this.store().modelFor(modelName),
        relationship = Ember.get(record, 'relationshipsByName').get(relName);

  assert.equal(relationship.key, relName, `expected has relationship named ${relName}`);
  assert.equal(relationship.kind, relType, `expected kind of relationship is ${relType}`);
  assert.equal(relationship.type, relModelName, `expected uses ${relModelName} model`);
  assert.equal(relationship.options.inverse, inverse, `expected inverse to be ${inverse}`);
  assert.equal(!!relationship.options.readOnly, readOnly, `expected to be ${readOnly ? '' : 'not'} read only`);
  assert.equal(!!relationship.options.polymorphic, polymorphic, `expected to be ${polymorphic ? '' : 'not'} polymorphic`);
}
