/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:08
*/
import React,{Component} from 'react';
import {Link} from 'react-router';
import '../public/css/article.css';

export default class Article extends Component{
    componentDidMount(){
        this.props.onArticleInfo();
    }
    onAddArticle(){
        window.location.href = '/addArticle';
        // this.props.onAddArticle();
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
    onHandleThisWords(id){
        const data = {
            id: id
        };
        this.props.onWordsOne(data);
    }
    onPersonInfo(email){
        prompt('邮箱',email);
    }
    onDelWords(articleId, wordsId){
        const data = {
            wordsId: wordsId,
            articleId: articleId
        };
        console.log(data);
        this.props.onDelWords(data);
    }
    onReplyWords(articleId, wordsId){
        const replyValue = prompt('我的回复');
        const data = {
            wordsId: wordsId,
            articleId: articleId,
            replyValue: replyValue
        };
        this.props.onReplyWords(data);
    }
    onDelReply(articleId, wordsId){
        const data = {
            wordsId: wordsId,
            articleId: articleId
        };
        this.props.onDelReply(data);
    }
    render(){
        // console.log(this.props);
        const articleList = this.props.articleInfo.map((article) => {
            return <tr onClick={this.onHandleThisWords.bind(this, article.articleId)} key={article.articleId}>
                <td>{article.articleTitle}</td>
                <td>{article.articleType}</td>
                <td>{article.articleTime}</td>
                <td>{article.articleVisit}</td>
                <td>{article.articleLover}</td>
                <td>{article.articleWordsAmount}</td>
                <td onClick={this.onUpdateArticle.bind(this, article.articleId)}>修改</td>
                <td onClick={this.onDeleteArticle.bind(this, article.articleId)}>删除</td>
            </tr>
        });
        const wordsList = this.props.articleWords.map((words) => {
            return <li key={words.wordsArticleId}>
                <div className="personWords">
                    <span onClick={this.onPersonInfo.bind(this, words.wordsPersonEmail)}>{words.wordsPersonName}</span>
                    <span>留言：</span>
                    <span>{words.wordsContent}</span>
                    <Link className="del" onClick={this.onDelWords.bind(this, words.articleId, words.wordsArticleId)}>删除留言</Link>
                    <Link onClick={this.onReplyWords.bind(this, words.articleId, words.wordsArticleId)}>回复</Link>
                </div>
                <div className="reply">
                    <span>我的回复：</span>
                    <span>{words.wordsReply}</span>
                    <Link onClick={this.onDelReply.bind(this, words.articleId, words.wordsArticleId)}>删除回复</Link>
                </div>
            </li>
        });
        return(
            <div id="article">
                <div id="article_" >
                    <table cellPadding="20">
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
                <div id="words">
                    <h2>文章留言</h2>
                    <ol>
                        {wordsList}
                        {/*<li>*/}
                            {/*<div className="personWords">*/}
                                {/*<span>zhongqw</span>*/}
                                {/*<span>留言：</span>*/}
                                {/*<span>写得写得写得写得写写得写写得写写得写写得写写得写写得写写得写得写得写得好</span>*/}
                                {/*<Link>删除留言</Link>*/}
                                {/*<Link>回复</Link>*/}
                            {/*</div>*/}
                            {/*<div className="reply">*/}
                                {/*<span>我的回复：</span>*/}
                                {/*<span>谢谢你的夸谢谢你的夸谢谢你的夸谢谢你的夸奖！</span>*/}
                                {/*<Link>删除回复</Link>*/}
                            {/*</div>*/}
                        {/*</li>*/}
                    </ol>
                </div>
            </div>
        )
    }
}