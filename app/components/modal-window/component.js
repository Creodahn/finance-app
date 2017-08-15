import Ember from 'ember';
// const log = Ember.Logger.log;

export default Ember.Component.extend({
  // attributes
  tagName: '',
  // lifecycle
  didInsertElement() {
    this._super();

    Ember.run.scheduleOnce('afterRender', () => {
      const id = `#${this.get('id')}`;

      $(id).modal({
        closable: this.get('closable') ? this.get('closable') : false,
        onHidden: () => {
          this.sendAction('modalClosed');
        }
      });

      if(this.get('showOnTransition')) {
        $(id).modal('show');
      }
    });
  },
  actions: {
    cancelAction() {
      this.sendAction('cancelAction');
    },
    okAction() {
      this.sendAction('okAction');
    }
  }
});
