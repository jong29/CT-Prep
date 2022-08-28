class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.bottom === null) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            this.top.next = newNode;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if (this.isEmpty()){
            return null;
        }else if(this.top === this.bottom){
            const final = this.top;
            this.top = null;
            this.bottom = null;
            this.length--;
            return final
        } else {
            let prev_top = this.top;
            let new_top = this.bottom;
            while(new_top.next.next != null){
                new_top = new_top.next;
            }
            this.top = new_top;
            this.top.next = null;
            this.length--;
            return prev_top;
        }
    }

    isEmpty() {
        return !(this.length);
    }
}

const myStack = new Stack();
myStack.push("Google")
console.log(myStack.peek())
myStack.push("Udemy")
console.log(myStack.peek())
myStack.push("Discord")
console.log(myStack.peek())

console.log(myStack.pop().value)
console.log(myStack.pop().value)
console.log(myStack.pop().value)
console.log(myStack.isEmpty())