/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:08
*/
import Home from '../components/home';
import {connect} from 'react-redux';

/*
    将组件中的state映射到loginSuccess
*/
const mapStateToProps = (state)=>{
    return {
        state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (loginInfo) => {
            dispatch({type: 'LOGIN', data: loginInfo})
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);