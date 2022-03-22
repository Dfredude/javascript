import { boundDeposit } from "./13-This.js";
import BankAccount from "./10-BankAccount.js";

// function invokeLater(f, delay){
//     setTimeout(() => { console.log(f(delay)), delay })
// }

// invokeLater(boundDeposit, 10000)

function depositInto(account){
    account.deposit(1000)
}

function invokeLater(f, delay){
    setTimeout(() => {
        () => f
    }, 1000)
}

const SallyAccount = new BankAccount(0)

invokeLater(depositInto(SallyAccount), 1000)

console.log(SallyAccount.balance);

