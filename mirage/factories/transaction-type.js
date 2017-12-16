import { Factory, faker, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  isDebit: faker.random.boolean,
  name: faker.random.word,
  transactions: hasMany()
});
