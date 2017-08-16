import Ember from 'ember';

export default Ember.Route.extend({
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
