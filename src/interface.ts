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
interface IPriceData {
    id: number
    m: string
}

type IPriceDataArray = IPriceData[]

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