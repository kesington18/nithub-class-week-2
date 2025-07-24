class StackWithArray<T = number | string> {
    stack: T[]

    constructor() {
        this.stack = [];
    }

    pop(){
        if (this.isEmpty()) return "this stack is empty. Nothing to pop!";
        this.stack.pop();
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    add(value: T){
        return this.stack.push(value);
    }

    peek(){
        if(this.isEmpty()) return "nothing to peek";

        return this.stack.length - 1;
    }
}