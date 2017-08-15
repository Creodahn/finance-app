import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('main', { path: '/' }, function() {
    this.route('home', function() {
      this.route('group', function() {
        this.route('new');
      });
      this.route('profile', function() {
        this.route('edit');
        this.route('groups');
        this.route('accounts');
      });
      this.route('account', function() {
        this.route('new');
      });
    });
  });
});

export default Router;
