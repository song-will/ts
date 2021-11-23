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

class Demo_2 {
    #num: number
    private n: string
    constructor () {
        this.#num = 20
        this.n = 'n'
    }
}

const demo_2 = new Demo_2()
// console.log(demo_2.num) 
// console.log(demo_2.n)