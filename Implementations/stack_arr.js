class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
class Stack {
    constructor(){
        this.arr = []
    }
    peek() {
        return this.arr[-1];
    }
    push(value){
        this.arr.push(value)
        return this;
    }
    pop(){
        this.arr.pop(value)
        return this;
    }
//isEmpty
}
  
  const myStack = new Stack();
  myStack.peek();
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('discord');
  myStack.peek();
  myStack.pop();
  myStack.pop();
  myStack.pop();
  
  
  //Discord
  //Udemy
  //google