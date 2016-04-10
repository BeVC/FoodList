(function () {
    "use strict";

    angular.module("FoodList", ["azure-mobile-service.module", "ngMaterial", "ngRoute", "ngAnimate" /*,"ngMessages"*/, "ui.router"])
        .constant("AzureMobileServiceClient", {
            API_URL: 'https://bvcmobsvc.azure-mobile.net/',
            API_KEY: 'YqFgVoowmudZcmgihjmOinsxxJTpdx92'
        })
        .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider /*$routeProvider*/) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('amber');

            $urlRouterProvider.otherwise("/Home");

            $stateProvider
                .state("FoodList", {
                    url: "/FoodList",
                    templateUrl: "Components/FoodList/FoodList.html",
                    controller: "FoodListController",
                    controllerAs: "foodListCtrl"
                })
                .state("Home", {
                    url: "/Home",
                    templateUrl: "Components/Home/Home.html",
                    controller: "HomeController",
                    controllerAs: "homeCtrl"
                });


            /*$routeProvider
                .when("/FoodList", {
                    templateUrl: "Components/FoodList/FoodList.html",
                    controller: "FoodListController",
                    controllerAs: "foodListCtrl"
                })
                .otherwise({
                    redirectTo: "/FoodList"
                });*/
        })
        .run(function () {

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

    IndexController.$inject = ["$mdSidenav"];

    function IndexController($mdSidenav) {
        var vm = this;

        vm.toggleSideNavLeft = toggleSideNavLeft;
        vm.closeSideNavLeft = closeSideNavLeft;
        //init

        //functions
        function toggleSideNavLeft() {
            $mdSidenav('left').toggle();
        }

        function closeSideNavLeft() {
            $mdSidenav('left').close();
        }
        //vm.btnTest_Clicked = btnTest_Clicked;

        //function btnTest_Clicked() {
        //    WebApiService.getTestString()
        //    .then(function (result) {
        //        result;
        //    })
        //}
    }
})()