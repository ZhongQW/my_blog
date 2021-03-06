/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/19
    Time: 20:22
*/
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GETARTICLE') {
        // alert(action.data.id);
        request.post('http://localhost:8888/article/getone')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    // console.log(res.body.result);
                    next({type: "GET_ONE_ARTICLE_INFO", data: res.body.result[0]});
                }
            });
    }else if (action.type === 'UPDATE') {
        // alert(action.data.type);
        request.post('http://localhost:8888/article/update')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    // console.log(res.body.result);
                    next({type: "UPDATE_ARTICLE_INFO", data: res.body.result[0]});
                    window.location.href = '/article';
                }
            });
    }
    else
        next(action);
};