import { Factory, faker, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  description: faker.lorem.paragraph,
  name: faker.random.words,
  addresses: hasMany(),
  phoneNumbers: hasMany()
});
