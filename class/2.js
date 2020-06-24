class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get nameAndAge() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old`;
    }
}

class Employee extends Person {
    constructor(name, age, prof){
        super(name, age);
        this.prof = prof;
    }
}

let person = new Person("Ricardo", "24");
let employee = new Employee("Ricardo", "24", "Eng");
console.log(employee.nameAndAge);