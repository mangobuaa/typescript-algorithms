import { LinkedNode } from "../LinkedList/LinkedNode";

export class Queue<T> {
    private size = 0;
    private head: LinkedNode<T>;
    private tail: LinkedNode<T>;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    public enqueue (element: T) {
        const node = new LinkedNode(element);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this;
    }

    public dequeue () {
        const head = this.head;
        if (this.size <= 0) {
            throw new Error('RangeError');
        }

        // 只有一个元素
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
        return head.element;
    }

    public get length () {
        return this.size;
    }
}