
/**
 * 链表节点类
 */
export class LinkedNode<T> {
    public element: T;             // 数据
    public next: LinkedNode<T>;    // 下一个节点
    public prev: LinkedNode<T>;    // 上一个节点，对于单向链表，可删除该属性

    /**
     * 链表节点构造方法
     * @param element 数据
     * @param next 下一个节点
     * @param prev 上一个节点
     */
    constructor(element:T, next: LinkedNode<T> = null, prev: LinkedNode<T> = null) {
        this.element = element;
        this.next = next;
        this.prev = prev;
    }

    /**
     * 重写 toString 方法
     * @param callback 可选参数。参数接收 T 类型数据，返回字符串
     */
    toString(callback?: (element: T) => string) {
        return callback ? callback(this.element) : `${this.element}`;
    }
}