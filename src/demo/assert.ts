// 类型断言
function getLength (str: string | number): number {
    return (<string>str).length ? (<string>str).length : str.toString().length
} 

type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

function getName (n: NameOrResolver): Name {
    return typeof n === 'string' ?  n :  n()
}