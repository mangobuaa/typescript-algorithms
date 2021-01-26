export enum CompareType {
    LESSER = -1,
    EQUAL = 0,
    GREATER = 1
}
export type CompareFunction<T> = (a: T, b:T ) => CompareType;

export class Comparator<T> {
    private compareFn: CompareFunction<T>;
    constructor (compareFunc: CompareFunction<T>) {
        this.compareFn = compareFunc || Comparator.defaultCompareFunction;
    }

    private static defaultCompareFunction<T> (a: T, b: T) {
        if (a === b) return CompareType.LESSER; 
        return a > b ? CompareType.GREATER : CompareType.LESSER; 
    }

    public compare (a: T, b: T) {
        return this.compareFn(a, b);
    }
    public equal (a:T, b: T) {
        return this.compareFn(a, b) === CompareType.EQUAL;
    }

    public lessThan (a:T, b:T) {
        return this.compareFn(a, b) === CompareType.LESSER;
    }

    public greaterThan (a:T, b:T) {
        return this.compareFn(a, b) === CompareType.GREATER;
    }

    public lessThanOrEqual (a:T, b:T) {
        return !this.greaterThan(a, b);
    }

    public greaterThanOrEqual (a:T, b:T) {
        return !this.lessThan(a, b);
    }

    public reverse () {
        const compareOriginal = this.compareFn;
        this.compareFn = (a, b) => compareOriginal(b, a);
    }
}