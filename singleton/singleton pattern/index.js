const Shopper = require('./Shopper');
const Store = require('./Store');
const Logger = require('./Logger');

const logger = new Logger().getInstance();

logger.log('Application started');

// Create some shoppers
const alice = new Shopper('Alice', 100);
const bob = new Shopper('Bob', 150);

// Create some stores
const books = new Store('Book Store', ['books', 'magazines']);
const toys = new Store('Toy Store', ['toys', 'games']);

logger.log('finished creating shoppers and stores');

// Create another logger instance and show log count
console.log(`Logger has ${logger.count} logs.`);
console.log(`-------------------------`);
logger.logs.forEach(log => {
    console.log(`${log.timestamp} - ${log.message}`);
})
