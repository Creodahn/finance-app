import Ember from 'ember';
import ENV from 'finance-app/config/environment';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${ENV.APP.apiURL}/login`,
  refreshAccessTokens: true,
  serverTokenRevocationEndpoint: `${ENV.APP.apiURL}/logout`,
  authenticate(username, password) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.get('serverTokenEndpoint'),
        type: 'POST',
        data: JSON.stringify({
          username,
          password
        }),
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json;charset=utf-8',
        },
        dataType: 'json'
      }).done((response) => {
        Ember.run(function() {
          resolve({
            access_token: response.auth_token
          });
        });
      }).fail((xhr) => {
        const response = xhr.responseText;

        Ember.run(function() {
          reject(response);
        });
      });
    });
  },
  invalidate(session) {
    return Ember.$.ajax({
      url: this.get('serverTokenRevocationEndpoint'),
      type: 'DELETE',
      headers: {
        Authorization: `Bearer ${session.access_token}`
      }
    });
  }
});
