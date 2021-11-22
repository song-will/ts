"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
require("reflect-metadata");
function inject(serviceIdentifier) {
    return function (target, targetKey, index) {
        Reflect.defineMetadata(serviceIdentifier, 'song', target);
    };
}
var IndexController = /** @class */ (function () {
    function IndexController(indexService) {
        this.indexService = indexService;
    }
    IndexController = __decorate([
        __param(0, inject('xxx'))
    ], IndexController);
    return IndexController;
}());
// IOC 注入
var index = new IndexController('song');
console.log(1, index.indexService);
// JavaScript元编程
console.log(2, Reflect.getMetadata('xxx', IndexController));
