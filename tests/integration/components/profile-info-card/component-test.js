import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | profile info card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const year = new Date().getFullYear();

    this.set('profile', {
      bio: 'test bio',
      createdAt: new Date(),
      name: 'John Doe',
    });

    await render(hbs`{{profile-info-card model=profile}}`);

    assert.equal(this.$('.header').text().trim(), 'John Doe');
    assert.equal(this.$('.meta').text().trim(), `Joined in ${year}`);
    assert.equal(this.$('.description').text().trim(), 'test bio');
  });
});