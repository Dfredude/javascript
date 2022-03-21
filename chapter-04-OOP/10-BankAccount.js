export default class BankAccount {
    cash = 0
    constructor(initial_cash) {
        this.cash = initial_cash
        this.deposit.bind(this)
    }
    get balance(){ return this.cash }
    deposit(amount){ 
        console.log(this);
        this.cash += amount 
    }
    withdraw(amount){
        this.cash -= amount
        return `$${this.cash} new balance. Total withdrawal(interest included): $${total}`
    }
}

class SavingsAccount extends BankAccount{
    constructor(initial_cash, interest){
        super(initial_cash)
        this.interest = interest
    }
    addInterest(amount){
        this.interest += amount
        return `New interest: ${this.interest}`
    }

    withdraw(amount){
        let total = amount + (amount*this.interest)
        this.cash -= total
        return `$${this.cash} new balance. Total withdrawal(interest included): $${total}`
    }
}

class CheckingAccount extends SavingsAccount{
    constructor(initial_cash, interest){
        super(initial_cash, interest)
    }
}

const testing = function(){
    let BA = new BankAccount(500)
    console.log(BA.balance)

    let SA = new SavingsAccount(800, .1)
    console.log(SA.balance);
    console.log(SA.withdraw(500));

    let CA = new CheckingAccount(800, .1)
    console.log(CA.balance);
    console.log(CA.withdraw(500));
}
