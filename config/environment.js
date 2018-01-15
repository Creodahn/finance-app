/* eslint-env node */
'use strict';

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'finance-app',
    'ember-cli-mirage': {
      enabled: false
    },
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      apiURL: 'http://localhost:3000',
      filestackKey: 'AGfPm0pN1Q3SY6LVzGqvKz'
    }
  };

  ENV.contentSecurityPolicy = {
    'script-src': '\'self\' \'unsafe-inline\' \'unsafe-eval\'',
    // Allow fonts to be loaded from http://fonts.gstatic.com
    'font-src': '\'self\' https://fonts.gstatic.com',
    'connect-src': '\'self\' http://localhost:3000 https://finance-app-api.herokuapp.com',
    'img-src': '\'self\' data:',
    // Allow inline styles and loaded CSS from http://fonts.googleapis.com
    'style-src': '\'self\' \'unsafe-inline\' https://fonts.googleapis.com',
    'media-src': '\'self\''
  };

  if(environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if(environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;

    ENV['ember-cli-mirage'] = {
      enabled: true
    };
  }

  if(environment === 'production') {
    ENV.APP.apiURL = 'https://finance-app-api.herokuapp.com';
  }

  return ENV;
};
