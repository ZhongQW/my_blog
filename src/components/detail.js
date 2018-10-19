/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/14
    Time: 16:41
*/
import React,{Component} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../public/css/detail.css'

export default class Detail extends Component{

    constructor(props) {
        super(props);
        this.state = { text: '123' } ;
    }

    componentDidMount(){
        let url = this.props.params.articleId;
        let data = {
            id: url.split('=')[1]
        };
        this.props.onGetArticle(data);
        // this.setState({
        //     text: this.props.oneArticleInfo.articleContent
        // });
        // console.log(this.props.oneArticleInfo.articleContent);

    }

    onUpdate(){
        let data = {
            value: this.state
        };
        this.props.onUpdate(data);
    }

    render(){
        console.log(this.props.oneArticleInfo.articleContent);
        // console.log(this.state);
        return(
            <div id="detail">
                <ReactQuill
                    theme="snow"
                    value={this.props.oneArticleInfo.articleContent}
                    onChange={(val)=>{
                        this.setState({
                            text: val
                        });
                    }}
                placeholder="请输入文章..."
                />
                <button id="btn_update" onClick={this.onUpdate.bind(this)}>提交</button>
            </div>
        )
    }
};