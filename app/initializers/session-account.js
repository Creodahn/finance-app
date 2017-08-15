export function initialize(application) {
  application.inject('controller', 'sessionAccount', 'service:session-account');
  application.inject('route', 'sessionAccount', 'service:session-account');
}

export default {
  name: 'session-account',
  initialize
};
