import { Factory, faker, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  email: faker.internet.email,
  name() {
    return `${faker.name.firstName} ${faker.name.lastName}`;
  },
  accounts: hasMany(),
  addresses: hasMany(),
  groups: hasMany(),
  memberships: hasMany(),
  phoneNumbers: hasMany(),
  roles: hasMany(),
  uploadedImages: hasMany()
});
