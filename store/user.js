// state 用于存放 store/user里面的用户数据
export const state = {
    userInfo:{}
}
//给state数据赋值，mutation的第一个值必须是state
export const mutations={
    setuserInfo(state,data){
        state.userInfo = data
    }
}