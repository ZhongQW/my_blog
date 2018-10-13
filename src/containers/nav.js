/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 18:28
*/
import Nav from '../components/nav';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHome: () => {
            dispatch({type: 'HOME'})
        },
        onArticle: () => {
            dispatch({type: 'ARTICLE'})
        },
        onWords: () => {
            dispatch({type: 'WORDS'})
        },
        onInfo: () => {
            dispatch({type: 'INFO'})
        },
        onLoginManage: () => {
            dispatch({type: 'LOGINMANAGE'})
        },
        onLoginOut: () => {
            dispatch({type: 'LOGINOUT'})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
