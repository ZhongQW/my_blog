/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 18:42
*/
import Info from '../components/info';
import {connect} from 'react-redux';

/*
    将组件中的state映射到loginSuccess
*/
const mapStateToProps = (state)=>{
    // console.log(state);
    return {
        userInfo: state.info.userInfo
    }
};

/*
    将用户的操作onLogin发出一个type: 'Login'的action
*/
const mapDispatchToProps = (dispatch) => {
    return {
        onUpdataInfo: (new_userInfo) => {
            dispatch({type: 'UPDATAUSERINFO', data: new_userInfo})
        },
        onUserInfo: () => {
            dispatch({type: "GETUSERINFO"});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);