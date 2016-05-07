(function() {
    "use strict";

    angular.module("FoodList")
        .controller("LoginController", LoginController);

    LoginController.$inject = [];

    function LoginController() {
        var vm = this;

        vm.authenticate = authenticate;

        //functions

    }
})()