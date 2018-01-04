import $ from 'jquery';
import ENV from 'finance-app/config/environment';
import { Promise } from 'rsvp';
import { run } from '@ember/runloop';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${ENV.APP.apiURL}/login`,
  refreshAccessTokens: true,
  serverTokenRevocationEndpoint: `${ENV.APP.apiURL}/logout`,
  authenticate(username, password) {
    return new Promise((resolve, reject) => {
      $.ajax({
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
        run(function() {
          resolve({
            access_token: response.auth_token
          });
        });
      }).fail((xhr) => {
        const response = xhr.responseText;

        run(function() {
          reject(response);
        });
      });
    });
  },
  invalidate(session) {
    return $.ajax({
      url: this.get('serverTokenRevocationEndpoint'),
      type: 'DELETE',
      headers: {
        Authorization: `Bearer ${session.access_token}`
      }
    });
  }
});
