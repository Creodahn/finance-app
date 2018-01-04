import { get } from '@ember/object';
import { run } from '@ember/runloop';

export default function runAttrTest(assert, modelName, attr, type, readOnly, value) {
  const store = this.owner.lookup('service:store'),
        record = run(() => store.createRecord('user')),
        model = store.modelFor(modelName),
        attribute = get(model, 'attributes').get(attr);

  run(function() {
    record.set(attr, value);
  });

  assert.ok(attribute.isAttribute, 'expected to be an attribute');
  assert.equal(attribute.name, attr, `is called ${attribute.name}. Expected ${attr}`);
  assert.equal(attribute.type, type, `type is ${attribute.type}. Expected ${type}`);
  assert.equal(!!attribute.options.readOnly, readOnly, `expected to be${readOnly ? '' : ' not'} read only`);
  assert.equal(record.get(attr), value, `${modelName}.${attr} has value ${record.get(attr)}. Expected '${value}''`);
}
