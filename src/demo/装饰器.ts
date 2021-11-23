import 'reflect-metadata'
function inject(serviceIdentifier: string) {
    return function (target: Object, targetKey: string, index: number) {
        console.log(serviceIdentifier, target)
        Reflect.defineMetadata(serviceIdentifier, 'lina', target)
    }
}
class IndexController {
    public indexService: string
    constructor(@inject('xxx') indexService: string) {
        this.indexService = indexService
    }
}
// IOC 注入
const index = new IndexController('song')
console.log(1, index.indexService);
// JavaScript元编程
console.log(2, Reflect.getMetadata('xxx', IndexController));


function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() { }
}


class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target,propertyKey,descriptor)
        descriptor.enumerable = value;
    };
}