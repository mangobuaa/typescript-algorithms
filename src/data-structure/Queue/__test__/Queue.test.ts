import { Queue } from "../Queue";

describe('Queue 测试', () => {
    let queue: Queue<number>;
    beforeEach(() => {
        queue = new Queue<number>();
    })
    it ('入队', () => {
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.length).toBe(2);

        let dequeued = queue.dequeue();
        expect(dequeued).toBe(1);
        expect(queue.length).toBe(1);

        dequeued = queue.dequeue();
        expect(dequeued).toBe(2);
        expect(queue.length).toBe(0);
        expect(() => queue.dequeue()).toThrowError();
    });
});