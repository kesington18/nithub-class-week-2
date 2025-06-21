class DoublyLinkedListNode {
    value: number;
    next: null | DoublyLinkedListNode;
    prev: null | DoublyLinkedListNode;
    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    head: DoublyLinkedListNode;
    tail: DoublyLinkedListNode;
    length: number;
    constructor(value: number){
        this.head = new DoublyLinkedListNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value: number){
        const newNode = new DoublyLinkedListNode(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    prepend(value: number){
        const newNode = new DoublyLinkedListNode(value);

        newNode.next = this.head;
        this.head.prev = newNode;
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
            currNode = currNode.next as DoublyLinkedListNode;
            counter++;
        }
        return currNode;
    }

    insertion(index: number, value: number){
        if (index >= this.length) {
            this.append(value);
            return;
        }

        if (index <= 0) {
            this.prepend(value);
            return;
        }

        let newNode = new DoublyLinkedListNode(value);

        let prevNode = this.traverseToIndex(index - 1);
        let holdingNode = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = holdingNode;
        holdingNode && (holdingNode.prev = newNode);
        this.length++;

        return newNode;
    }

    remove(index: number){
        const prevNode = this.traverseToIndex(index - 1);
        const nodeToDelete = prevNode.next;
        const holdingNode = nodeToDelete?.next;
        prevNode.next = holdingNode as DoublyLinkedListNode;
        holdingNode && (holdingNode.prev = prevNode);
        this.length--;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.append(4);
myDoublyLinkedList.insertion(1, 10);
console.log(myDoublyLinkedList.insertion(1, 10));