/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/19
    Time: 20:36
*/
import addArticle from '../components/addArticle';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return {
        state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHandlePublic: (data)=>{
            // console.log(data);
            dispatch({type: 'PUBLICARTICLE', data: data});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(addArticle);