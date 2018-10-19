/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:11
*/
export default (state = {articleInfo: []},action) =>{
    if(action.type === "GET_ARTICLE_INFO"){
        state.articleInfo = action.data;
        return Object.assign({}, state);
    }else if(action.type === "DEL_ARTICLE_INFO"){
        state.articleInfo = action.data;
        return Object.assign({}, state);
    }
    return state
}
