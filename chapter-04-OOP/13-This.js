import BankAccount from "./10-BankAccount.js"
console.log(BankAccount);
let action = BankAccount.prototype.deposit
//action(1000) <-- This doesn't work because the field variables can't be accesed without constructing them
const BA =  new BankAccount(500)
const deposit = BA.deposit // Calling deposit() wouldn't work either, because "this" reference is undefined. Since deposit is a method alone
const boundDeposit = deposit.bind(BA) // We bind the method alone with its original "this" reference
boundDeposit(100)
