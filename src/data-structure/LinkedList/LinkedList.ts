import { Comparator, CompareFunction } from "../../utils/Comparator";
import { LinkedNode } from "./LinkedNode";

export class LinkedList<T> {
    public static readonly NOT_FOUND_INDEX = -1;

    private head: LinkedNode<T> = null;
    private size: number = 0;
    private comparator: Comparator<T>;

    constructor (compareFunc?: CompareFunction<T>) {
        this.comparator = new Comparator(compareFunc);
    }

    /**
     * 将数据添加到链表尾部
     * @param element 元素
     */
    public add (element: T) {
        this.insert(this.size, element);
        return this;
    }

    /**
     * 将数据插入链表的特定位置
     * @param index 将要插入位置的索引
     * @param elememt 元素
     */
    public insert(index: number, elememt: T) {
        if (index === 0) {
            this.head = new LinkedNode(elememt, this.head);
        } else {
            const prev = this.node(index - 1);
            prev.next = new LinkedNode(elememt, prev.next);
        }
        this.size++;
        return this;
    }

    /**
     * 获取特定位置的元素
     * @param index 位置索引
     */
    public get(index: number) {
        return this.node(index).element;
    }

    /**
     * 修改特定位置的元素，并返回旧的元素
     * @param index 位置索引
     * @param element 元素
     */
    public set(index: number, element: T) {
        const node = this.node(index);
        const oldElement = node.element;
        node.element = element;
        return oldElement;
    }

    /**
     * 根据位置，删除元素，并返回被删除的元素
     * @param index 位置索引
     */
    public delete (index: number) {
        let deletedNode: LinkedNode<T> = null;
        if (index === 0) {
            this.rangeCheck(index);
            deletedNode = this.head;
            this.head = this.head.next;
            return deletedNode.element;
        }
        const prev = this.node(index-1);
        deletedNode = prev.next;
        prev.next = prev.next.next;

        return deletedNode.element;
    }

    /**
     * 根据元素查找所在链表中的位置
     * @param element 待查找元素
     */
    public indexOf (element: T): number {
        let node = this.head;
        let index = 0;
        while (node) {
            if (this.comparator.equal(node.element, element)) {
                return index;
            }
            node = node.next;
            index++;
        }
        return LinkedList.NOT_FOUND_INDEX;
    }

    /**
     * 链表的元素个数
     */
    public get length () {
        return this.size;
    }

    /**
     * 根据位置，获取链表节点
     * @param index 位置索引
     */
    private node (index: number) {
        this.rangeCheck(index);
        let node = this.head;
        while (index-- > 0) {
            node = node.next;
        }
        return node;
    }

    /**
     * 检查索引是否超过链表范围
     * @param index 位置索引
     */
    private rangeCheck (index: number) {
        if (index < 0 || index >= this.size) {
            throw new Error(`索引${index}超出范围`);
        }
    }
}