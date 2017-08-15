import Ember from 'ember';

export default Ember.Component.extend({
  // attributes
  tagName: '',
  // lifecycle
  didInsertElement() {
    // Ember.run.scheduleOnce('afterRender', () => {
    //   $('#dropdown-nav').menu();
    // });
  }
});
