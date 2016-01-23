(function () {
    "use strict";

    angular.module("FoodList")
        .controller("FoodListController", FoodListController);

    FoodListController.$inject = ["$mdDialog"];

    function FoodListController($mdDialog) {
        var vm = this;
        vm.foodStorageCol = [];

        vm.btnOpenFoodListItemForm = btnOpenFoodListItemForm;
        vm.init = init();

        //init
        //vm.todos = [
        //    {
        //        what: "one",
        //        who: "me",
        //        when: "now"
        //    },
        //    {
        //        what: "two",
        //        who: "you",
        //        when: "soon"
        //    },
        //    {
        //        what: "three",
        //        who: "us",
        //        when: "later"
        //    }
        //];

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
                    vm.foodStorageCol.push(foodStorage);
                }, function () {
                    vm.status = "You cancelled the dialog";
                });
        }

        function init() { }
    }

})()