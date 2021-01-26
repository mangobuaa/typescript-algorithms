import { LinkedNode } from "../LinkedNode";
import { Person } from '../../../models/Person';

describe('链表节点', () => {
    test('普通数据类型节点：', () => {
        // 11 <-> 22 <-> 33 -> null
        let head = new LinkedNode<number>(11);
        head.next = new LinkedNode<number>(22, null, head);
        head.next.next = new LinkedNode<number>(33, null, head.next);

        expect(head.element).toBe(11);
        expect(head.next.element).toBe(22);
        expect(head.next.next.element).toBe(33);

        const second = head.next;
        expect(second.element).toBe(22);
        expect(second.prev.element).toBe(11);

        const third = second.next;
        expect(third.prev.element).toBe(22);
        expect(third.prev.prev.element).toBe(11);
        expect(third.next).toBeNull();
    });

    test('对象类型节点：', () => {
        const p1 = new Person(111, 'Mango', 10);
        const p2 = new Person(112, 'Jordan', 12);
        const p3 = new Person(113, 'Kolin', 13);

        // p1 <-> p2 <-> p3
        const head = new LinkedNode<Person>(p1);
        head.next = new LinkedNode<Person>(p2, null, head);
        head.next.next = new LinkedNode<Person>(p3, null, head.next);

        expect(head.element).toBe(p1);
        expect(head.next.element).toBe(p2);
        expect(head.next.next.element).toBe(p3);

        const second = head.next;
        expect(second.element).toBe(p2);
        expect(second.prev.element).toBe(p1);

        const third = second.next;
        expect(third.prev.element).toBe(p2);
        expect(third.prev.prev.element).toBe(p1);
        expect(third.next).toBeNull();
    });

    test('链表节点 toString()：', () => {
        const node = new LinkedNode<Person>(new Person(111, 'Mango', 10));

        // 使用自定义格式
        let str = node.toString(element => `id: ${element.id}, name: ${element.name}, age: ${element.age}`);
        expect(str).toBe('id: 111, name: Mango, age: 10');

        // 不使用自定义格式
        str = node.toString();
        expect(str).toBe('[object Object]');
    });
})