class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
class BinarySearchTree {
constructor(){
    this.root = null;
}
insert(value){
    let nn = new Node(value);
    let it = this.root;
    //Code here
    if (it === null) {
        this.root = nn;
        return;
    } 
    
    while(true){
        if (it.value < nn.value) {
            if(it.right === null){
                it.right = nn;
                break;
            } else {
                it = it.right;
            }
        } else {
            if(it.left === null){
                it.left = nn;
                break;
            } else {
                it = it.left;
            }
        }
    }
}
lookup(value){
    //Code here
    const it = this.root;
    while(true) {
        if (it === null) {
            return null;
        } else if (it.value === value) {
            return it;
        } else if (it.value < value) {
            it = it.right;
        } else if (it.value >= value) {
            it = it.left;
        }
    }
}
// remove
}

const tree = new BinarySearchTree();
tree.insert(9)
console.log(tree)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
const tree = { value: node.value };
tree.left = node.left === null ? null : traverse(node.left);
tree.right = node.right === null ? null : traverse(node.right);
return tree;
}