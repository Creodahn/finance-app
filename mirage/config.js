export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'http://localhost:3000';
  // this.urlPrefix = 'https://finance-app-api.herokuapp.com';

  this.post('login', function() {
    return new Response(200, { auth_token: 'aju50fj9' });
  });

  this.del('logout', function() {
    return new Response(204, {});
  });

  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.resource('accounts');

  this.resource('account-types');

  this.resource('addresses');

  this.resource('audits');

  this.resource('contact-info-types');

  this.get('/confirmemail', { data: [false] });

  this.resource('groups');

  this.resource('images');

  this.resource('memberships');

  this.resource('phone-numbers');

  this.resource('profiles');

  this.resource('rights');

  this.resource('roles');

  this.resource('transactions');

  this.resource('transaction-types');

  this.resource('users');
}
