/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/19
    Time: 20:32
*/
import React,{Component} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../public/css/addArticle.css'

export default class Detail extends Component{

    componentDidMount(){

    }

    constructor(props) {
        super(props);
        this.state = { text: '' } ;
    }

    confirmArticleInfo(){
        let type;
        if(this.refs.articleType.value === '技术文章'){
            type = 0;
        }else{
            type = 1;
        }
        let data = {
            title: this.refs.articleTitle.value,
            type: type,
            value: this.state.text
        };
        this.props.onHandlePublic(data);
    }
    render(){

        return(
            <div id="detail">
                <ReactQuill
                    theme="snow"
                    value={ this.state.text }
                    onChange={(val)=>{
                        this.setState({
                            text: val
                        });
                    }}
                    placeholder="请输入文章..."
                />
                <button id="btn_update" data-toggle="modal" data-target="#addMovie" >发布</button>

                <div className="modal fade" id="addMovie" tabIndex="-1" role="dialog"
                     aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-hidden="true">&times;</button>
                                <h3 className="modal-title">新增文章信息</h3>
                            </div>

                            <div className="modal-body">
                                <div id="modal">
                                    <span>文章标题</span>
                                    <input ref="articleTitle" type="text" placeholder="请输入..." />
                                    <span>文章类型</span>
                                   <select ref="articleType" defaultValue="技术文章">
                                       <option>技术文章</option>
                                       <option>生活杂谈</option>
                                   </select>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal"
                                >关闭
                                </button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.confirmArticleInfo.bind(this)}>
                                    确认发布
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
};