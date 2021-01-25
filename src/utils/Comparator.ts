export enum CompareType {
    LESSER = -1,
    EQUAL = 0,
    GREATER = 1
}
export type CompareFunction<T> = (a: T, b:T ) => CompareType;

export class Comparator<T> {
    private compare: CompareFunction<T>;
    constructor (compareFunc: CompareFunction<T>) {
        this.compare = compareFunc || Comparator.defaultCompareFunction;
    }

    private static defaultCompareFunction<T> (a: T, b: T) {
        if (a === b) return CompareType.LESSER; 
        return a > b ? CompareType.GREATER : CompareType.LESSER; 
    }

    public equal (a:T, b: T) {
        return this.compare(a, b) === CompareType.EQUAL;
    }

    public lessThan (a:T, b:T) {
        return this.compare(a, b) === CompareType.LESSER;
    }

    public greaterThan (a:T, b:T) {
        return this.compare(a, b) === CompareType.GREATER;
    }

    public lessThanOrEqual (a:T, b:T) {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    public greaterThanOrEqual (a:T, b:T) {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    public reverse () {
        const compareOriginal = this.compare;
        this.compare = (a, b) => compareOriginal(b, a);
    }
}