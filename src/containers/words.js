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
        wordsInfo: state.words.wordsInfo
    }
};

/*
    将用户的操作onLogin发出一个type: 'Login'的action
*/
const mapDispatchToProps = (dispatch) => {
    return {
        onGetWords: () => {
            dispatch({type: 'GETWORDS'})
        },
        onBlogReplyWords: (data) => {
            dispatch({type: 'REPLYWORDS', data: data})
        },
        onBlogDeleteWords: (data) => {
            dispatch({type: 'DELETEWORDS', data: data})
        },
        onBlogDeleteWordsReply: (data)=> {
            dispatch({type: 'DELETEREPLY', data: data})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Words);