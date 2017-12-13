import DS from 'ember-data';
import Auditable from 'finance-app/mixins/auditable';

export default DS.Model.extend(Auditable, {
  // attributes
  createdAt: DS.attr('date', { readOnly: true }),
  updatedAt: DS.attr('date', { readOnly: true }),
});
