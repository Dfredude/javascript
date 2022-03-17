const withGreeter = (constructor) => {
    let super_class = function(){
        this.greet = (greeting) => `${greeting}, ${this}!` 
    }
    Object.setPrototypeOf(super_class, constructor)
    return super_class
}

function Employee(name, id){
    this.name = name
    this.id = id
}

const GreetableEmployee = withGreeter(Employee)
const e = new GreetableEmployee("Fred", 665)
const normal_e = new Employee("Normal", 561)
console.log(e.greet("Hello"))
// console.log(normal_e.greet()) <<-Doesn't work with the original class