import { isEmpty } from '@ember/utils';
import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  session: service(),
  store: service(),
  // computed properties
  profile: computed('session.data.login', function() {
    const email = this.get('session.data.login');

    if(!isEmpty(email)) {
      return this.get('store').query('profile', {
        filter: {
          email
        },
        include: 'addresses,phone-numbers'
      }).then(function(records) {
        const result = records.toArray()[0];

        return result;
      });
    } else {
      return null;
    }
  }),
  user: computed('session.data.login', function() {
    const username = this.get('session.data.login');

    if(!isEmpty(username)) {
      return this.get('store').query('user', {
        filter: {
          username
        }
      }).then(function(records) {
        return records.toArray()[0];
      });
    } else {
      return null;
    }
  })
});
