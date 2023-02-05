import { Node } from "./Tree.js"

export default class Leaf extends Node {
    constructor(value) {
        super()
        this.value = value
    }
    depth(){ return 1 }
}