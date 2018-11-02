/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/11/1
    Time: 15:45
*/
export default (state = {oneArticleWords: []},action) =>{
    if(action.type === "ONE_ARTICLE_WORDS"){
        state.oneArticleWords = action.data;
        return Object.assign({}, state);
    }else if(action.type === 'ARTICLE_DEL_WORDS'){
        state.oneArticleWords = action.data;
        return Object.assign({}, state);
    }
    else if(action.type === 'ARTICLE_REPLY_WORDS'){
        state.oneArticleWords = action.data;
        return Object.assign({}, state);
    }
    else if(action.type === 'ARTICLE_DEL_REPLY'){
        state.oneArticleWords = action.data;
        return Object.assign({}, state);
    }
    return state
}
