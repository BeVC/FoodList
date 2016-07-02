var AuthenticatedUser = (function () {
    function AuthenticatedUser(account, party, provider, userInfoProvider) {
        this.account = account;
        this.publicParty = party;
        this.provider = provider;
        this.userInfoProvider = userInfoProvider;
    }
    AuthenticatedUser.prototype.initPartyFromUserInfoProvider = function () {
        var party = new Party();

        switch (this.provider) {
            case "google":
                if (typeof this.userInfoProvider['given_name'] !== "undefined")
                    party.firstName = this.userInfoProvider['given_name'];
                if (typeof this.userInfoProvider['family_name'] !== 'undefined')
                    party.lastName = this.userInfoProvider['family_name'];

                if (typeof this.userInfoProvider['name'] !== 'undefined')
                    party.name = this.userInfoProvider['name'];

                break;
        }

        return party;
    };
    return AuthenticatedUser;
})();
//# sourceMappingURL=AuthenticatedUser.js.map
