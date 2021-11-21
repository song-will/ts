function identity(arg) {
    return arg.length;
}
// !: 表示一定有值, 排除null和undefined
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(1, 2));
// 2. 使用泛型函数重载
function getData(value) {
    return value;
}
getData('1');
getData(1);
var getData_2 = function (value) {
};
getData_2('2');
var BookmarkService = /** @class */ (function () {
    function BookmarkService() {
        this.items = [];
    }
    return BookmarkService;
}());
var BookmarkService2 = /** @class */ (function () {
    function BookmarkService2() {
        this.items = [];
    }
    return BookmarkService2;
}());
console.log(new BookmarkService2());
// 泛型彩蛋
// let err1: readonly Set<number>
// let err2: readonly Array<number>
var ok1;
var ok2;
ok2 = [1, '2'];
