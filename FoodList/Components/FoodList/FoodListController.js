(function () {
    "use strict";

    angular.module("FoodList")
        .controller("FoodListController", FoodListController);

    FoodListController.$inject = ["$mdDialog", "$q", "Azureservice"];

    function FoodListController($mdDialog, $q, Azureservice) {
        var vm = this;
        vm.foodStorageCol = [];

        vm.btnOpenFoodListItemForm = btnOpenFoodListItemForm;
        vm.init = init;
        vm.removeFoodStorageItem = removeFoodStorageItem;
        vm.editFoodStorageItem = editFoodStorageItem;

        //init
        vm.init().then(function(initResults) {
            vm.foodStorageCol = initResults.foodStorageCol;
        });

        //functions
        function btnOpenFoodListItemForm(ev) {
            $mdDialog.show({
                controller: "NewFoodListController",
                controllerAs: "newFoodListCtrl",
                templateUrl: "/Components/FoodList/NewFoodListItemTemplate.html",
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: true
            })
                .then(function (answer) {
                    var foodStorage = answer;

                    var foodStorageForBackend = FoodStorage.createCopy(foodStorage, true);

                    Azureservice.insert('foodStorage', foodStorageForBackend)
                        .then(function (result) {
                            vm.foodStorageCol.unshift(result);
                        }, function (err) {
                            console.error("Azure error " + err);
                        });
                }, function () {
                    vm.status = "You cancelled the dialog";
                });
        }

        function init() {
            var deferred = $q.defer();

            var promise1 = Azureservice.query("foodStorage", {
                criteria: {
                    present: true,
                    isDeleted: false
                }
            });

            $q.all([promise1])
                .then(function (data) {
                    var initResults = {
                        foodStorageCol: data[0]
                    }
                    deferred.resolve(initResults);
                }, function (err) {
                    console.error("Azure error " + err);
                });

            return deferred.promise;
        }

        function removeFoodStorageItem(foodStorage, index, ev) {
            if (typeof foodStorage.id !== "undefined" || foodStorage.id != null) {
                if (foodStorage.amount > 1) {
                    var newAmount = foodStorage.amount - 1;
                    Azureservice.update("foodStorage", {
                        id: foodStorage.id,
                        amount: newAmount
                    }).then(function (result) {
                        vm.foodStorageCol[index].amount = result.amount;
                    }, function (err) {
                        console.error("Azure error " + err);
                    });
                } else {
                    Azureservice.update("foodStorage", {
                        id: foodStorage.id,
                        present: false
                    }).then(function () {
                        vm.foodStorageCol.splice(index, 1);
                    }, function (err) {
                        console.error("Azure error " + err);
                    });
                }
            } else
                vm.foodStorageCol.splice(index, 1);
        }

        function editFoodStorageItem(foodStorage, index, ev) {
            alert("edit");
        }
    }

})()