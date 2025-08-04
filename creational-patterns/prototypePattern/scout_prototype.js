const Shopper = require("./Shopper");

const scout = new Shopper();
scout.addItemToList('camping knife');
scout.addItemToList('tent');
scout.addItemToList('bagpack');
scout.addItemToList('map');

module.exports = scout;