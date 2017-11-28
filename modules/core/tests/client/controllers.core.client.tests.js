'use scrict';
(function() {
  describe('Unit: Testing controllers', function() {

    // Test out the users controllers and make up they still exists

    beforeEach(angular.mock.module('App'));

    it('should have a adminPanelController controller', function() {
      expect(App.adminPanelController).not.to.equal(null);
    });

    it('should have a cartController controller', function() {
      expect(App.cartController).not.to.equal(null);
    });

    it('should have a CheckoutController controller', function() {
      expect(App.CheckoutController).not.to.equal(null);
    });

    it('should have a HeaderController controller', function() {
      expect(App.HeaderController).not.to.equal(null);
    });

    it('should have a HomeController controller', function() {
      expect(App.HomeController).not.to.equal(null);
    });

    it('should have a OrderController controller', function() {
      expect(App.OrderController).not.to.equal(null);
    });

  })
})
