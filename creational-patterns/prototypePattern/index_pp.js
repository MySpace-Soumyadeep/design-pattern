const scout_prototype = require("./scout_prototype");

const alice = scout_prototype.clone();
alice.name = "Alice Banks";
const bob = scout_prototype.clone();
bob.name = "Bob Smith";
bob.addItemToList('lights');

console.log(`${alice.name} : ${alice.shoppingList}`);
console.log(`${bob.name} : ${bob.shoppingList}`);
