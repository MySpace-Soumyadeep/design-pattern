const Employee = require("./Employee");
const Shopper = require("./Shopper");

const userFactory = (name, money=0, type, employer) => {
    switch (type) {
        case 'employee':
            return new Employee(name, money, employer);
        case 'shopper':
            return new Shopper(name, money);
        // Add more cases for other user types as needed
        default:
            throw new Error("Unknown user type");
    }
}

module.exports = userFactory;