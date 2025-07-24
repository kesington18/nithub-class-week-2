var QueueNode = /** @class */ (function () {
    function QueueNode(value) {
        this.value = value;
        this.next = null;
    }
    return QueueNode;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    Queue.prototype.enQueue = function (value) {
        var newNode = new QueueNode(value);
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
            this.length++;
        }
        else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
            this.length++;
        }
    };
    Queue.prototype.deQueue = function () {
        if (this.last === null) {
            return;
        }
        else {
            if (this.first) {
                this.first = this.first.next;
            }
            else {
                this.last = null;
            }
        }
    };
    Queue.prototype.peek = function () {
        return this.last;
    };
    return Queue;
}());
var node = new Queue();
node.enQueue(10);
node.enQueue(20);
node.enQueue(30);
node.deQueue();
console.log(node.peek());
