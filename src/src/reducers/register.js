/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 21:30
*/
export default (state = {registerSuccess: "", flag: false}, action) => {
    if (action.type === 'REGISER_SUCCESS') {
        state.registerSuccess = action.isSuccess;
        return Object.assign({}, state);
    }

    return state;
}