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
    console.log(state);
    return {
        articleInfo: state.article.articleInfo,
        articleWords: state.articleWords.oneArticleWords

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
            // console.log(data);
            dispatch({type: 'DELARTICLE', data: data})
        },
        onWordsOne: (data)=>{
            dispatch({type: 'ONEARTICLEWORDS', data: data})
        },
        onDelWords: (data)=>{
            dispatch({type: 'ARTICLEDELWORDS', data: data})
        },
        onReplyWords: (data)=>{
            dispatch({type: 'ARTICLEREPLYWORDS', data: data})
        },
        onDelReply: (data)=>{
            dispatch({type: 'ARTICLEDELREPLY', data: data})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);