/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/7
    Time: 18:00
*/
import Login from '../components/login';
import {connect} from 'react-redux';

/*
    将组件中的state映射到loginSuccess
*/
const mapStateToProps = (state)=>{
    return {
        loginSuccess: state.login.loginSuccess
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
