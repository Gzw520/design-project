export default {
    cartNum(state) {
        return state.cartList
    },
    cartLength(state) {
        return state.cartList.length
    },
    Info(state) {
        return state.infoList
    },
    infoLength(state){
        return state.infoList.length
    }
}