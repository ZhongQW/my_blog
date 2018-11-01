/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:10
*/
export default (state = {wordsInfo: []},action) =>{
    if(action.type === "GET_WORDS_INFO"){
        state.wordsInfo = action.data;
        return Object.assign({}, state);
    }
    else if(action.type === 'REPLY_WORDS'){
        state.wordsInfo = action.data;
        return Object.assign({}, state);
    }
    else if(action.type === 'DELETE_WORDS'){
        state.wordsInfo = action.data;
        return Object.assign({}, state);
    }
    else if(action.type === 'DELETE_REPLY'){
        state.wordsInfo = action.data;
        return Object.assign({}, state);
    }
    return state
}
