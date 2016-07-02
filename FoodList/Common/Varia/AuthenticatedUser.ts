 class AuthenticatedUser {
     account: Object;
     publicParty: Party;
     provider: string;
     userInfoProvider: Object;

     constructor(account: Object, party: Party,  provider: string, userInfoProvider: Object) {
         this.account = account;
         this.publicParty = party;
         this.provider = provider;
         this.userInfoProvider = userInfoProvider;
     }

     private initPartyFromUserInfoProvider() {
         var party = new Party();

         switch (this.provider) {
             case "google":
                 if (typeof this.userInfoProvider['given_name'] !== "undefined")
                     party.firstName = this.userInfoProvider['given_name'];
                 if (typeof this.userInfoProvider['family_name'] !== 'undefined')
                     party.lastName = this.userInfoProvider['family_name'];

                 if (typeof this.userInfoProvider['name'] !== 'undefined')
                     party.name = this.userInfoProvider['name'];

                 //if (typeof this.userInfoProvider['email'] !== 'undefined')
                 //    party.email = this.userInfoProvider['email'];

                 //if (typeof this.userInfoProvider['gender'] !== 'undefined')
                 //    party.gender = this.userInfoProvider['gender'];

                 //if (typeof this.userInfoProvider['locale'] !== 'undefined') {

                 //    if (this.userInfoProvider['locale'].length >= 2) {
                 //        party.language = this.userInfoProvider['locale'].substring(0, 2);
                 //    }

                 //    if (this.userInfoProvider['locale'].length >= 5) {
                 //        party.countryCode = this.userInfoProvider['locale'].substring(3, 5);
                 //    }
                 //}
                 break;
         }

         return party;
     }
 }