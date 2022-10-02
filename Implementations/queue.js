class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value){
        const item = new Node(value);
        if (this.first == null) {
            this.first = item;
        } else {
            this.last.next = item;
        }
        this.last = item;
        this.length++;
        return this;
    }
    dequeue(){
        if (!this.first) {
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  myQueue.enqueue("Joy")
  console.log(myQueue.peek())
  myQueue.enqueue("Matt")
  console.log(myQueue.peek())
  myQueue.enqueue("Pavel")
  console.log(myQueue.peek())
  myQueue.enqueue("Samir")
  console.log(myQueue.peek())
  myQueue.dequeue()
  console.log(myQueue.peek())
  myQueue.dequeue()
  console.log(myQueue.peek())
  myQueue.dequeue()
  console.log(myQueue.peek())
  myQueue.dequeue()
  console.log(myQueue)

  //Joy
  //Matt
  //Pavel
  //Samir
  
  