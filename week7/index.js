var SinglyLinkedListNode = /** @class */ (function () {
    function SinglyLinkedListNode(value) {
        this.value = value;
        this.next = null;
    }
    return SinglyLinkedListNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList(value) {
        this.head = new SinglyLinkedListNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    SinglyLinkedList.prototype.append = function (value) {
        var newNode = new SinglyLinkedListNode(value);
        this.tail && (this.tail.next = newNode);
        this.tail = newNode;
        this.length++;
        return this;
    };
    SinglyLinkedList.prototype.prepend = function (value) {
        var newNode = new SinglyLinkedListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    };
    SinglyLinkedList.prototype.traverseToIndex = function (index) {
        var counter = 0;
        var currNode = this.head;
        /* while (currNode) {
            if (counter === index) {
                return currNode;
            }
            counter++;
            currNode = currNode.next as SinglyLinkedListNode;
        } */
        // or teacher way
        while (counter !== index) {
            currNode = currNode.next;
            counter++;
        }
        return currNode;
    };
    SinglyLinkedList.prototype.insertion = function (value, index) {
        if (index === 0) {
            return this.prepend(value);
        }
        if (index === this.length) {
            return this.append(value);
        }
        var newNode = new SinglyLinkedListNode(value);
        var prevNode = this.traverseToIndex(index - 1);
        var holdingNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = holdingNode;
        this.length++;
    };
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
    SinglyLinkedList.prototype.reverse = function () {
        if (!this.head.next)
            return this.head;
        // create a first variable, which stores the head
        var first = this.head;
        this.tail = this.head;
        var second = first.next;
        while (second) {
            var temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    };
    return SinglyLinkedList;
}());
var mySinglyLinkedList = new SinglyLinkedList(20);
mySinglyLinkedList.append(30);
mySinglyLinkedList.prepend(10);
mySinglyLinkedList.prepend(5);
// console.log(mySinglyLinkedList.traverseToIndex(2));
mySinglyLinkedList.insertion(2, 15);
console.log(mySinglyLinkedList);
