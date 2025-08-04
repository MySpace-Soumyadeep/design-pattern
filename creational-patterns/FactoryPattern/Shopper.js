class Shopper{
    constructor(name, money=0){
        this.name = name;
        this.money = money;
        console.log(`New Shopper ${name} has ${money} in their account!!`);
    }

    toString() {
        return `Shopper: ${this.name}, Money: ${this.money}`;
    }

    addMoney(amount) {
        this.money += amount;
        console.log(`Added ${amount} to ${this.name}'s account. New balance: ${this.money}`);
    }
}

module.exports = Shopper;