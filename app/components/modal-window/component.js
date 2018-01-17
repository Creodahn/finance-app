import $ from 'jquery';
import Component from '@ember/component';
// import UiModal from 'semantic-ui-ember/components/ui-modal';

export default Component.extend({
  // attributes
  closable: false,
  detachable: false,
  tagName: '',
  // lifecycle
  didRender() {
    this._super(...arguments);

    if(this.get('showOnTransition')) {
      $(`#${this.get('id')}`).modal('show');
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
