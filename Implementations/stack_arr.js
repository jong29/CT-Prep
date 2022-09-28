class Stack {
    constructor(){
        this.arr = []
    }
    peek() {
        return this.arr[this.arr.length-1];
    }
    push(value){
        this.arr.push(value)
        return this;
    }
    pop(){
        this.arr.pop()
        return this;
    }
//isEmpty
}

myStack = new Stack()
myStack.peek();
myStack.push('google');
console.log(myStack.peek())
myStack.push('udemy');
console.log(myStack.peek())
myStack.push('discord');
console.log(myStack.peek())
myStack.pop();
console.log(myStack.peek())
myStack.pop();
console.log(myStack.peek())
myStack.pop();
console.log(myStack.peek())

  
  //Discord
  //Udemy
  //google