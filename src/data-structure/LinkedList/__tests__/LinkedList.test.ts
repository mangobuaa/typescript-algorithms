import { LinkedList } from "../LinkedList";

describe('LinkedList 测试', () => {

    test('LinkedList 添加', () => {
        const list = new LinkedList<number>();

        list.add(11);
        list.add(22);
        list.add(33);
        list.add(44);

        expect(list.length).toBe(4);

        expect(list.get(0)).toBe(11);
        expect(list.get(3)).toBe(44);
        expect(() => {list.get(4)}).toThrowError();
    });

});