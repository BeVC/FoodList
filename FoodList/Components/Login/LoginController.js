(function() {
    "use strict";

    angular.module("FoodList")
        .controller("LoginController", LoginController);

    LoginController.$inject = ["UserService"];

    function LoginController(UserService) {
        var vm = this;

        vm.authenticate = authenticate;

        function authenticate(provider) {
            var authPromise = null;

            authPromise = UserService.authenticate(provider);

            authPromise.then(function(authenticatedUser) {
                authenticatedUser;
            });
        }
    }
})()