export function initialize(application) {
  application.inject('component', 'formatMessage', 'service:format-message');
  application.inject('controller', 'formatMessage', 'service:format-message');
  application.inject('route', 'formatMessage', 'service:format-message');
}

export default {
  name: 'format-message',
  initialize
};
