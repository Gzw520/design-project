//导入常量
import { ADD_VALUE, ADD_TO, ADD_INFONUM } from './mutations-type'
export default {
    //操作的状态比较单一
    [ADD_VALUE](state, payload) {
        payload.newProduct.value += payload.payload.value
        // console.log(payload.payload.value);
        // console.log(payload.newProduct.value);
    },
    [ADD_TO](state, payload) {
        state.cartList.push(payload)
    },
    [ADD_INFONUM](state,payload){
        state.infoList.push(payload)
        // console.log(state.infoList);
    }
}