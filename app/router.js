import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
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
        this.route('edit', { path: '/:id' });
      });
      this.route('profile', function() {
        this.route('edit', function() {
          this.route('address');
          this.route('phone');
        });
        this.route('groups');
        this.route('accounts');
      });
      this.route('account', function() {
        this.route('new');
        this.route('edit', { path: '/:id' });
      });
      this.route('dashboard');
    });
  });
});

export default Router;
