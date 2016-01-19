﻿var FoodStorage = (function () {
    function FoodStorage() {
        this.name = "";
        this.location = "";
        this.amount = 0;
        this.dateStorage = new Date();
        this.present = true;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.deletedAt = new Date();
        this.isDeleted = false;
    }
    FoodStorage.createCopy = function (obj, copyId) {
        var copy = new FoodStorage();
        FoodStorage.copyProperties(obj, copy, copyId);
        return copy;
    };

    FoodStorage.copyProperties = function (from, to, copyId) {
        if (copyId && from.id)
            to.id = from.id;

        to.name = from.name;
        to.location = from.location;
        to.amount = from.amount;
        to.location = from.location;
        to.dateStorage = from.dateStorage;
        to.present = from.present;
        to.createdAt = from.createdAt;
        to.updatedAt = from.updatedAt;
        to.deletedAt = from.deletedAt;
        to.isDeleted = from.isDeleted;
    };
    return FoodStorage;
})();
//# sourceMappingURL=Model.js.map
