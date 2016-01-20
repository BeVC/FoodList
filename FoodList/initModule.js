(function () {
    //"use strict";

    angular.module("FoodList", [/*"azure-mobile-service.module", "ngMaterial", "ngRoute"*/]);

    angular.module("FoodList").constant('AzureMobileServiceClient', {
        API_URL: 'https://bvcmobsvc.azure-mobile.net/',
        API_KEY: 'YqFgVoowmudZcmgihjmOinsxxJTpdx92'
    });

    angular.module("FoodList")
        .config(function ($mdThemingProvider, $routeProvider, $locationProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('amber');


            $locationProvider.html5Mode(false);
        });
})()