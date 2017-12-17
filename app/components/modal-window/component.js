import Ember from 'ember';
import UiModal from 'semantic-ui-ember/components/ui-modal';
// const log = Ember.Logger.log;

export default UiModal.extend({
  // lifecycle
  didInsertElement() {
    this._super();

    Ember.run.scheduleOnce('afterRender', () => {
      $(this.element).modal({
        closable: this.get('closable') ? this.get('closable') : false,
        detachable: false,
        onApprove() {
          // prevent close on modal button
          return false;
        },
        onHidden: () => {
          this.sendAction('modalClosed');
        }
      });

      if(this.get('showOnTransition')) {
        $(this.element).modal('show');
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
