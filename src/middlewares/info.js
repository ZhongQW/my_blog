/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 18:42
*/
import request from 'superagent';

export default store => next => action => {
    // console.log(action.data);
    if (action.type === 'UPDATAUSERINFO') {
        console.log(action.data);
        request.post('http://localhost:8888/owner/update')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    next({type: "UPDATA_USER_INFO", data: action.data});
                }
            });
    }else if (action.type === 'GETUSERINFO') {
        request.post('http://localhost:8888/owner/get')
            .send()
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    // alert(res.body.result[0].nickname);
                    next({type: "GET_USER_INFO",data: res.body.result[0]});
                }
            });
    }
    else
        next(action);
};