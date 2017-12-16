import { Factory, faker, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.random.word,
  groups: hasMany(),
  memberships: hasMany(),
  profiles: hasMany(),
  rights: hasMany()
});
