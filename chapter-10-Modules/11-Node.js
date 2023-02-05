/* 
Trees have two kinds of nodes: those with children (parents) and those without (leaves). 
Let's model that with inheritance.

Now a module-happy developer wants to put each class into a separate module. (See Node.js, Parent.js, Leaf.js)
Do that and try it out with a demo program: 
*/

import Node from './Node.js'

const myTree = 
Node.from('Adam',
    Node.from('Cain', 
        Node.from('Enoch')),
    Node.from('Abel'),
    Node.from('Seth', 
        Node.from('Enos')))

console.log(myTree.depth());

/* What happens? Why? Error:

Parent.js:3
export default class Parent extends Node {
                                    ^

ReferenceError: Cannot access 'Node' before initialization

When we import Node.js we are improting two other modules that Node depend on: Parent.js and Leaf.js.
The problem is that both of those modules also depend on Node.js,
so it would be an infinite recursion if modules didn't know if a module is already being improted.

At the point Parent.js is trying to extend Node.js it realizes it's not defined and it throws the error.

*/