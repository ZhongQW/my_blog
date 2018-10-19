/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/19
    Time: 20:32
*/
import React,{Component} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../public/css/detail.css'

export default class Detail extends Component{

    componentDidMount(){

    }

    constructor(props) {
        super(props);
        this.state = { text: '' } ;
    }

    onHandleClick(){
        let data = {
            value: this.state
        };
        this.props.onHandleClick(data);
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
                <button id="btn_update" onClick={this.onHandleClick.bind(this)}>确认发布</button>
            </div>
        )
    }
};