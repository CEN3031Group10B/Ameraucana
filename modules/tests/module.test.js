describe("Midway: Testing Modules", function() {
  describe("App Module:", function() {

    var module;
    before(function() {
      module = angular.module("App");
    });

    it("should be registered", function() {
      expect(module).not.to.equal(null);
    });

    describe("Dependencis:", function() {
      var deps;
      var hasModule = function(m) {
        return deps.indexOf(m) >= 0;
      };

      before(function() {
        deps = module.value('appName').requires;
      });

      it("should ")
    })
  })
})
