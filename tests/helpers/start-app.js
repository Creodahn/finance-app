import Application from '../../app';
import config from '../../config/environment';
import createUser from 'finance-app/tests/helpers/create-user';
import { merge } from '@ember/polyfills';
import { run } from '@ember/runloop';

export default function startApp(attrs) {
  let attributes = merge({}, config.APP);
  attributes.autoboot = true;
  attributes = merge(attributes, attrs); // use defaults, but you can override;

  return run(() => {
    const application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();

    createUser();

    return application;
  });
}
