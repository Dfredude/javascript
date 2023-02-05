import Parent from './Parent.js'
import Leaf from './Leaf.js'

export default class Node {
    static from(value, ...children) {
        return children.length === 0 ? new Leaf(value) : new Parent(value, children)
    }
}