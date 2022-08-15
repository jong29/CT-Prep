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
        return this.top.value;
    }

    push(value) {
        newNode = new Node(value);
        if (this.bottom === null) {
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
        } else {
            this.top.next = newNode;
            this.top = newNode;
            this.length++;
        }
    }

    pop() {
        if (this.isEmpty()){
            return null;
        }else if(this.top === this.bottom){
            final = this.top;
            this.top = null;
            this.bottom = null;
            this.length--;
            return final
        } else {
            prev_top = this.top;
            new_top = this.bottom;
            while(new_top.next.next != null){
                new_top = new_top.next;
            }
            this.top = new_top;
            this.legnth--;
            return prev_top;
        }
    }

    isEmpty() {
        return !(this.length);
    }
}

const myStack = new Stack();