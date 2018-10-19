/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:08
*/
import React,{Component} from 'react';
import '../public/css/article.css';

export default class Article extends Component{
    componentDidMount(){
        this.props.onArticleInfo();
    }
    onAddArticle(){
        this.props.onAddArticle();
    }
    onUpdateArticle(id){
        let data = {
            id: id
        };
        this.props.onUpdateArticle(data);
    }
    onDeleteArticle(id){
        let data = {
            id: id
        };
        this.props.onDeleteArticle(data);
    }
    render(){
        // console.log(this.props);
        const articleList = this.props.articleInfo.map((article) => {
            return <tr key={article.articleId}>
                <td>{article.articleName}</td>
                <td>{article.articleType}</td>
                <td>{article.articleTime}</td>
                <td>{article.articleVisit}</td>
                <td>{article.articleLover}</td>
                <td>{article.articleWords}</td>
                <td onClick={this.onUpdateArticle.bind(this, article.articleId)}>修改</td>
                <td onClick={this.onDeleteArticle.bind(this, article.articleId)}>删除</td>
            </tr>
        });
        return(
            <div id="article">
                <div id="article_" cellPadding="20">
                    <table>
                        <tbody>
                        <tr>
                            <th>文章名</th>
                            <th>类型</th>
                            <th>发布时间</th>
                            <th>访问量</th>
                            <th>喜欢量</th>
                            <th>留言量</th>
                            <th colSpan="2">操作</th>
                        </tr>
                        {articleList}
                        </tbody>
                    </table>
                    <button className="addLogin" onClick={this.onAddArticle.bind(this)}>增加</button>
                </div>
            </div>
        )
    }
}