"use strict";
{
    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.firstName = `${firstName} ${lastName}`;
        }
    }
    const user = new User("Sangji", "Lee");
    console.log(user);
    console.log(user.firstName);
}
