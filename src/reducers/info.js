/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 18:42
*/
export default (state = {userInfo: {}},action) =>{
    if(action.type === "UPDATA_USER_INFO"){
        state.userInfo = action.data;
        return Object.assign({}, state);
    }else if(action.type === "GET_USER_INFO"){
        state.userInfo = action.data;
        return Object.assign({}, state);
    }
    return state
}