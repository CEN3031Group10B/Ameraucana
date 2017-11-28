'use scrict';
(function() {
  describe('Unit: Testing controllers', function() {

    // Test out the users controllers and make up they still exists

    beforeEach(angular.mock.module('App'));

    it('should have a MenuItemsController controller', function() {
      expect(App.MenuItemsController).not.to.equal(null);
    });

  })
})
