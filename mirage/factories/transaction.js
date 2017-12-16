import { Factory, faker, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  amount: faker.finance.amount,
  account: belongsTo(),
  profile: belongsTo(),
  transactionType: belongsTo()
});
