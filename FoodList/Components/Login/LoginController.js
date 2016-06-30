(function() {
    "use strict";

    angular.module("FoodList")
        .controller("LoginController", LoginController);

    LoginController.$inject = ["$state", "UserService"];

    function LoginController($state, UserService) {
        var vm = this;

        vm.authenticate = authenticate;

        function authenticate(provider) {
            var authPromise = null;

            authPromise = UserService.authenticate(provider);

            authPromise.then(function(authenticatedUser) {
                authenticatedUser;
                //forward to someplace here
                if (authenticatedUser.account.partyId != null /*SessionService.userIsLoggedIn() &&  !authenticatedUser.account.isDeleted*/) {
                    //something
                } else {
                    $state.go("Party");
                }
            });
        }
    }
})()