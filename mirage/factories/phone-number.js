import { Factory, faker, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  areaCode(i) {
    return `${i}${i}${i}`;
  },
  countryCode: '+1',
  extension() {
    return faker.random.number.toString();
  },
  prefix(i) {
    return `${i}${i}${i}`;
  },
  subscriberNumber(i) {
    return `${i}${i}${i}${i}`;
  },
  contactInfoType: belongsTo(),
  profile: belongsTo()
});
