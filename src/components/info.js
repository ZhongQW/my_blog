/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 18:42
*/
import React,{Component} from 'react';
import '../public/css/info.css';
import '../public/js/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css';

export default class Info extends Component{
    componentDidMount(){
        this.props.onUserInfo();
    }
    confirmUpdata(){
        let data = {
            nickname: this.refs.userNickName.value,
            name: this.refs.userName.value,
            title: this.refs.userTitle.value,
            birth: this.refs.userAge.value,
            sex: this.refs.userSex.value,
            email: this.refs.userEmail.value,
            job: this.refs.userJob.value,
            address: this.refs.userAddress.value,
            motto: this.refs.userMotto.value
        };
        this.props.onUpdataInfo(data);
    }
    inputOnFocus(e){
        e.target.value = '';
    }
    render(){
        console.log(this.props);
        return(
        <div id="info_back">
           <div id="info">
                <div className="updata">
                    <i className="fa fa-envira" aria-hidden="true"/>
                    <a data-toggle="modal" data-target="#addMovie">修改资料</a>
                </div>
                <ul>
                    <li>
                        <i className="fa fa-modx" aria-hidden="true"/>
                        <span>昵称：</span>
                        <span className="span">{this.props.userInfo.nickname}</span>
                    </li>
                    <li>
                        <i className="fa fa-modx" aria-hidden="true"/>
                        <span>姓名：</span>
                        <span className="span">{this.props.userInfo.name}</span>
                    </li>
                    <li>
                        <i className="fa fa-modx" aria-hidden="true"/>
                        <span>页面标题：</span>
                        <span className="span">{this.props.userInfo.title}</span>
                    </li>
                    <li>
                        <i className="fa fa-modx" aria-hidden="true"/>
                        <span>年龄：</span>
                        <span className="span">{this.props.userInfo.birth }</span>
                    </li>
                    <li>
                        <i className="fa fa-modx" aria-hidden="true"/>
                        <span>性别：</span>
                        <span className="span">{this.props.userInfo.sex}</span>
                    </li>
                    <li>
                        <i className="fa fa-modx" aria-hidden="true"/>
                        <span>e-mail：</span>
                        <span className="span">{this.props.userInfo.email}</span>
                    </li>
                    <li>
                        <i className="fa fa-modx" aria-hidden="true"/>
                        <span>职业：</span>
                        <span className="span">{this.props.userInfo.job}</span>
                    </li>
                    <li>
                        <i className="fa fa-modx" aria-hidden="true"/>
                        <span>address：</span>
                        <span className="span">{this.props.userInfo.address}</span>
                    </li>
                    <li>
                        <i className="fa fa-modx" aria-hidden="true"/>
                        <span>motto：</span>
                        <span className="span">{this.props.userInfo.motto}</span>
                    </li>
                </ul>
            </div>

            <div className="modal fade" id="addMovie" tabIndex="-1" role="dialog"
                     aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-hidden="true">&times;</button>
                                <h3 className="modal-title">修改个人资料</h3>
                            </div>

                            <div className="modal-body">
                                <div id="modal">
                                    <div>
                                        <i className="fa fa-star-half-o" aria-hidden="true"/>
                                        <span>姓名：</span>
                                        <input type="text" ref="userName" onFocus={this.inputOnFocus} defaultValue={this.props.userInfo.name} className="inputK"/>
                                    </div>
                                    <div>
                                        <i className="fa fa-star-half-o" aria-hidden="true"/>
                                        <span>昵称：</span>
                                        <input type="text" ref="userNickName" onFocus={this.inputOnFocus} defaultValue={this.props.userInfo.nickname} className="inputK"/>
                                    </div>
                                    <div>
                                        <i className="fa fa-star-half-o" aria-hidden="true"/>
                                        <span>页面标题：</span>
                                        <input type="text" ref="userTitle" onFocus={this.inputOnFocus} defaultValue={this.props.userInfo.title} className="inputK"/>
                                    </div>
                                    <div>
                                        <i className="fa fa-star-half-o" aria-hidden="true"/>
                                        <span>年龄：</span>
                                        <input type="text" ref="userAge" onFocus={this.inputOnFocus} defaultValue={this.props.userInfo.birth } className="inputK"/>
                                    </div>
                                    <div>
                                        <i className="fa fa-star-half-o" aria-hidden="true"/>
                                        <span>性别：</span>
                                        <select ref="userSex" defaultValue={this.props.userInfo.sex}>
                                            <option>女</option>
                                            <option>男</option>
                                        </select>
                                    </div>
                                    <div>
                                        <i className="fa fa-star-half-o" aria-hidden="true"/>
                                        <span>e-mial：</span>
                                        <input type="text" ref="userEmail" onFocus={this.inputOnFocus} defaultValue={this.props.userInfo.email} className="inputK"/>
                                    </div>
                                    <div>
                                        <i className="fa fa-star-half-o" aria-hidden="true"/>
                                        <span>职业：</span>
                                        <input type="text" ref="userJob" onFocus={this.inputOnFocus} defaultValue={this.props.userInfo.job} className="inputK"/>
                                    </div>
                                    <div>
                                        <i className="fa fa-star-half-o" aria-hidden="true"/>
                                        <span>address：</span>
                                        <input type="text" ref="userAddress" onFocus={this.inputOnFocus} defaultValue={this.props.userInfo.address} className="inputK"/>
                                    </div>
                                    <div>
                                        <i className="fa fa-star-half-o" aria-hidden="true"/>
                                        <span>motto：</span>
                                        <input type="text" ref="userMotto" onFocus={this.inputOnFocus} defaultValue={this.props.userInfo.motto} className="inputK"/>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal"
                                >关闭
                                </button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.confirmUpdata.bind(this)}>
                                    确认修改
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
        )
    }
}