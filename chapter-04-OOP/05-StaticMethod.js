function createGreetable(str){
    let result = new String(str)
    return result
}

String.prototype.greet = function(greeting) { 
    return `${greeting}, ${this}!` 
}

const g = createGreetable("World")
console.log(g)
console.log(g.greet("Hello"))