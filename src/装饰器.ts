import 'reflect-metadata'
function inject(serviceIdentifier: string) {
    return function (target: Object, targetKey: string, index: number) {
        Reflect.defineMetadata(serviceIdentifier, 'song', target)
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


