/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 21:30
*/
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'REGISTER') {
        request.post('http://localhost:8081/admin/register')
            .send(action.data)
            .end((err, res) => {
                if (err) {

                    next({type: "REGISER_SUCCESS", isSuccess: false});
                }
                next({type: "REGISER_SUCCESS", isSuccess: res.body.isSuccess});
            });
    }
    else
        next(action);
};