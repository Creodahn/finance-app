import Ember from 'ember';
import $ from 'jquery';
import Controller from '@ember/controller';
const { log } = Ember;

export default Controller.extend({
  addUsers(users) {
    log(users);
  },
  cancel() {
    $('#user-search-modal').modal('hide');
  },
  invite() {
    $('#user-search-modal').modal('show');
  }
});
