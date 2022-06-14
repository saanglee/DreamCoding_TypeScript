{
  class User {
    firstName: string;
    lastName: string;
    fullName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.firstName = `${firstName} ${lastName}`;
    }
  }

  const user = new User("Sangji", "Lee");
  console.log(user);
  console.log(user.firstName);
}
