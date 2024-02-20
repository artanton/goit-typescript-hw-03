class Key{
    private signature: number
    constructor() {
        this.signature = Math.random();
    }
    getSignature ():number{
        return this.signature;

  }
};

class Person {
    private key:Key
    constructor(key:Key){
        this.key=key;
    }

    getKey():Key{
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key:Key;
    public tenants:Person[];

    constructor(key:Key){
        this.key=key;
        this.tenants=[];
        this.door=false;
    }

    comeIn(person:Person){
        if(this.door){
            this.tenants.push(person)
            console.log("You entered the house.");
        }
        console.log("You can't enter");
    }
    abstract OpenDoor(key:Key):void;

}

class MyHouse extends House{
    constructor(key:Key){
       super(key);
    }

  OpenDoor(myHouseKey: Key): void {
    if(myHouseKey.getSignature()===this.key.getSignature()){
        this.door=true;
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
console.log("object");