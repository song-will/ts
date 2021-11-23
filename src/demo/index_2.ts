// => ts和es6
let myNum: (x: number, y: number) => number = function (x, y) {
    return x + y
}

// 剩余参数
function push (array: any[], ...items: any[]) {
    items.forEach(item => {
        array.push(item)
    })
}

let a = [3]
push(a, 1,3,4)

// 可选参数 必须 放在后面 
function buildName2 (lastName: string, firstName?: string) {
    return firstName ? firstName + ' ' + lastName : lastName
}