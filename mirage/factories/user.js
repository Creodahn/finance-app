import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  password: faker.internet.password,
  username: faker.internet.userName
});
