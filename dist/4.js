class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
;
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.tenants = [];
        this.door = false;
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
            console.log("You entered the house.");
        }
        console.log("You can't enter");
    }
}
class MyHouse extends House {
    constructor(key) {
        super(key);
    }
    OpenDoor(myHouseKey) {
        if (myHouseKey.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is now open.');
        }
        console.log('The door is closed.');
    }
}
const myHouseKey = new Key();
const myHouse = new MyHouse(myHouseKey);
const validKey = new Key();
const person = new Person(validKey);
myHouse.OpenDoor(person.getKey());
myHouse.comeIn(person);
export {};
//# sourceMappingURL=4.js.map