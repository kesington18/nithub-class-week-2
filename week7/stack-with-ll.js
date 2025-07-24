var StackNode = /** @class */ (function () {
    function StackNode(value) {
        this.value = value;
        this.next = null;
    }
    return StackNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    Stack.prototype.push = function (value) {
        var newNode = new StackNode(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
        }
        else {
            var holdingNode = this.top;
            this.top = newNode;
            this.top.next = holdingNode;
            this.length++;
        }
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return;
        }
        if (this.top) {
            this.top = this.top.next;
        }
        else {
            this.bottom = null;
        }
        this.length--;
    };
    Stack.prototype.isEmpty = function () {
        return this.length === 0;
    };
    return Stack;
}());
var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
// stack.pop()
console.log(stack);
