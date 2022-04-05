// A group of friends shows up at a movie theater, but
// are arriving at different times and can't all sit together

// A "node" is an individual in the group
class LinkedListNode {
  constructor(value) {
    this.#value = value;
    //Each node will keep track of where the next node to arrive is sitting
    this.#next = null;
  }

  // A node keeps track of where the next node is sitting
  // If only one node has shown up so far, add the next node
  // If the node already is keeping track of another node, 
  // send it to the next node to keep track of
  add(node) {
    !this.#next ? this.#next = node : this.#next.add(node);
  }



}