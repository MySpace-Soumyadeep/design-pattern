class Employee{
    constructor(name, money=0, employer) {
        this.name = name;
        this.money = money;
        this.employer = employer;
        this.payments = [];
        console.log(`New Employee ${name} works for ${employer} and has ${money} in their account!!`);
    }

    addPayment(amount) {
        this.money += amount;
        this.payments.push(amount);
        console.log(`Payment of ${amount} added. New balance: ${this.money}`);
    }

    toString() {
        return `Employee: ${this.name}, Money: ${this.money}, Employer: ${this.employer}`;
    }
}

module.exports = Employee;