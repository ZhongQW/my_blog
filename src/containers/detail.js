/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/14
    Time: 16:42
*/
import Detail from '../components/detail';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return {
        oneArticleInfo: state.detail.oneArticleInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetArticle: (data) => {
            // console.log(data);
            dispatch({type: 'GETARTICLE',data: data})
        },
        onUpdate: (data) => {
            dispatch({type: 'UPDATEARTICLE',data: data})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
