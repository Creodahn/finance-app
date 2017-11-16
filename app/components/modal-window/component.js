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
        onApprove() {
          // prevent close on modal button
          return false;
        },
        onHidden: () => {
          this.sendAction('modalClosed');
        }
      });

      if(this.get('showOnTransition')) {
        $(id).modal('show');
      }
    });
  },
  // actions
  actions: {
    cancelAction() {
      this.sendAction('cancelAction');
    },
    keyDown(event) {
      switch(event.which) {
        case 13:
          this.actions.okAction.call(this);
          break;
        case 27:
          this.actions.cancelAction.call(this);
          break;
        default:
          // accept key press as normal
      }
    },
    okAction() {
      this.sendAction('okAction');
    }
  }
});
