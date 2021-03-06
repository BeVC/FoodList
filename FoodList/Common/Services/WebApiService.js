﻿(function () {
    "use strict";

    angular.module("FoodList")
        .service("WebApiService", WebApiService);

    WebApiService.$inject = ["$http", "$q"];

    function WebApiService($http, $q) {
        var thisService = this;

        //START GENERAL
        //insert or overwrite
        this.httpPut = function (relativeUrl, obj) {
            var deferred = $q.defer();

            var jsonObject = JSON.stringify(obj);

            $http.put("http://localhost:5051/" + relativeUrl, jsonObject)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        }

        //modify or update
        this.httpPost = function (relativeUrl, obj) {
            var deferred = $q.defer();

            var jsonObject = JSON.stringify(obj);

            $http.post("http://localhost:5051/" + relativeUrl, jsonObject)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        }

        //delete
        this.httpDelete = function (relativeUrl, id) {
            var deferred = $q.defer();

            $http.post("http://localhost:5051/" + relativeUrl + "?id=" + id)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        }

        //get
        this.httpGet = function (relativeUrl) {
            var deferred = $q.defer();

            $http.get("http://localhost:5051/" + relativeUrl)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        }

        //get by ID
        this.httpGetById = function (relativeUrl, id) {
            var deferred = $q.defer();

            $http.get("http://localhost:5051/" + relativeUrl + "?id=" + id)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        }

        //get by OBJECT
        this.httpGetPassObject = function (relativeUrl, request) {
            var deferred = $q.defer();

            $http({
                url: "http://localhost:5051/" + relativeUrl,
                method: "GET",
                params: request
            })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        }

        //END GENERAL
        
        this.getTestString = function () {
            //var deferred = $q.defer();

            //$http.get("http://localhost:5051/" + "api/Test")
            //    .success(function (data, status, headers, config) {
            //        deferred.resolve(data);
            //    })
            //    .error(function (data, status, headers, config) {
            //        deferred.reject(data);
            //    });

            //return deferred.promise;

            return this.httpGet("api/Test");
        }

        //START FOODLIST

        this.getFoodStorage = function() {
            return this.httpGet("api/FoodStorage");
        }

        //END FOODLIST

        //START ACCOUNT

        this.getAccount = function (provider, userIdProvider) {
            var request = {
                provider: provider,
                token: userIdProvider
            }

            return this.httpGetPassObject("api/Account", request);
        }

        this.createAccount = function(newAccount) {
            return this.httpPut("api/Account", newAccount);
        }

        this.updateAccount = function(account) {
            return this.httpPost("api/Account", account);
        }
        //END ACCOUNT

        //START PARTY

        this.createParty = function(newParty) {
            return this.httpPut("api/Party", newParty);
        }

        //END PARTY

        //START PANTRYLOCATION

        this.createPantryLocation = function(newPantryLocation) {
            return this.httpPut("api/PantryLocation", newPantryLocation);
        }

        this.updatePantryLocation = function(pantryLocation) {
            return this.httpPost("api/PantryLocation", pantryLocation);
        }

        this.getPantryLocationsByPantryId = function(pantryId) {
            return this.httpGetById("api/PantryLocation", pantryId);
        }

        //END PANTRYLOCATION
    }
})()