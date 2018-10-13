/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/7
    Time: 18:00
*/
/*
    负责生成state
*/
export default (state = {loginSuccess:"",flag: false},action) =>{
    if(action.type === "LOGIN_SUCCESS"){
        state.loginSuccess = action.isSuccess;
        return Object.assign({},state);
    }
    return state
}