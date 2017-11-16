import Service from '@ember/service';

export default Service.extend({
  process(type, content) {
    return { type, content };
  }
});
