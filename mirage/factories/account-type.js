import { Factory, faker, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  description: faker.lorem.paragraph,
  isDebt: faker.random.boolean,
  name(i) {
    return `Account Type ${i + 1}`;
  },
  requireRoutingNumber: faker.random.boolean,
  accounts: hasMany()
});
