 class FoodStorage {
     id: string;
     name: string;
     location: string;
     amount: number;
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
         to.location = from.location;
         to.dateStorage = from.dateStorage;
         to.present = from.present;
         to.createdAt = from.createdAt;
         to.updatedAt = from.updatedAt;
         to.deletedAt = from.deletedAt;
         to.isDeleted = from.isDeleted;
     }
 }