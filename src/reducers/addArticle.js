/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/19
    Time: 20:36
*/
export default (state = {articleInfo: []},action) =>{
    if(action.type === "PUBLIC_ARTICLE"){
        state.articleInfo = action.data;
        return Object.assign({}, state);
    }
    return state
}