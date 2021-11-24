(function () {
    interface User {
        name: string
        age: number
        id: number
    }

    // 必须的字段变为可选, 全部变为?.
    type PartialUser = Partial<User>

    // 去掉❓
    type PullDownRefresh = Required<PartialUser>

    //选择一些必选的字段
    type PickUser = Pick<User, 'id' | 'age'>

    // 排除一些字段
    type OutUser = Omit<User, 'id'>

    // readonly
    type ReadonlyUser = Readonly<User>

    // 排除掉两个类型的交集
    type A = Exclude<'id' | 'age' | 'a', 'c' | 'id' | 'c'>

    // 类型合并 &

    // 交集
    interface FirstType {
        id: number
        name: string
        firstName: string
        lastName: string
    }
    interface SecondType {
        id: number
        name: string
        address: string
        city: string
    }

    type ExtractType = Extract<keyof FirstType, keyof SecondType>

})();

(function () {
    interface User {
        id: number
        age: number
        name: string
    }
    type Select = 'id' | 'age'
    type PartialSelect = Partial<Pick<User, Select>>
    type OmitUser = Omit<User, Select>
    /**
     * Final {
      *     name:string
      *     id?:number
      *     age?:number
     *      }
     */
    type Final = PartialSelect & OmitUser
    const final: Final = {
        name: 'song'
    }

    type SelectPartial<T, V extends keyof T> = Partial<Pick<T, V>> & Omit<T, V>
    type F = SelectPartial<User, Select>
    const f: F = {
        name: 'song'
    }
})();

