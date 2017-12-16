import { Factory, faker, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  description: faker.lorem.paragraph,
  fileName: faker.system.fileName,
  url: faker.image.imageUrl,
  imageable: belongsTo(),
  uploader: belongsTo()
});
