/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/13
    Time: 15:25
*/
export default (state = {userInfo: []},action) =>{
    if(action.type === "USERINFO_SUCCESS"){
        state.userInfo = action.data;
        // alert(state.userInfo.nickname);
        return Object.assign({},state);
    }
    return state
}