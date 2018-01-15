import $ from 'jquery';
import UiModal from 'semantic-ui-ember/components/ui-modal';
import RunMixin from 'ember-lifeline/mixins/run';

export default UiModal.extend(RunMixin, {
  // attributes
  closable: false,
  detachable: false,
  // methods
  onApprove() {
    // prevent close on modal button
    return false;
  },
  onHidden() {
    this.cancelAction();
  },
  // lifecycle
  didRender() {
    this._super(...arguments);

    if(this.get('showOnTransition')) {
      $(this.element).modal('show');
    }
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
