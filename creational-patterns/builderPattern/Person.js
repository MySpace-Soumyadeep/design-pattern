class Person{
    // constructor(name, isEmployee, isManager, age = 0, budget = 0, shoppingList = []) {
    //     this.name = name;
    //     this.isEmployee = isEmployee;
    //     this.isManager = isManager;
    //     this.age = age;
    //     this.budget = budget;
    //     this.shoppingList = shoppingList;
    // }

    constructor(builder) {
        this.name = builder.name;
        this.isEmployee = builder.isEmployee;
        this.isManager = builder.isManager;
        this.hours = builder.hours || 0;
        this.money = builder.money || 0;
        this.shoppingList = builder.shoppingList || [];
    }

    toString() {
        return `Person: ${this.name}, Employee: ${this.isEmployee}, Manager: ${this.isManager}, Hours: ${this.hours}, Money: ${this.money}, Shopping List: ${this.shoppingList.join(', ')}`;
    }


}

module.exports = Person;