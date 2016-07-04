(function() {
    "use strict";

    angular.module("FoodList")
        .controller("PantryLocationController", PantryLocationController);

    PantryLocationController.$inject = ["SessionService", "WebApiService"];

    function PantryLocationController(SessionService, WebApiService) {
        var vm = this;


    }
})()