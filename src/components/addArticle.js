/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/19
    Time: 20:32
*/
import React,{Component} from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';

import 'react-quill/dist/quill.snow.css';
import '../public/css/addArticle.css'
import Detail from "./detail";

export default class addArticle extends Component{

    componentDidMount(){

    }

    constructor(props) {
        super(props);
        this.state = { text: '' } ;
    }

    confirmArticleInfo(){
        let type;
        switch(this.refs.articleType.value){
            case '生活':
                type = 1; break;
            case '日记':
                type = 2; break;
            case '美文':
                type = 3; break;
            case 'java':
                type = 10; break;
            case 'python':
                type = 11; break;
            case 'c':
                type = 12; break;
            case 'javascript':
                type = 13; break;
            case 'css':
                type = 14; break;
            case 'html':
                type = 15; break;
            case 'bug调试':
                type = 16; break;
            case '干货':
                type = 17; break;
            case '精选':
                type = 100; break;
            default:
                type = 13; break;
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
                                       <option>生活</option>
                                       <option>日记</option>
                                       <option>美文</option>
                                       <option>java</option>
                                       <option>python</option>
                                       <option>c</option>
                                       <option>javascript</option>
                                       <option>css</option>
                                       <option>html</option>
                                       <option>bug调试</option>
                                       <option>干货</option>
                                       <option>精选</option>
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
addArticle.propTypes = {
    onHandlePublic: PropTypes.func.isRequired
};