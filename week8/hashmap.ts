class ListNode<K, V> {
    key: K;
    value: V;
    next: ListNode<K, V> | null;

    constructor(key: K, value: V, next: ListNode<K, V> | null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
    
}

class HashMap<K, V>{
    private buckets: Array<ListNode<K, V> | null>;
    private size: number;

    constructor(size: number = 10) {
        this.size = size;
        this.buckets = new Array(this.size).fill(null);
    }

    private hash(key: K): number{
        const strk = String(key);
        let hash = 0;
        for (let i = 0; i < strk.length; i++) {
            hash = (hash + strk.charCodeAt(i) * 1) % this.size;
        }
        return hash;
    }

    set(key: K, value: V): void{
        const index = this.hash(key)
        let head = this.buckets[index]

        let curr = head;

        while (curr) {
            if (curr.key === key) {
                curr.value = value;
                return
            }
            curr = curr.next;
        }
        let newNode = new ListNode(key, value, head);
        this.buckets[index] = newNode;
    }

    get(key: K): V | undefined{
        const index = this.hash(key);
        let curr = this.buckets[index];

        while (curr) {
            if (curr.key === key) {
                return curr.value;
            }
            curr = curr.next;
        }
        return undefined;
    }

    remove(key: K){
        const index = this.hash(key);
        let curr = this.buckets[index];
        let prev: ListNode<K, V> | null = null;

        while (curr) {
            if (curr.key === key) {
                if (prev) {
                    prev.next = curr.next
                }else{
                    this.buckets[index] = curr.next
                }
                return;
            }
            prev = curr;
            curr = curr.next;
        }

        return;
    }
}