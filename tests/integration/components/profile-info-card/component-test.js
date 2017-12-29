import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-info-card', 'Integration | Component | profile info card', {
  integration: true
});

test('it renders', function(assert) {
  const year = new Date().getFullYear();

  this.set('profile', {
    bio: 'test bio',
    createdAt: new Date(),
    name: 'John Doe',
  });

  this.render(hbs`{{profile-info-card model=profile}}`);

  assert.equal(this.$('.header').text().trim(), 'John Doe');
  assert.equal(this.$('.meta').text().trim(), `Joined in ${year}`);
  assert.equal(this.$('.description').text().trim(), 'test bio');
});
