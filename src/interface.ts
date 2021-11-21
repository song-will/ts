/**
 * interface 和 type的区别
 * 相同点
 * 都可以描述一个对象或者函数
 * 都可以进行扩展
 * 不同点
 * type 声明基本类型别名、联合类型、元组
 * typeof 获取实例的对象
 * interface 可以被合并，type不可以
 */

 /**
  * 1. 关于后台接口，更愿意使用interface
  * 2. 第三方和开发的sdk， 比如Vue 使用interface
  * 3. 前端库interface
  * 4. 平时开发，可以使用type
  */
interface IPriceData {
    id: number
    m: string
}

type IPriceDataArray = IPriceData[]
// 接口
function getPriceData() {
    return new Promise<IPriceDataArray>((resolve, reject) => {
        fetch('url')
            .then(res => {
                return res.json()
            })
            .then(res => {
                const data:IPriceDataArray = []
                resolve(data)
            })
    })
}

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterFace
}
interface ClockInterFace {
    tick(): void
}
class DigItalClock implements ClockInterFace {
    public tick() :void {
        console.log('dig')
    }
}
class BigItalClock implements ClockInterFace {
    public tick(): void {
        console.log('big')
    }
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterFace {
    return new ctor(hour, minute)
}

const dig = createClock(DigItalClock, 12, 17) 
const big = createClock(BigItalClock, 10, 18)
dig.tick()
big.tick()