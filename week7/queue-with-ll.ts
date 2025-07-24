class QueueNode{
    value: number
    next: QueueNode | null

    constructor(value: number){
        this.value = value
        this.next = null
    }
}

class Queue{
    first: QueueNode | null
    last: QueueNode | null
    private length: number

    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    enQueue(value: number){
        const newNode = new QueueNode(value)

        if(this.first === null){
            this.first = newNode
            this.last = newNode
            this.length++
        }else{
            const temp = this.first
            this.first = newNode
            this.first.next = temp
            this.length++
        }
    }

    deQueue(){
        if(this.last === null){
            return;
        }else{
            if(this.first){
                this.first = this.first.next
            }else{
                this.last = null
            }
        }
    }

    peek(){
        return this.last
    }
}

const node = new Queue()

node.enQueue(10)
node.enQueue(20)
node.enQueue(30)

node.deQueue()

console.log(node.peek())
