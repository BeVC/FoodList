//authenticatedUser-Object
function AuthenticatedUser(provider, userInfoProvider) {
    this.provider = provider;
    this.userInfoProvider = userInfoProvider;

    this.initPartyFromUserInfoProvider = function () {
        var party = {} //needs to become object in model.js

        switch (provider) {
            case 'google':
                if (typeof userInfoProvider.given_name !== "undefined")
                    party.firstName = userInfoProvider.given_name;

                if (typeof userInfoProvider.family_name !== 'undefined')
                    party.lastName = userInfoProvider.family_name;

                if (typeof userInfoProvider.name !== 'undefined')
                    party.name = userInfoProvider.name;

                if (typeof userInfoProvider.email !== 'undefined')
                    party.email = userInfoProvider.email;

                if (typeof userInfoProvider.gender !== 'undefined')
                    party.gender = userInfoProvider.gender;

                if (typeof userInfoProvider.locale !== 'undefined') {

                    if (userInfoProvider.locale.length >= 2) {
                        party.language = userInfoProvider.locale.substring(0, 2);
                    }

                    if (userInfoProvider.locale.length >= 5) {
                        party.countryCode = userInfoProvider.locale.substring(3, 5);
                    }
                }
                break;
        }
        return party;
    }
}

//UserService
angular.module("FoodList")
    .service("UserService", UserService);

UserService.$inject = ["$q", "Azureservice"];

function UserService($q, Azureservice) {
    "use strict";

    this.createResolvedPromise = function (returnValue) {
        var deferred = $q.defer();
        deferred.resolve(returnValue);
        return deferred.promise;
    }

    this.authenticate = function (provider) {
        var self = this;
        var deferred = $q.defer();

        Azureservice.login(provider)
            .then(function () {
                var user = Azureservice.getCurrentUser();

                var items = user.userId.split(":");
                var userIdProvider = items[1];

                self.loginToApp(provider, userIdProvider)
                    .then(function (authenticatedUser) {
                        authenticatedUser.mobileServiceAuthenticationToken = user.mobileServiceAuthenticationToken;
                        self.setAuthenticatedUser(authenticatedUser);
                        deferred.resolve(authenticatedUser);
                    });
            }, function (err) {
                console.error("Azure error: " + err);
            });
        return deferred.promise;
    }

    this.loginToApp = function (provider, userIdProvider) {
        var self = this;
        var deferred = $q.defer();

        //when completely ready, have API get existing user (if any)
        var account = null;
        var userInfoPromise = null;

        if (account == null || account.partyId == null) {
            switch (provider) {
                case "google":
                    userInfoPromise = self.getUserInfo(provider);
                    break;
            }
        }

        if (userInfoPromise == null)
            userInfoPromise = self.createResolvedPromise(null);

        userInfoPromise.then(function (userInfo) {
            userInfo;

        })

        return deferred.promise;
    }

    this.getUserInfo = function (provider) {
        var deferred = $q.defer();

        /* Get extra user info from Azure Mobile Svc
        *    http://blogs.msdn.com/b/carlosfigueira/archive/2012/10/25/getting-user-information-on-azure-mobile-services.aspx
        *    http://blogs.msdn.com/b/carlosfigueira/archive/2013/12/16/enhanced-users-feature-in-azure-mobile-services.aspx
        *    http://blogs.msdn.com/b/carlosfigueira/archive/2013/12/12/expanded-login-scopes-in-azure-mobile-services.aspx             
        */
        var tableName = "userInfo" + provider;

        Azureservice.query(tableName).then(function(userInfo) {
            deferred.resolve(userInfo);
            console.log("Query successfull");
        }, function(err) {
            console.error("Azure Error: " + err);
        });

        return deferred.promise;
    }
}
