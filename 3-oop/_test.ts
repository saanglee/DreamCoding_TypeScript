{
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 20;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("Invalid age number");
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User("Sangji", "Lee");
  console.log(user);
  // user.firstName = "Wony";
  // console.log(user.fullName); // Wony Lee
  user.age = -28;
  console.log(user);
}
