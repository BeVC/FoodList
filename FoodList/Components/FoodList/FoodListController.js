(function () {
    "use strict";

    angular.module("FoodList")
        .controller("FoodListController", FoodListController);

    FoodListController.$inject = [];

    function FoodListController() {
        var vm = this;

        vm.todos = [
            {
                what: "one",
                who: "me",
                when: "now"
            },
            {
                what: "two",
                who: "you",
                when: "soon"
            },
            {
                what: "three",
                who: "us",
                when: "later"
            }
        ]
    }
})()