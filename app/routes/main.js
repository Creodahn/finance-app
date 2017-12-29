import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('sessionAccount.profile');
  },
  actions: {
    didTransition() {
      this._super(...arguments);

      Ember.run.scheduleOnce('afterRender', () => {
        $('.ui.dropdown').dropdown();
      });
    }
  }
});
