// A group of friends shows up at a movie theater, but
// are arriving at different times and can't all sit together

// A "node" is an individual in the group
class LinkedListNode {
  constructor(value) {
    this.value = value;
    //Each node will keep track of where the next node to arrive is sitting
    this.next = null;
  }

  // A node keeps track of where the next node is sitting
  // If only one node has shown up so far, add the next node
  // If the node already is keeping track of another node, 
  // send it to the next node to keep track of
  add(node) {
    !this.next ? this.next = node : this.next.add(node);
  }

  
  getList() {
    if (this.next === null) {
      return this.value;
    } else {
      return this.value + ' ' + this.next.getList();
    }
  }
}

const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList());


// Binary Node
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    
    if (node.value < this.value) {
      !this.left ? this.left = node : this.left.add(node);
    } else if (node.value > this.value) {
      !this.right ? this.right = node : this.right.add(node);
    }
    
  }
}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);

console.log(B);