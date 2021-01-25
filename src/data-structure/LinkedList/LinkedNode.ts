
/**
 * 链表节点类
 */
export class LinkedNode<T> {
    public element: T;             // 数据
    public next: LinkedNode<T>;    // 下一个节点

    constructor(element:T, next: LinkedNode<T> = null) {
        this.element = element;
        this.next = next;
    }
}

export function getNodeByIndex (head: LinkedNode<any>, index: number) {
    let node = head;
    for (let i = 0; i < index; i++) {
        node = node.next;
    }
    return node;
}