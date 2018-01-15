import FilestackUpload from 'finance-app/components/filestack-upload/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default FilestackUpload.extend({
  // attributes
  sessionAccount: service(),
  store: service(),
  // computed properties
  alt: computed('model.profilePicture.{description,fileName}', function() {
    const hasProfilePicture = this.get('model.profilePicture') !== null;
    let alt = 'an image';

    if(hasProfilePicture) {
      const pic = this.get('model.profilePicture'),
            hasDescription = (pic.get('description') || '') !== '';

      alt = hasDescription ? pic.get('description') : pic.get('fileName');
    }

    return alt;
  }),
  // actions
  actions: {
    showPicker() {
      this.get('client').pick(this.get('options')).then(((result) => {
        this.get('sessionAccount.profile').then((profile) => {
          const file = result.filesUploaded[0];

          this.get('store').createRecord('image', {
            description: `Profile Picture for ${profile.get('fullName')}`,
            fileName: file.filename,
            url: file.url,
            uploader: profile,
            imageable: profile
          }).save().then((image) => {
            profile.set('profilePicture', image);

            profile.save();
          });
        });
      }));
    }
  }
});
