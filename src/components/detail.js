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
        const data = {
            id: this.props.params.articleId.split('=')[1],
            val: this.reactQuillRef.getEditor().scrollingContainer.innerHTML
        };
        console.log(data);
        this.props.onUpdate(data);
    }

    onchange(val){
    }
    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],       // toggled buttons
            ['blockquote', 'code-block'],                    // blocks
            [{ 'header': 1 }, { 'header': 2 }],              // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],    // lists
            [{ 'script': 'sub'}, { 'script': 'super' }],     // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],         // outdent/indent
            [{ 'direction': 'rtl' }],                        // text direction
            [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],       // header dropdown
            [{ 'color': [] }, { 'background': [] }],         // dropdown with defaults
            [{ 'font': [] }],                                // font family
            [{ 'align': [] }],                               // text align
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
                <button id="btn_update" onClick={this.onUpdate.bind(this)}>提交</button>
            </div>
        )
    }
};