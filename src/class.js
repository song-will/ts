// /**
//  * 抽象类
//  * 1. 可以具体实现，也可以定义抽象方法
//  * 2. 方法修饰符 
//  *    public 共有的，任何地方都可以访问到
//  *    private 不能在类的外部使用，只能在类的内部使用
//  *    protected 受保护，只能在类及其子类中访问
//  *    
//  */
// abstract class Animal {
//     abstract makeSound(): void
//     move(): void {
//         console.log('move')
//     }
// }
// // 类 既可以是实体类， 又可以是一个类型
// class Dog extends Animal {
//     #uname: string // #外部无法访问， provite可以拿到
//     private age: number
//     constructor (name: string, age: number) {
//         super()
//         this.#uname = name
//         this.age = age
//     }
//     makeSound () {
//         console.log('w')
//     }
// }
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Demo_2_num;
// const dog = new Dog('song', 18)
// dog.makeSound()
// dog.move()
// console.log(dog['#uname'], dog.age) // undefined 18
// class Demo {
//     private num: number
//     constructor () {
//         this.num = 20
//     }
// }
// const demo = new Demo()
// console.log(demo.num)
var Demo_2 = /** @class */ (function () {
    function Demo_2() {
        _Demo_2_num.set(this, void 0);
        __classPrivateFieldSet(this, _Demo_2_num, 20, "f");
        this.n = 'n';
    }
    return Demo_2;
}());
_Demo_2_num = new WeakMap();
var demo_2 = new Demo_2();
// console.log(demo_2.num) 
console.log(demo_2.n);
