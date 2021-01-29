import { LinkedNode } from "../LinkedList/LinkedNode";

export class Stack<T> {
    private top: LinkedNode<T> = null;
    private size = 0;

    constructor() {}

    /**
     * 压栈
     * @param element 将要压栈的元素 
     */
    public push (element: T) {
        this.top = new LinkedNode(element, this.top);
        this.size++;
        return this;
    }

    /**
     * 弹出栈
     */
    public pop () {
        const popElem = this.top; 
        if (popElem) {
            this.top = popElem.next;
            popElem.next = null;
            this.size--;
            return popElem.element;
        }
        return null;
    }

    /**
     * 当前栈元素个数
     */
    public get length () {
        return this.size;
    }
}