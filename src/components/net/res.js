import axios from "axios";
import qs from 'qs';


axios.defaults.headers['Content-Type']='application/x-www-form-urlencoded;charset=utf-8'
axios.defaults.transformRequest=data=>qs.stringify(data)

const instance = axios.create({
    baseURL: 'http://localhost:3002',
    timeout: 5000,

})
instance.interceptors.request.use(config => {
    if (config.method.toLowerCase === 'post') {
        config.data=qs.stringify(config.data)
    }
    return config
})
instance.interceptors.response.use(res => {
    return res
})

export default instance