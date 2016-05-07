(function() {
    "use strict";

    angular.module("FoodList")
        .controller("HomeController", HomeController);

    HomeController.$inject = ["$q","$state","WebApiService"];

    function HomeController($q, $state, WebApiService) {
        var vm = this;
        vm.testVar = null;

        vm.init = init;
        vm.btnSignIn_Clicked = btnSignIn_Clicked;
        //init
        vm.init().then(function(initResults) {
            vm.testVar = initResults.testString;
        });

        //functions
        function init() {
            var deferred = $q.defer();

            var promise1 = WebApiService.getTestString();

            $q.all([promise1])
                .then(function(result) {
                    var initRresults = {
                        testString: result[0]
                    }
                    deferred.resolve(initRresults);
                });

            return deferred.promise;
        }

        function btnSignIn_Clicked() {
            $state.go("Login");
        }
    }
})()