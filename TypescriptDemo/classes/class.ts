class Employee {
  id: number;
  name: string;
  address: string;

  // # is used to make variable private

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  getNameAndAddress() {
    return `${this.name}  ${this.address}`;
  }
}

let nick = new Employee(1, "nick", "uk");

console.log(nick);
console.log(nick.getNameAndAddress());

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
}
