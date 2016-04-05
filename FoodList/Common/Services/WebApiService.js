(function() {
    "use strict";

    angular.module("FoodList")
        .service("WebApiService", WebApiService);

    WebApiService.$inject = ["$q"];

    function WebApiService($q) {
        this.getTestString=function() {
            var deferred = $q.defer();

            $http.get("http://localhost:61710/")

            return deferred.promise;
        }
    }
})()