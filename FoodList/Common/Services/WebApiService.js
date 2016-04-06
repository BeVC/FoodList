(function() {
    "use strict";

    angular.module("FoodList")
        .service("WebApiService", WebApiService);

    WebApiService.$inject = ["$http", "$q"];

    function WebApiService($http, $q) {
        this.getTestString=function() {
            var deferred = $q.defer();

            $http.get("http://localhost:61710/" + "api/Test")
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        }
    }
})()