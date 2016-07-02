(function() {
    "use strict";

    angular.module("FoodList")
        .service("SessionService", SessionService);

    SessionService.$inject = [];

    function SessionService() {
        //AUTHENTICATED USER
        this.authenticatedUser = null;
        this.setAuthenticatedUser=function(authenticatedUser) {
            this.authenticatedUser = authenticatedUser;
        }
        this.getAuthenticatedUser = function() {
            return this.authenticatedUser;
        }
        this.setAuthUserAccount = function(account) {
            this.authenticatedUser.account = account;
        }
        this.getAuthUserAccount = function() {
            return this.authenticatedUser.account;
        }
        this.setAuthUserPublicParty = function(party) {
            this.authenticatedUser.publicParty = party;
        }
        this.getAuthUserPublicParty = function() {
            return this.authenticatedUser.publicParty;
        }

    }
})()