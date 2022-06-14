"use strict";
{
    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.internalAge = 20;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        get age() {
            return this.internalAge;
        }
        set age(num) {
            if (num < 0) {
                throw new Error("Invalid age number");
            }
            this.internalAge = num;
        }
    }
    const user = new User("Sangji", "Lee");
    console.log(user);
    // user.firstName = "Wony";
    // console.log(user.fullName); // Wony Lee
    user.age = -28;
    console.log(user);
}
