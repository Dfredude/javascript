class Parent {
    constructor(value, children){
        this.value = value
        this.children = children
    }
    depth() {
        return (1 + Math.max(...this.children.map((n) => (
           n.depth()
        ))))
    }
}

class leaf {
    constructor(value){
        this.value = value
    }
    depth() {
        return 1
    }
}

let node = new Parent(10, [new Parent(50, [new leaf(30)]), new leaf(5)])

console.log(node.depth())

