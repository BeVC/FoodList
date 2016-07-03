(function() {
    "use strict";

    angular.module("FoodList")
        .controller("HomeController", HomeController);

    HomeController.$inject = ["$q","$state","WebApiService"];

    function HomeController($q, $state, WebApiService) {
        var vm = this;
        //vm.testVar = null;

        //vm.init = init;
        //vm.btnSignIn_Clicked = btnSignIn_Clicked;
        ////init
        //vm.init().then(function(initResults) {
        //    vm.testVar = initResults.testString;
        //    vm.foodStorage = initResults.foodStorage.foodStorage;
        //    vm.count = vm.foodStorage.length;
        //});

        ////functions
        //function init() {
        //    var deferred = $q.defer();

        //    var promise1 = WebApiService.getTestString();
        //    var promise2 = WebApiService.getFoodStorage();

        //    $q.all([promise1, promise2])
        //        .then(function(result) {
        //            var initResults = {
        //                testString: result[0],
        //                foodStorage: result[1]
        //            }
        //            deferred.resolve(initResults);
        //        });

        //    return deferred.promise;
        //}

        //function btnSignIn_Clicked() {
        //    $state.go("Login");
        //}
    }
})()