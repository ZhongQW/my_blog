/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 21:32
*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../public/css/login.css';
import "../public/js/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css"
import Nav from "./nav";

export default class Loginmanage extends Component {
    componentDidMount(){
        this.props.onLoginInfo();
    }

    onAddLogin() {
        const name = this.refs.username.value;
        const password = this.refs.password.value;
        const confirmPassword = this.refs.confirmPassword.value;
        if(name === ''||password ==='' ||confirmPassword === ''){
            alert('Fail!The name or password is empty!');
        }else if(password !== confirmPassword){
            alert('Fail!The two passwords are not the same!');
        }else{
            let data = {
                userName: name,
                userPassword: password
            };
            this.props.onAddLogin(data);
        }
        this.refs.username.value = '';
        this.refs.password.value = '';
        this.refs.confirmPassword.value = '';
    }
    onDelLogin(id){
        if(id === 1){
            alert('This Account is not allowed to be deleted!');
            return ;
        }
        let data = {
            userId: id
        };
        this.props.onDelLogin(data);
    }

    render() {
        const loginList = this.props.loginInfo.map((login) => {
            return <tr key={login.userId}>
                        <td>{login.userName}</td>
                        <td>{login.userPassword}</td>
                        <td onClick={this.onDelLogin.bind(this,login.userId)}>删除</td>
                    </tr>
        });
        return(
            <div id="login_manage_back">
                <div id="login_manage" >
                <table cellPadding="20">
                    <tbody>
                    <tr>
                        <th>登录名</th>
                        <th>密码</th>
                        <th>操作</th>
                    </tr>
                    {loginList}
                    </tbody>
                </table>
                <button className="addLogin" data-toggle="modal" data-target="#addLogin">增加</button>
            </div>

                <div className="modal fade" id="addLogin" tabIndex="-1" role="dialog"
                     aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-hidden="true">&times;</button>
                                <h3 className="modal-title">增加登录用户</h3>
                            </div>

                            <div className="modal-body">
                                <div id="modal">
                                    <div>
                                        <i className="fa fa-star-half-o" aria-hidden="true"/>
                                        <span>用户名</span>
                                        <input ref="username" />
                                    </div>
                                    <div>
                                        <i className="fa fa-star-half-o" aria-hidden="true"/>
                                        <span>密码</span>
                                        <input type="password" ref="password" />
                                    </div>
                                    <div>
                                        <i className="fa fa-star-half-o" aria-hidden="true"/>
                                        <span>确认密码</span>
                                        <input type="password" ref="confirmPassword" />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal"
                                >关闭
                                </button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.onAddLogin.bind(this)}>
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

Loginmanage.propTypes = {
    onLoginInfo: PropTypes.func.isRequired,
    onAddLogin: PropTypes.func.isRequired,
    onDelLogin: PropTypes.func.isRequired,
    loginInfo: PropTypes.object.isRequired
};