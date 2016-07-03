(function() {
    "use strict";

    angular.module("FoodList")
        .controller("LoginController", LoginController);

    LoginController.$inject = ["$state","SessionService", "UserService"];

    function LoginController($state,SessionService, UserService) {
        var vm = this;

        vm.authenticate = authenticate;
        vm.userIsLoggedIn = userIsLoggedIn;
        vm.btnLogoutUser_Clicked = btnLogoutUser_Clicked;

        //functions
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

        function userIsLoggedIn() {
            return SessionService.userIsLoggedIn();
        }

        function btnLogoutUser_Clicked() {
            UserService.logOut();
            SessionService.setAuthUserPublicParty(null);
            $state.go("Home");
        }
    }
})()