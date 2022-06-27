function Person(first_name, last_name){
    this.first_name = first_name
    this.last_name = last_name
}

let persons = [new Person("Fred", "Dom"),
 new Person("Alex", "Bals"),
 new Person("User", "Tacos"),
 new Person("Vale", "Dor"),
 new Person("Angel", "Dom")]

const sort = (persons) => {
    return persons.sort((px, py) => { 
        if (px.last_name === py.last_name){
            return px.first_name.localeCompare(py.first_name)
        }
        return px.last_name.localeCompare(py.last_name)
    })
}

console.log(sort(persons))
console.log("Dom" - "Bals");