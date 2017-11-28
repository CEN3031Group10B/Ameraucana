'use scrict';
(function() {
  describe('Unit: Testing controllers', function() {

    // Test out the users controllers and make up they still exists

    beforeEach(angular.mock.module('App'));

    it('should have a UserListController controller', function() {
      expect(App.UserListController).not.to.equal(null);
    });

    it('should have a UserController controller', function() {
      expect(App.UserController).not.to.equal(null);
    });

    it('should have a ChangePasswordController controller', function() {
      expect(App.ChangePasswordController).not.to.equal(null);
    });

    it('should have a ChangeProfilePictureController controller', function() {
      expect(App.ChangeProfilePictureController).not.to.equal(null);
    });

    it('should have a EditProfileController controller', function() {
      expect(App.EditProfileController).not.to.equal(null);
    });

    it('should have a SocialAccountsController controller', function() {
      expect(App.SocialAccountsController).not.to.equal(null);
    });

    it('should have a SettingsController controller', function() {
      expect(App.SettingsController).not.to.equal(null);
    });

    it('should have a AuthenticationController controller', function() {
      expect(App.AuthenticationController).not.to.equal(null);
    });

    it('should have a PasswordController controller', function() {
      expect(App.PasswordController).not.to.equal(null);
    });

  })
})
