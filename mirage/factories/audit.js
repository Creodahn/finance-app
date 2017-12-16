import { Factory, faker, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  action: faker.list.random('UPDATE', 'INSERT', 'DELETE'),
  columName: faker.list.random('name', 'description', 'foo', 'bar'),
  createdAt: faker.date.past,
  currentValue: faker.lorem.word,
  initialValue: faker.random.word,
  recordId: faker.random.number,
  recordType: faker.list.random('account', 'profile'),
  updatedAt: faker.date.past,
  auditable: belongsTo(),
  profile: belongsTo()
});
