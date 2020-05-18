import axios from './res'


export function cartData(num, img, shopname, price) {
    return axios.post('/cart', {
        num,
        img,
        shopname,
        price
    })
}

export function cartFind() {
    return axios.get('/cartList')
}

export function cartAdd(name) {
    return axios.get('/cartAdd?shopname=' + name)
}

export function cartDec(name) {
    return axios.get('/cartDec?shopname=' + name)
}

export function searchData() {
    return axios.get('/search')
}

export function doPay(uid,price){
    return axios.post('/doPay',{
        uid,
        price
    })
}