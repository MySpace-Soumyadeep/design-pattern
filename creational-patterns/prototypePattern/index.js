const Shopper = require("./Shopper");

const alice = new Shopper("Alice");
alice.addItemToList('camping knife');
alice.addItemToList('tent');
alice.addItemToList('bagpack');
alice.addItemToList('map');


const bob = new Shopper("Bob");
bob.addItemToList('camping knife');
bob.addItemToList('tent');
bob.addItemToList('bagpack');
bob.addItemToList('map');
bob.addItemToList('lights');

console.log(`${alice.name} : ${alice.shoppingList}`);
console.log(`${bob.name} : ${bob.shoppingList}`);