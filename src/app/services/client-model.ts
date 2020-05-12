export class Client {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public birthday: string;
    public gender: string;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        birthday: string,
        gender: string) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.birthday = birthday;
            this.gender = gender;
        }
  }
