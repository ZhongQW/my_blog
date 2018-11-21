/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/14
    Time: 16:41
*/
import React,{Component} from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';

import 'react-quill/dist/quill.snow.css';
import '../public/css/detail.css'
import Info from "./info";

export default class Detail extends Component{

    constructor(props) {
        super(props);
        this.quillRef = null;      // Quill instance
        this.reactQuillRef = null; // ReactQuill component
    }

    componentDidMount(){
        let url = this.props.params.articleId;
        let data = {
            id: url.split('=')[1]
        };
        this.props.onGetArticle(data);
    }

    onUpdate(){
        // console.log(this.reactQuillRef);
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
        const data = {
            id: this.props.params.articleId.split('=')[1],
            title: this.refs.articleTitle.value,
            type: type,
            val: this.reactQuillRef.getEditor().scrollingContainer.innerHTML
        };
        console.log(data);
        this.props.onUpdate(data);
    }

    onchange(val){
    }
    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean'],
        ],
    };

    formats = [
        'header', 'font', 'background', 'color', 'code', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'script', 'align', 'direction',
        'link', 'image', 'code-block', 'formula', 'video'
    ];

    render(){
        console.log(this.props.oneArticleInfo.articleType);
        return(
            <div id="detail">
                <ReactQuill
                    theme="snow"
                    modules={this.modules}
                    formats={this.formats}
                    value={this.props.oneArticleInfo.articleContent}
                    ref={(el) => { this.reactQuillRef = el }}
                    onChange={this.onchange.bind(this)}
                    placeholder="请输入文章..."
                />
                <button id="btn_update" data-toggle="modal" data-target="#addMovie" >提交</button>
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
                                    <span >文章标题</span>
                                    <input ref="articleTitle" type="text" defaultValue={this.props.oneArticleInfo.articleTitle} placeholder="请输入..." />
                                    <span>文章类型</span>
                                    <select ref="articleType" defaultValue={this.props.oneArticleInfo.articleType}>
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
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.onUpdate.bind(this)}>
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

Detail.propTypes = {
    onGetArticle: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    oneArticleInfo: PropTypes.object.isRequired
};