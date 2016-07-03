class FoodStorage {
    id: string;
    name: string;
    location: string;
    amount: number;
    persons: number;
    dateStorage: Date;
    present: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isDeleted: boolean;

    constructor() {
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

    static createCopy(obj: FoodStorage, copyId: boolean): FoodStorage {
        var copy = new FoodStorage();
        FoodStorage.copyProperties(obj, copy, copyId);
        return copy;
    }

    static copyProperties(from: FoodStorage, to: FoodStorage, copyId: boolean) {
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
    }
}

class PantryLocation {
    id: string;
    name: string;
    pantryId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isDeleted: boolean;
    
    constructor() {
        this.name = null;
        this.pantryId = null;
        this.createdAt = new Date();
        this.updatedAt = null;
        this.deletedAt = null;
        this.isDeleted = false;
    }    

    static createCopy(obj: PantryLocation, copyId: boolean): PantryLocation {
        var copy = new PantryLocation();
        PantryLocation.copyProperties(obj, copy, copyId);
        return copy;
    }

    static copyProperties(from: PantryLocation, to: PantryLocation, copyId: boolean) {
        if (copyId && from.id)
            to.id = from.id;

        to.name = from.name;
        to.pantryId = from.pantryId;
        to.createdAt = from.createdAt;
        to.updatedAt = from.updatedAt;
        to.deletedAt = from.deletedAt;
        to.isDeleted = from.isDeleted;
    }
}

class Party {
    id: string;
    firstName: string;
    lastName: string;
    name: string;
    pantryId: string;

    constructor() {
        this.firstName = null;
        this.lastName = null;
        this.name = null;
        this.pantryId = null;
    }

    static createCopy(obj: Party, copyId: boolean): Party {
        var copy = new Party();
        Party.copyProperties(obj, copy, copyId);
        return copy;
    }

    static copyProperties(from: Party, to: Party, copyId: boolean) {
        if (copyId && from.id)
            to.id = from.id;

        to.firstName = from.firstName;
        to.lastName = from.lastName;
        to.name = from.name;
        to.pantryId = from.pantryId;
    }
}