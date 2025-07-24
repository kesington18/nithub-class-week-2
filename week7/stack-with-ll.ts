class StackNode{
    value: number
    next: StackNode | null

    constructor(value: number){
        this.value = value
        this.next = null
    }
}

class Stack{
    top: StackNode | null
    bottom: StackNode | null
    private length: number

    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }

    push(value: number){
        const newNode = new StackNode(value)

        if(this.isEmpty()){
            this.top = newNode
            this.bottom = newNode
            this.length++
        }else{
            const holdingNode = this.top
            this.top = newNode
            this.top.next = holdingNode
            this.length++
        }
    }
    pop(){
        if(this.isEmpty()){
            return;
        }

        if(this.top){
            this.top = this.top.next
        }else{
            this.bottom = null
        }
        this.length--
    }

    isEmpty(){
        return this.length === 0
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
// stack.pop()

console.log(stack)