/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:12
*/
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GETWORDS') {
        request.post('http://localhost:8888/words/getall')
            .send()
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    // console.log(res.body.result);
                    next({type: "GET_WORDS_INFO", data: res.body.result});
                }
            });
    }else if(action.type === 'REPLYWORDS'){
        request.post('http://localhost:8888/words/replyperson')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    // console.log(res.body.result);
                    next({type: "REPLY_WORDS", data: res.body.result});
                }
            });
    }else if(action.type === 'DELETEWORDS'){
        request.post('http://localhost:8888/words/delete')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    next({type: "DELETE_WORDS", data: res.body.result});
                }
            });
    }else if(action.type === 'DELETEREPLY'){
        // console.log(action.data.id);
        request.post('http://localhost:8888/words/deletereply')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    next({type: "DELETE_REPLY", data: res.body.result});
                }
            });
    }
    else
        next(action);
};