import { Factory, faker, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  address: `${faker.address.streetAddress} ${faker.address.streetName} ${faker.address.streetSuffix}`,
  apartmentNumber(i) {
    return i === 0 ? null : i;
  },
  city: faker.address.city,
  isPrimary: faker.random.boolean,
  state: faker.address.stateAbbr,
  zipCode: faker.address.zipCode,
  contactInfoType: belongsTo(),
  profile: belongsTo()
});
