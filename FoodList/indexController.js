(function () {
    // "use strict";

    angular.module("FoodList", ["azure-mobile-service.module", "ngMaterial", "ngRoute", "ngAnimate", "ui.router"])
        .constant("AzureMobileServiceClient", {
            API_URL: 'https://bvcmobsvc.azure-mobile.net/',
            API_KEY: 'YqFgVoowmudZcmgihjmOinsxxJTpdx92'
        })
        .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {
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
                })
                .state("Login", {
                    url: "/Login",
                    templateUrl: "Components/Login/Login.html",
                    controller: "LoginController",
                    controllerAs: "loginCtrl"
                });
        })
        .run(function () {

        });

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
    }
})()