var DoublyLinkedListNode = /** @class */ (function () {
    function DoublyLinkedListNode(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
    return DoublyLinkedListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList(value) {
        this.head = new DoublyLinkedListNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    DoublyLinkedList.prototype.append = function (value) {
        var newNode = new DoublyLinkedListNode(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    };
    DoublyLinkedList.prototype.prepend = function (value) {
        var newNode = new DoublyLinkedListNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    };
    DoublyLinkedList.prototype.traverseToIndex = function (index) {
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
    DoublyLinkedList.prototype.insertion = function (index, value) {
        if (index >= this.length) {
            this.append(value);
            return;
        }
        if (index <= 0) {
            this.prepend(value);
            return;
        }
        var newNode = new DoublyLinkedListNode(value);
        var prevNode = this.traverseToIndex(index - 1);
        var holdingNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = holdingNode;
        holdingNode && (holdingNode.prev = newNode);
        this.length++;
        return newNode;
    };
    DoublyLinkedList.prototype.remove = function (index) {
        var prevNode = this.traverseToIndex(index - 1);
        var nodeToDelete = prevNode.next;
        var holdingNode = nodeToDelete === null || nodeToDelete === void 0 ? void 0 : nodeToDelete.next;
        prevNode.next = holdingNode;
        holdingNode && (holdingNode.prev = prevNode);
        this.length--;
    };
    return DoublyLinkedList;
}());
var myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.append(4);
myDoublyLinkedList.insertion(1, 10);
console.log(myDoublyLinkedList.insertion(1, 10));
