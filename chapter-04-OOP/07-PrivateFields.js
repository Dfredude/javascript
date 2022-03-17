class Employee{
    #name = undefined
    #id = undefined
    constructor(name, id){
        this.#name = name
        this.#id = id
    }

    get name(){
        return this.#name
    }

    get ID(){
        return this.#id
    }
}


const e = new Employee("Fred", 651)
console.log(e.ID)