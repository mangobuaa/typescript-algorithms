import { CompareFunction } from "../../utils/Comparator";
import { LinkedNode } from "./LinkedNode";

export class LinkedList<T> {
    private head: LinkedNode<T> = null;
    private tail: LinkedNode<T> = null;
    public size: number = 0;
    private compare;

    constructor (compareFunc?: CompareFunction<T>) {
        this.compare = compareFunc;
    }

    
    /**
     * 在 index 位置插入值为 element 的节点
     * @param index 位置索引
     * @param element 节点的值
     */
    insert(index: number, element: T) {
        // 可插入的位置 index <= size
        // 当 index = 0 时，插入头部
        // 当 index = size 时，插入尾部
        this.checkRange(index);

        if (index === 0) {
            this.prepend(element);
        } else if (index === this.size) {
            this.append(element);
        } else {
            const newNode = new LinkedNode<T>(element);
            const prev = this.getNodeByIndex(index-1);
            newNode.next = prev.next;
            prev.next = newNode;
            this.size++;        // 将容量+1
        } 

        return this;        // 返回 this，方便链式调用
    }

    /**
     * 在头部添加元素节点
     * @param element 节点的值
     */
    prepend (element: T) {
        const newNode = new LinkedNode<T>(element, this.head);
        this.head = newNode;
        
        if (!this.tail) {   // 之前没有元素
            this.tail = newNode;
        }

        this.size++;
        return this;
    }

    /**
     * 在末尾添加元素节点
     * @param element 节点的值 
     */
    append(element: T) {
        const newNode = new LinkedNode(element);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
        return this;
    }

    getNodeByIndex (index: number) {
        let node = this.head;
        while(index-- > 0) {
            node = node.next;
        }
        return node;
    }

    private checkRange (index: number) {
        if (index > this.size || index < 0) {
            throw new Error(`LinkedList 的索引${index}超出合理范围`);
        } 
    }
}