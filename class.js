'use strict';

// Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak() {
     console.log(`${this.name}: hi!`);   
    }
}

const Ellie = new Person('woong', 20);
console.log(Ellie.name);
console.log(Ellie.age);
Ellie.speak();


// Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }

    set age(value) {
        /*if(value < 0) {
            throw Error('age can not be negative');
        }*/
        this._age = value < 0 ? 0 : value;
    }
}

const User1 = new User('Steve', 'Job', -1);
console.log(User1.age);