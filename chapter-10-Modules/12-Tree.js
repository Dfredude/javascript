import { Node } from "./Tree.js";

const myTree = 
Node.from('Adam',
    Node.from('Cain', 
        Node.from('Enoch')),
    Node.from('Abel'),
    Node.from('Seth', 
        Node.from('Enos')))

console.log(myTree.depth());

// Unsure why it worked