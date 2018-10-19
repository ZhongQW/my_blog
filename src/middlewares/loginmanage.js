/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:12
*/
import request from 'superagent';

export default store => next => action => {
    // console.log(action.data);
    if (action.type === 'REGISTER') {
        request.post('http://localhost:8888/admin/register')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    next({type: "ADD_LOGIN_INFO", data: res.body.result});
                }
            });
    }else if (action.type === 'GETLOGININFO') {
        request.post('http://localhost:8888/admin/get')
            .send()
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                } else if (res.body.error) {
                    alert(res.body.result);
                } else {
                    next({type: "GET_LOGIN_INFO", data: res.body.result});
                }
            });
    }else if (action.type === 'DELLOGIN') {
        console.log(action.data);
        request.post('http://localhost:8888/admin/del')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    next({type: "DEL_LOGIN_INFO", data: res.body.result});
                }
            });
    }
    else
        next(action);
};