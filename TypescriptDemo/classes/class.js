"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameAndAddress() {
        return this.name + " " + this.address;
    }
}
let nick = new Employee(1, "nick", "uk");
console.log(nick);
console.log(nick.getNameAndAddress());
