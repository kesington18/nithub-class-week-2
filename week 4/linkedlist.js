var LNode = /** @class */ (function () {
    function LNode(value) {
        this.value = value;
        this.next = null;
    }
    return LNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(initialValue) {
        var newNode = new LNode(initialValue);
        this.head = newNode;
    }
    return LinkedList;
}());
var list = new LinkedList(10);
console.log(list);
