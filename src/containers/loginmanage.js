/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 21:42
*/
import Loginmanage from '../components/loginmanage'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        loginInfo: state.loginmanage.loginInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddLogin: (loginInfo) => {
            dispatch({type: 'REGISTER', data: loginInfo})
        },
        onLoginInfo: () => {
            dispatch({type: 'GETLOGININFO'})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginmanage);
