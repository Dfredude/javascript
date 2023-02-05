import Node from "./Node.js"

export default class Leaf extends Node {
    constructor(value) {
        super()
        this.value = value
    }
    depth(){ return 1 }
}