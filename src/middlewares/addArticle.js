/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/19
    Time: 20:36
*/
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'ADDARTICLE') {
        request.post('http://localhost:8888/article/add')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    next({type: "ADD_ARTICLE_INFO", data: res.body.result});
                    window.location.href = '/article';
                }
            });
    }
    else
        next(action);
};