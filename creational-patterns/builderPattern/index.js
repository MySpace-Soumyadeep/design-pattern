const Person = require('./Person');
const PersonBuilder = require('./PersonBuilder');

//employees
const sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();
const bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();
const phil = new PersonBuilder('Phil').makeEmployee().build();

// const sue = new Person('Sue', true, true, 60);
// const bill = new Person('Bill', true, false, 20);
// const phil = new Person('Phil', true, false);

//shoppers
const charles = new PersonBuilder('Charles').withMoney(500).withList(['jeans', 'sunglasses']).build();
const john = new PersonBuilder('John').withMoney(1000).withList(['suit', 'tie']).build();

// const charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);
// const john = new Person('John', false, true, 0, 1000, ['suit', 'tie']);

console.log(sue.toString());
console.log(bill.toString());
console.log(phil.toString());   

console.log(charles.toString());
console.log(john.toString());