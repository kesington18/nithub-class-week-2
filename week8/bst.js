var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var BSTNode = /** @class */ (function () {
    function BSTNode(val, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.val = val;
        this.left = left;
        this.right = right;
    }
    return BSTNode;
}());
var BST = /** @class */ (function () {
    function BST(root) {
        if (root === void 0) { root = null; }
        this.root = root;
    }
    BST.prototype.addNode = function (value) {
        var head = this.root;
        var node = new BSTNode(value);
        if (head === null) {
            this.root = node;
            return;
        }
        while (head) {
            if (value < head.val) {
                if (head.left === null) {
                    head.left = node;
                    return;
                }
                else {
                    head = head.left;
                    continue;
                }
            }
            else if (value > head.val) {
                if (head.right === null) {
                    head.right = node;
                    return;
                }
                else {
                    head = head.right;
                    continue;
                }
            }
            else
                return;
        }
    };
    BST.prototype.deleteNode = function (root, val) {
        if (root == null)
            return;
        if (root.val === val) {
            if (root.left === null && root.right === null) {
                return null;
            }
            if (root.left === null) {
                return root.right;
            }
            if (root.right === null) {
                return root.left;
            }
            var pred = root.left;
            while (pred.right !== null) {
                pred = pred.right;
            }
            root.val = pred.val;
            root.left = this.deleteNode(root.left, pred.val);
            return root;
        }
        root.left = this.deleteNode(root.left, val);
        root.right = this.deleteNode(root.right, val);
        return root;
    };
    BST.prototype.search = function (value) {
        var head = this.root;
        if (head === null)
            return null;
        while (head) {
            if (value > head.val) {
                head = head.right;
            }
            else if (value < head.val) {
                head = head.left;
            }
            else {
                return head;
            }
        }
        return null;
    };
    BST.prototype.inorderTraversal = function (root) {
        if (root === null)
            return [];
        return __spreadArray(__spreadArray(__spreadArray([], this.inorderTraversal(root.left), true), [root.val], false), this.inorderTraversal(root.right), true);
    };
    return BST;
}());
function main() {
    var tree = new BST();
    tree.addNode(15);
    tree.addNode(12);
    tree.addNode(20);
    tree.addNode(16);
    tree.deleteNode(tree.root, 15);
    console.log(tree.inorderTraversal(tree.root));
    console.log(tree.search(16));
}
main();
