class LNode {
    value: number;
    next: LNode | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: LNode | null;

    constructor(initialValue: number) {
        const newNode = new LNode(initialValue);
        this.head = newNode;
    }

    add(value: number){
        const newNode = new LNode(value);
        this.head!.next = newNode;
    }
}

const list = new LinkedList(10);
console.log(list);