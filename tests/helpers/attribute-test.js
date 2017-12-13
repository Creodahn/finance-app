export default function runAttrTest(assert, modelName, attr, type, readOnly, value) {
  const record = this.subject(),
        model = this.store().modelFor(modelName),
        attribute = Ember.get(model, 'attributes').get(attr);

  Ember.run(function() {
    record.set(attr, value);
  });

  assert.ok(attribute.isAttribute, 'expected to be an attribute');
  assert.equal(attribute.name, attr, `is called ${attribute.name}. Expected ${attr}`);
  assert.equal(attribute.type, type, `type is ${attribute.type}. Expected ${type}`);
  assert.equal(!!attribute.options.readOnly, readOnly, `expected to be${readOnly ? '' : ' not'} read only`);
  assert.equal(record.get(attr), value, `${modelName}.${attr} has value ${record.get(attr)}. Expected '${value}''`);
}
