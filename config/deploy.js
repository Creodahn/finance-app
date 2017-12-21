/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  const ENV = {
    build: {},
    redis: {
      allowOverwrite: true
    },
    'revision-data': {
      type: 'git-commit'
    }
  };

  ENV.build.environment = deployTarget || 'development';
  ENV.redis.url = process.env.REDIS_URL || 'redis://127.0.0.1:6379/';

  switch(true) {
    case ENV.build.environment === 'development':
      ENV.cp = {
        destDir: '~/projects/finance-app-builds'
      };
      break;
    case ENV.build.environment === 'test':
      // ENV.cp = {
      //   destDir: ''
      // };
      break;
    case ENV.build.environment === 'production':
      // need to figure this out
      // ENV.cp = {
      //   destDir: ''
      // };
      break;
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
