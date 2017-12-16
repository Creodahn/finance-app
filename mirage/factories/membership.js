import { Factory, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  group: belongsTo(),
  profile: belongsTo(),
  role: belongsTo()
});
