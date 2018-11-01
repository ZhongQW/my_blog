/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/11
    Time: 19:26
*/

export default store => next => action => {
    if (action.type === 'HOME') {
        console.log('1');
        window.location.href = '/nav';
    }else if (action.type === 'ARTICLE') {
        window.location.href = '/article';
    }else if (action.type === 'WORDS') {
        window.location.href = '/words';
    }else if (action.type === 'INFO') {
             window.location.href = '/info';
    }else if (action.type === 'LOGINMANAGE') {
        window.location.href = '/loginmanage';
    }else if (action.type === 'LOGINOUT') {
        window.location.href = '/';
    }
    else
        next(action);
};