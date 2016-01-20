(function () {
    "use strict";

    angular.module("FoodList", ["azure-mobile-service.module", "ngMaterial", "ngRoute","ngAnimate" /*,"ngMessages"*/])
        .constant("AzureMobileServiceClient", {
            API_URL: 'https://bvcmobsvc.azure-mobile.net/',
            API_KEY: 'YqFgVoowmudZcmgihjmOinsxxJTpdx92'
        })
        .config(function($mdThemingProvider, $routeProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('amber');

            $routeProvider
                .when("/FoodList", {
                    templateUrl: "Components/FoodList/FoodList.html",
                    controller: "FoodListController",
                    controllerAs: "foodListCtrl"
                })
                .otherwise({
                    redirectTo: "/FoodList"
                });
        })
        .run(function() {

        });
    //angular.module("FoodList").constant('AzureMobileServiceClient', {
    //    API_URL: 'https://bvcmobsvc.azure-mobile.net/',
    //    API_KEY: 'YqFgVoowmudZcmgihjmOinsxxJTpdx92'
    //});

    //angular.module("FoodList")
    //    .config(function ($mdThemingProvider, $routeProvider, $locationProvider) {
    //        $mdThemingProvider.theme('default')
    //            .primaryPalette('blue')
    //            .accentPalette('amber');


    //        $locationProvider.html5Mode(false);
    //    });

    angular.module("FoodList")
        .controller("IndexController", IndexController);

    IndexController.$inject = [];

    function IndexController() {
        var vm = this;
    }
})()