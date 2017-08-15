import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  afterModel(model, transition) {
    if(transition.targetName === 'main.home.profile.index') {
      this.transitionTo('main.home.profile.edit');
    }
  }
});
