/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/19
    Time: 20:37
*/
export default (state = {oneArticleInfo: []},action) =>{
    if(action.type === "GET_ONE_ARTICLE_INFO"){
        state.oneArticleInfo = action.data;
        return Object.assign({}, state);
    }else if(action.type === 'UPDATE_ARTICLE_INFO'){
        state.oneArticleInfo = action.data;
        return Object.assign({}, state);
    }
    return state
}
