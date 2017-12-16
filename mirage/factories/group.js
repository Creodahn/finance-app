import { Factory, faker, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  description: faker.lorem.paragraph,
  membershipCount: faker.random.number,
  name: faker.random.word,
  accounts: hasMany(),
  profiles: hasMany()
});
