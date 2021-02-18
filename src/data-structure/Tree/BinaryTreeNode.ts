import { Comparator } from "../../utils/Comparator";
import { Queue } from "../Queue/Queue";

/** (前序、中序、后序)遍历回调 */
export type BTOrderCallback<T> = (elem: T) => void; 

export class BinaryTreeNode<T> {
    /** 元素（数据域） */
    public element: T;
    /** 左子结点 */
    public _left: BinaryTreeNode<T>;
    /** 右子结点 */
    public _right: BinaryTreeNode<T>;
    /** 父结点 */
    public parent: BinaryTreeNode<T> = null;
    /** 结点比较器，比较结点的引用 */
    public nodeComparator = new Comparator();

    /**
     * 二叉树节点构造函数
     * @param element 数据
     * @param left 左子结点
     * @param right 右子结点
     */
    constructor (element: T, left: BinaryTreeNode<T> = null, right: BinaryTreeNode<T> = null) {
        this.element = element; 
        this.left = left;
        this.right = right;
    }

    public set left (left: BinaryTreeNode<T>) {
        this._left = left;

        if (!left) return;
        left.parent && left.parent.removeChild(left);
        left.parent = this;
    }
    public get left () {
        return this._left;
    }
    public set right (right: BinaryTreeNode<T>) {
        this._right = right;
        if (!right) return;
        right.parent && right.parent.removeChild(right);
        right.parent = this;
    }
    public get right () {
        return this._right;
    }

    /**
     * 设置父结点
     * @param parent 父结点
     * @param isLeft 是否是左子结点。如果为 false, 则为 右子结点
     */
    public setParent (parent: BinaryTreeNode<T>, isLeft: boolean): void {
        if (!parent) return;
        isLeft ? parent.left = this : parent.right = this;
    }

    /** 是否是叶子结点 */
    public isLeaf () {
        // 左右子结点都为 null 时，为叶子节点
        return this.left === null && this.right === null;
    }

    /** 左子树高度 */
    public get leftHeight () {
        if (!this.left) return 0;
        return this.left.height;
    }

    /** 右子树高度 */
    public get rightHeight () {
        if (!this.right) return 0;
        return this.right.height;
    }

    /** 树的高度 */
    public get height () {
        return Math.max(this.leftHeight, this.rightHeight) + 1;
    }

    /** 平衡因子 */
    public get balanceFactor () {
        return this.leftHeight - this.rightHeight;
    }

    /** 删除子节点 child */
    public removeChild (child: BinaryTreeNode<T>) {
        if (!child) return;

        if (this.nodeComparator.equal(this.left, child)) {
            this.removeLeft();
        }
        if (this.nodeComparator.equal(this.right, child)) {
            this.removeRight();
        }
    }

    /** 删除左结点 */
    public removeLeft () {
        if (!this.left) return;
        this.left.parent = null;
        this.left = null;
    }

    /** 删除右结点 */
    public removeRight () {
        if (!this.right) return;
        this.right.parent = null;
        this.right = null;
    }

    /** TODO: uncle() 父结点的兄弟结点 */

    /** 先序遍历 */
    public preOrder (callback: BTOrderCallback<T>) {
        this.preOrderByNode(this, callback);
    }

    private preOrderByNode (node: BinaryTreeNode<T>, callback) {
        if (!node) return;

        callback(node.element);
        this.preOrderByNode(node.left, callback);
        this.preOrderByNode(node.right, callback);
    }

    /** 中序遍历 */
    public inOrder (callback: BTOrderCallback<T>) {
        this.inOrderByNode(this, callback);
    }
    private inOrderByNode (node: BinaryTreeNode<T>, callback) {
        if (!node) return;

        this.inOrderByNode(node.left, callback);
        callback(node.element);
        this.inOrderByNode(node.right, callback);
    }

    /** 后序遍历 */
    public postOrder (callback: BTOrderCallback<T>) {
        this.postOrderByNode(this, callback);        
    }
    private postOrderByNode (node: BinaryTreeNode<T>, callback) {
        if (!node) return;

        this.postOrderByNode(node.left, callback);
        this.postOrderByNode(node.right, callback);
        callback(node.element);
    }

    /** 层序遍历 */
    public layerOrder (callback: BTOrderCallback<T>) {
        const queue = new Queue<BinaryTreeNode<T>>();

        queue.enqueue(this);
        while (queue.length > 0) {
            const dequeued = queue.dequeue();

            callback(dequeued.element);

            const { left, right } = dequeued;
            left && queue.enqueue(left);
            right && queue.enqueue(right);
        }
    }
}