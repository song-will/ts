const data:string = 'song'
let isDone = true // 能够反向推断
isDone = false
let num: number 

function alertName(name: string): string {
    return 'test' + name
}

let unusable: void = undefined

function getString (something: string | number) : string {
    return something.toString()
}

// 枚举
enum Days {
    Sun = 8,
    Mon = 'song'
}

console.log('day1', Days['Sun'])
console.log('day2', Days['Mon'])

// type

// interface

interface Person {
    age: number
    uname?: string // 可能没有
    readonly id: number
    [proName: string]: any

}
const song: Person = {
    age: 20,
    id: 1
}

song.a = 1

console.log('song', song)

// song.id = 2 不被允许的

// 类型不同使用元组，相同使用数组

let arr: number[] = [1,2, 3,4]

interface NumberArray {
    [index: number]: string
}

// let arr2: NumberArray = [1, 2, 3] // 不能将类型“number”分配给类型“string”
// 元组
let arr4: [number, string]= [1, '1']

function sum () {
    let args: IArguments = arguments
}

// 区别 第一阶段
// function useFetch () {
//     const res = 'song'
//     const age = 10
//     return [res, age] as const
// }
// 第二阶段
function useFetch() {
    const res = 'song'
    const age = 10
    return tuplify(res, age)
}
function tuplify<T extends unknown[]>(...element: T) {
    return element
}

const [res] = useFetch()
