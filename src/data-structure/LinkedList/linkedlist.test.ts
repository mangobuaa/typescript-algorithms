import { LinkedList } from "./LinkedList";
import { LinkedNode } from "./LinkedNode"

describe('链表', () => {
    test('链表节点：', () => {
        let head = new LinkedNode<number>(11);
        head.next = new LinkedNode<number>(22);
        expect(head.element).toBe(11);
        expect(head.next.element).toBe(22);

        head = head.next;
        expect(head.element).toBe(22);
        expect(head.next).toBeNull();

        head = new LinkedNode<number>(11, head);
        expect(head.element).toBe(11);
        expect(head.next.element).toBe(22);
    });

    test('链表插入方法：', () => {
        const list1 = new LinkedList<number>();
        list1.insert(0, 1); // 1
        list1.insert(1, 2); // 1 -> 2
        list1.insert(0, 3); // 3 -> 1 -> 2

        const head = list1.getNodeByIndex(0);
        expect(head.element).toBe(3);
        expect(head.next.element).toBe(1);
        expect(head.next.next.element).toBe(2);

        list1.append(4);    // 3 -> 1 -> 2 -> 4
        const node3 = list1.getNodeByIndex(3);
        expect(node3.element).toBe(4);

        list1.insert(list1.size, 5);
        const node4 = list1.getNodeByIndex(4);
        expect(node4.element).toBe(5);

        expect(() => list1.insert(100, 100)).toThrowError();
    });
})