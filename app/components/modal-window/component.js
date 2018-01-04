import $ from 'jquery';
import UiModal from 'semantic-ui-ember/components/ui-modal';
import { run } from '@ember/runloop';
// const log = Ember.Logger.log;

export default UiModal.extend({
  // lifecycle
  didInsertElement() {
    this._super();

    run.scheduleOnce('afterRender', () => {
      $(this.element).modal({
        closable: this.get('closable') ? this.get('closable') : false,
        detachable: false,
        onApprove() {
          // prevent close on modal button
          return false;
        },
        onHidden: () => {
          this.cancelAction();
        }
      });

      if(this.get('showOnTransition')) {
        $(this.element).modal('show');
      }
    });
  },
  // actions
  actions: {
    keyDown(event) {
      switch(event.which) {
        case 13:
          this.okAction();
          break;
        case 27:
          this.cancelAction();
          break;
        default:
          // accept key press as normal
      }
    }
  }
});
