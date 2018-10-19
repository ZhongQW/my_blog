/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:10
*/
export default (state = {loginInfo: []},action) =>{
    if(action.type === "ADD_LOGIN_INFO"){
        state.loginInfo = action.data;
        return Object.assign({}, state);
    }else if(action.type === "GET_LOGIN_INFO"){
        state.loginInfo = action.data;
        return Object.assign({}, state);
    }else if(action.type === "DEL_LOGIN_INFO"){
        state.loginInfo = action.data;
        return Object.assign({}, state);
    }
    return state
}
