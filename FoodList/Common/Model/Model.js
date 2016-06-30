var FoodStorage = (function () {
    function FoodStorage() {
        this.name = "";
        this.location = "";
        this.amount = 0;
        this.persons = 1;
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
        to.persons = from.persons;

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

var Party = (function () {
    function Party() {
        this.firstName = null;
        this.lastName = null;
        this.name = null;
        this.pantryId = null;
    }
    Party.createCopy = function (obj, copyId) {
        var copy = new Party();
        Party.copyProperties(obj, copy, copyId);
        return copy;
    };

    Party.copyProperties = function (from, to, copyId) {
        if (copyId && from.id)
            to.id = from.id;

        to.firstName = from.firstName;
        to.lastName = from.lastName;
        to.name = from.name;
        to.pantryId = from.pantryId;
    };
    return Party;
})();
//# sourceMappingURL=Model.js.map
