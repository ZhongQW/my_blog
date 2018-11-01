/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:08
*/
import React,{Component} from 'react';
import '../public/css/words.css'

export default class Words extends Component{
    componentDidMount(){
        this.props.onGetWords();
    }
    onReply(id){
        const text = prompt("留言回复：");
        if(text) {
            const data = {
                id: id,
                value: text
            };
            this.props.onReplyWords(data);
        }
    }
    onDelete(id){
        const data ={
            id: id
        };
        this.props.onDeleteWords(data);
    }
    onDelReply(id){
        const data ={
            id: id
        };
        this.props.onDeleteWordsReply(data);
    }
    render(){
        // console.log(this.props);
        const wordsList = this.props.wordsInfo.map((words) => {
            return <tr key={words.wordsBlogId}>
                <td>{words.wordsPersonName}</td>
                <td>{words.wordsPersonEmail}</td>
                <td>{words.wordsTime}</td>
                <td>{words.wordsContent}</td>
                <td>{words.wordsReply}</td>
                <td onClick={this.onDelReply.bind(this, words.wordsBlogId)}>删除</td>
                <td onClick={this.onReply.bind(this, words.wordsBlogId)}>回复</td>
                <td onClick={this.onDelete.bind(this, words.wordsBlogId)}>删除留言</td>
            </tr>
        });
        return(
            <div id="words">
                <div id="words_" cellPadding="16">
                    <table>
                        <tbody>
                        <tr>
                            <th>留言者姓名</th>
                            <th>留言者邮箱</th>
                            <th>留言者时间</th>
                            <th>留言者内容</th>
                            <th colSpan="2">我的回复</th>
                            <th colSpan="2">操作</th>
                        </tr>
                        {wordsList}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}