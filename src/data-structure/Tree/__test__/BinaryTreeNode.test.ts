import { BinaryTreeNode } from "../BinaryTreeNode";

describe ('BinaryTreeNode 结点类测试', () => {
    it('构造函数', () => {
        const root = new BinaryTreeNode<number>(13);

        const left = new BinaryTreeNode<number>(10);
        root.left = left;

        const right = new BinaryTreeNode<number>(22);
        root.right = right;

        expect(root.element).toBe(13);
        expect(left.element).toBe(10);
        expect(right.element).toBe(22);
        
        expect(root.left).toBe(left);
        expect(root.right).toBe(right);
        expect(left.parent).toBe(root);
        expect(right.parent).toBe(root);
    });

    it('left 和 right 的 getter 和 setter', () => {

        const left = new BinaryTreeNode<number>(10);
        const right = new BinaryTreeNode<number>(22);
        const root = new BinaryTreeNode<number>(13, left, right);

        expect(root.element).toBe(13);
        expect(left.element).toBe(10);
        expect(right.element).toBe(22);
        
        expect(root.left).toBe(left);
        expect(root.right).toBe(right);
        expect(left.parent).toBe(root);
        expect(right.parent).toBe(root);
    });

    it('left 和 right 的 getter 和 setter 2', () => {

        const left = new BinaryTreeNode<number>(10);
        const right = new BinaryTreeNode<number>(22);
        const root = new BinaryTreeNode<number>(13);
        
        root.left = left;
        root.right = right;

        expect(root.element).toBe(13);
        expect(left.element).toBe(10);
        expect(right.element).toBe(22);
        
        expect(root.left).toBe(left);
        expect(root.right).toBe(right);
        expect(left.parent).toBe(root);
        expect(right.parent).toBe(root);
    });

    it('setParent（） 测试', () => {
        const left = new BinaryTreeNode<number>(10);
        const right = new BinaryTreeNode<number>(22);
        const root = new BinaryTreeNode<number>(13);
        
        left.setParent(root, true);
        right.setParent(root, false);

        expect(root.element).toBe(13);
        expect(left.element).toBe(10);
        expect(right.element).toBe(22);
        
        expect(root.left).toBe(left);
        expect(root.right).toBe(right);
        expect(left.parent).toBe(root);
        expect(right.parent).toBe(root);
    });

    it('树的高度', () => {
        const left = new BinaryTreeNode<number>(10);
        const right = new BinaryTreeNode<number>(22);
        const root = new BinaryTreeNode<number>(13, left, right);

        expect(root.height).toBe(2);
        expect(left.height).toBe(1);
        expect(root.left).toBe(left);

        left.right = right;

        expect(root.right).toBeNull();
        expect(right.parent).toBe(left);
        expect(left.height).toBe(2);
        expect(right.height).toBe(1);
        expect(root.left).toBe(left);
        expect(root.height).toBe(3);
    });

});

describe('先序、中序、后序、层序遍历测试', () => {
    const root = new BinaryTreeNode<number>(1);
    const l1 = new BinaryTreeNode(2);
    const r1 = new BinaryTreeNode(3);
    const l1l2 = new BinaryTreeNode(4);
    const l1r2 = new BinaryTreeNode(5);
    root.left = l1;
    root.right = r1;
    l1.left = l1l2;
    l1.right = l1r2;

    it ('先序遍历测试', () => {
        const arr = [];
        root.preOrder(elem => {
            arr.push(elem);
        });

        expect(arr.length).toBe(5);
        expect(arr).toEqual([1, 2, 4, 5, 3]);
    });

    it ('中序遍历测试', () => {
        const arr = [];
        root.inOrder(elem => {
            arr.push(elem);
        });
        expect(arr.length).toBe(5);
        expect(arr).toEqual([4, 2, 5, 1, 3]);
    });

    it ('后序遍历测试', () => {
        const arr = [];
        root.postOrder(elem => {
            arr.push(elem);
        });
        expect(arr.length).toBe(5);
        expect(arr).toEqual([4, 5, 2, 3, 1]);
    });

    it ('层序遍历测试', () => {
        const arr = [];
        root.layerOrder(elem => {
            arr.push(elem);
        });

        expect(arr.length).toBe(5);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });
});