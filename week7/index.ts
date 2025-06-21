class SinglyLinkedListNode {
    value: number;
    next: null | SinglyLinkedListNode;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    head: SinglyLinkedListNode;
    tail: SinglyLinkedListNode;
    private length: number;

    constructor(value: number){
        this.head = new SinglyLinkedListNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value: number){
        let newNode = new SinglyLinkedListNode(value);
        this.tail && (this.tail.next = newNode);
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value: number){
        let newNode = new SinglyLinkedListNode(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    traverseToIndex(index: number){
        let counter = 0;
        let currNode = this.head;

        /* while (currNode) {
            if (counter === index) {
                return currNode;
            }
            counter++;
            currNode = currNode.next as SinglyLinkedListNode;
        } */
        // or teacher way

        while (counter !== index) {
            currNode = currNode.next as SinglyLinkedListNode;
            counter++;
        }
        return currNode;
    }

    insertion(value: number, index: number){
        if(index === 0){
            return this.prepend(value);
        }
        
        if (index === this.length) {
            return this.append(value);
        }
        let newNode = new SinglyLinkedListNode(value);
        let prevNode = this.traverseToIndex(index - 1);
        let holdingNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = holdingNode;
        this.length++;
    }

    /* pop(){
        if(!this.head){
            return null;
        }

        let nextNode = this.head;
        let prevNode = this.head;

        while (nextNode.next) {
            prevNode = nextNode;
            nextNode = prevNode.next as SinglyLinkedListNode;
        }

        this.tail = prevNode;
        this.tail.next = null;
        this.length--;

        return nextNode
    }

    deleteNode(index: number){

        if(index === this.length){
            return this.pop()
        }


    } */

    reverse(){
        if(!this.head.next) return this.head;

        // create a first variable, which stores the head
        let first = this.head;
        this.tail = this.head;

        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first
    }
}

const mySinglyLinkedList = new SinglyLinkedList(20)
mySinglyLinkedList.append(30);
mySinglyLinkedList.prepend(10);
mySinglyLinkedList.prepend(5);
// console.log(mySinglyLinkedList.traverseToIndex(2));
mySinglyLinkedList.insertion(2, 15)
console.log(mySinglyLinkedList);