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
                //authenticatedUser;
                //forward to someplace here
                if (authenticatedUser.account.partyId != null && authenticatedUser.account.party != null /*SessionService.userIsLoggedIn() &&  !authenticatedUser.account.isDeleted*/) {
                    //set public party to authenticatedUser.publicParty
                    authenticatedUser.publicParty = authenticatedUser.account.party;
                    $state.go("Home");
                } else {
                    $state.go("Party");
                }
            });
        }
    }
})()