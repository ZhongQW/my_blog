/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:08
*/
import Article from '../components/article';
import {connect} from 'react-redux';

/*
    将组件中的state映射到loginSuccess
*/
const mapStateToProps = (state)=>{
    return {
        articleInfo: state.article.articleInfo
    }
};

/*
    将用户的操作onLogin发出一个type: 'Login'的action
*/
const mapDispatchToProps = (dispatch) => {
    return {
        onArticleInfo: ()=>{
            dispatch({type: 'GETARTICLEINFO'})
        },
        onAddArticle: ()=>{
            dispatch({type: 'ADDARTICLE'})
        },
        onUpdateArticle: (data)=>{
            dispatch({type: 'UPDATEARTICLE', data: data})
        },
        onDeleteArticle: (data)=>{
            console.log(data);
            dispatch({type: 'DELARTICLE', data: data})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);