const userFactory = require('./userFactory');

const alice = userFactory("Alice", 100, "shopper");
const bob = userFactory("Bob", 150, "employee", "marley");

bob.addPayment(50);

console.log(alice.toString());
console.log(bob.toString());
