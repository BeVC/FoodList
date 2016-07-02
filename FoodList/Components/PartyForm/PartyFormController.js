(function() {
    "use strict";

    angular.module("FoodList")
        .controller("PartyFormController", PartyFormController);

    PartyFormController.$inject = ["Azureservice", "CommonFunctionsService", "SessionService","WebApiService"];

    function PartyFormController(Azureservice, CommonFunctionsService, SessionService, WebApiService) {
        var vm = this;
        vm.party = null;

        vm.btnSaveUpdateParty_Clicked = btnSaveUpdateParty_Clicked;
        vm.setFullName = setFullName;

        //functions
        function btnSaveUpdateParty_Clicked() {
            if (vm.partyForm.$valid) {
                if (vm.partyForm.$dirty) {
                    //vm.party.id = CommonFunctionsService.createGuid();

                    var partyForBackend = Party.createCopy(vm.party,true);

                    if (typeof partyForBackend.id === "undefined" || partyForBackend.id == null) {
                        WebApiService.createParty(partyForBackend)
                            .then(function(result) {
                                if (result.status === 1) {
                                    var account = SessionService.getAuthUserAccount();
                                    account.partyId = result.party.id;
                                    WebApiService.updateAccount(account)
                                        .then(function(result) {
                                            if (result.status === 1) {
                                                SessionService.setAuthUserAccount(result.account);
                                            }
                                        });
                                }
                        });
                    } else {
                        
                    }

                }
            }
        }

        function setFullName() {
            vm.party.name = vm.party.firstName + " " + vm.party.lastName;
        }
    }
})()