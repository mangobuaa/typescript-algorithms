export class Person {

    /**
     * Person 构造函数
     * @param id 唯一标识
     * @param name 名字
     * @param age 年龄
     */
    constructor (public id: number, public name: string = '', public age: number = 0) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}