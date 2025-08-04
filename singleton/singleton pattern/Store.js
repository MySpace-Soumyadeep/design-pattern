var Logger = require("./Logger")

var logger = new Logger().getInstance();

class Store {
    constructor(name, inventory=[]){
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Store ${name} has ${inventory} items in stock!!`)
    }
}

module.exports = Store;