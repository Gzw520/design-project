//导入常量
import { ADD_VALUE, ADD_TO, ADD_INFONUM } from './mutations-type'
export default {
    addCart(context, payload) {    //context是上下文的意思，里面包括{commit,state}
        let newProduct = context.state.cartList.find(item => item.shopname === payload.shopname)
        if (newProduct) {
            // newProduct.value+=payload.value 
            context.commit({
                type: ADD_VALUE,
                newProduct,
                payload
            })  //另一种提交风格为直接提交，eg：context.commit('ADD_VALUE',newProduce)，这种提交风格只能传一个参数
        } else {
            // state.cartList.push(payload)
            context.commit(ADD_TO, payload)
        }
    },
    addInfo(context, payload) {
        context.commit(ADD_INFONUM, payload)
    }
}