/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:11
*/
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GETARTICLEINFO') {
        request.post('http://localhost:8888/article/getallarticle')
            .send()
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    // console.log(res.body.result);
                    next({type: "GET_ARTICLE_INFO", data: res.body.result});
                }
            });
    }else if (action.type === 'ADDARTICLE') {
        window.location.href = '/detail/addArticle';
    }else if (action.type === 'UPDATEARTICLE') {
        window.location.href = '/detail/id='+action.data.id;
    }else if (action.type === 'DELARTICLE') {
        // console.log(action.data);
        request.post('http://localhost:8888/article/delete')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    next({type: "DEL_ARTICLE_INFO", data: res.body.result});
                }
            });
    }else if (action.type === 'ONEARTICLEWORDS') {
        // console.log(action.data);
        request.post('http://localhost:8888/article/getwords')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    next({type: "ONE_ARTICLE_WORDS", data: res.body.result});
                }
            });
    }else if (action.type === 'ARTICLEDELWORDS') {
        // console.log(action.data);
        request.post('http://localhost:8888/article/articledelwords')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    next({type: "ARTICLE_DEL_WORDS", data: res.body.result});
                }
            });
    }else if (action.type === 'ARTICLEREPLYWORDS') {
        // console.log(action.data);
        request.post('http://localhost:8888/article/articlereplywords')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    next({type: "ARTICLE_REPLY_WORDS", data: res.body.result});
                }
            });
    }else if (action.type === 'ARTICLEDELREPLY') {
        // console.log(action.data);
        request.post('http://localhost:8888/article/articledelreply')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    next({type: "ARTICLE_DEL_REPLY", data: res.body.result});
                }
            });
    }
    else
        next(action);
};