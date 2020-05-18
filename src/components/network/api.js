import { request } from './request'

export function typeData() {
    return request({
        url: '/type'
    })
}

export function orderData(name) {
    return request({
        url: '/order?shopname=' + name
    })
}

//面向对象封装详情页数据；
export class Goods {
    constructor(List) {
        this.des = List.description;
        this.price = List.price;
        this.shopname = List.shopname;
        this.showList = List.showList;
    }
}
