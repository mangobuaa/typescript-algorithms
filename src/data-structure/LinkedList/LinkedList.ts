import { Comparator, CompareFunction } from "../../utils/Comparator";
import { LinkedNode } from "./LinkedNode";

export class LinkedList<T> {
    private head: LinkedNode<T> = null;
    public size: number = 0;
    private comparator: Comparator<T>;

    constructor (compareFunc?: CompareFunction<T>) {
        this.comparator = new Comparator(compareFunc);
    }

    /**
     * 将数据添加到链表尾部
     * @param element 元素
     */
    public add (element: T) {
        return this;
    }

    /**
     * 将数据插入链表的特定位置
     * @param index 将要插入位置的索引
     * @param elememt 元素
     */
    public insert(index: number, elememt: T) {
        return this;
    }

    /**
     * 获取特定位置的元素
     * @param index 位置索引
     */
    public get(index: number) {
        return this.head;
    }

    /**
     * 修改特定位置的元素
     * @param index 位置索引
     * @param element 元素
     */
    public set(index: number, element: T) {
        return ;
    }

    /**
     * 链表的元素个数
     */
    public get length () {
        return this.size;
    }


}