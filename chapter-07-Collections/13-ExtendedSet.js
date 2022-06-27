// map, filter, forEach, some, every for sets

class extendedSet extends Set {
    map(f) {
        let result = new Set()
        let index = 0
        for (let item of this) {
            result.add(f(item, index, this))
            index++
        }
        return result
    }
    filter(f){
        let result = new Set()
        let index = 0
        for (const item of this) {
            if (item != undefined && f(item, index, this)) result.add(item)
            index ++
        }
        return result
    }
    forEach(f){
        let index = 0
        for (const item of this) {
            f(item, index, this)
            index++
        }
    }
    some(f){
        for (const value of this) {
            if (f(value)) return true
        }
        return false
    }
    every(f){
        for (const value of this) {
            if (f(value) == false) return false
        }
        return true
    }
}

const mySet = new extendedSet([2, 5, 6])
console.log(mySet.map((item)=>item*item));
console.log(mySet.filter((value, index)=> value && index != 1));
mySet.forEach((item)=> {console.log(item)})
console.log(mySet.every((value)=> value != 6))
console.log(mySet.some((value)=> value == 2));