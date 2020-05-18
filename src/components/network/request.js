import axios from 'axios';

export function request(config){
    //创建axios实例
    const instance = axios.create({
        baseURL:'http://localhost:3002',  //http://localhost:3002/order
        timeout:5000
    })
    //请求拦截器
    instance.interceptors.request.use(config=>{
        return config
    })

    //响应拦截
    instance.interceptors.response.use(res=>{
        return res
    })

    //发送网络请求
    return instance(config)
}