import { Factory, faker, belongsTo, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  accountNumber() {
    return faker.random.number.toString();
  },
  balance: faker.finance.amount,
  description: faker.lorem.paragraph,
  name: faker.finance.accountName,
  routingNumber() {
    return faker.random.number.toString();
  },
  accountType: belongsTo(),
  group: belongsTo(),
  profile: belongsTo(),
  transactions: hasMany()
});
