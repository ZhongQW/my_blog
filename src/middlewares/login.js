/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/7
    Time: 18:00
*/
import request from 'superagent';

export default store => next => action => {
    // console.log(action.data);
    if (action.type === 'LOGIN') {
        console.log(action.data);
        request.post('http://localhost:8888/admin/login')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    alert(err.result);
                    next({type: "LOGIN_SUCCESS", isSuccess: false});
                }else if(res.body.error){
                    alert(res.body.result);
                }else{
                    window.location.href = '/nav';
                }
            });
    }
    else
        next(action);
};