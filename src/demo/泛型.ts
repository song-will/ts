// 泛型： 
// 不知道类型是什么的时候
interface LengthWise {
    length: number
}

function identity <T extends LengthWise>(arg: T): number {
    return arg.length
}

// !: 表示一定有值, 排除null和undefined
class GenericNumber<T> {
    zeroValue: T | undefined
    add!: (x: T, y: T) => T
}

const myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = (x, y) => x + y
console.log(myGenericNumber.add(1, 2))

// 2. 使用泛型函数重载
function getData<T>(value: T): T {
    return value
}

getData('1')
getData(1)

// 3. 泛型接口
interface ConfigFn {
    <T>(value: T): void
}

const getData_2: ConfigFn = function <T>(value: T): void {

}
getData_2('2')

// 4. 动态泛型
interface Bookmark {
    msg: string
}
class BookmarkService<T extends Bookmark> {
    items: T[] = []
}

class BookmarkService2<T extends Bookmark = Bookmark> {
    items: T[] = []
}

console.log(new BookmarkService2())


// 泛型彩蛋
// let err1: readonly Set<number>
// let err2: readonly Array<number>

let ok1: readonly boolean[]
let ok2: readonly [number, string]

ok2 = [1, '2']