/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:09
*/
import Words from '../components/words';
import {connect} from 'react-redux';

/*
    将组件中的state映射到loginSuccess
*/
const mapStateToProps = (state)=>{
    return {
        state
    }
};

/*
    将用户的操作onLogin发出一个type: 'Login'的action
*/
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (loginInfo) => {
            // console.log(loginInfo);
            dispatch({type: 'LOGIN', data: loginInfo})
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Words);