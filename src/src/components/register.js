/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 21:32
*/
import React, {Component} from 'react';
import {browserHistory} from 'react-router';


export default class Register extends Component {

    register() {
        const userName = this.refs.userName.value;
        const userPassword = this.refs.userPassword.value;
        const confirmPassword = this.refs.userRePassword.value;

        if (!userName || !userPassword || !confirmPassword) {
            alert("The name or password connot be empty");
            return;
        }
        if (userPassword != confirmPassword) {
            alert("the confirm password is not correct");
            return;
        }
        this.props.onRegister({userName, userPassword});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.registerSuccess === true) {
            alert("register success");
            browserHistory.push('/login');
        } else if (nextProps.registerSuccess === false) {
            alert("register failed");
        }
    }

    render() {
        return <div>
            <h2>注册</h2>
            用户名：<input type="text" ref="userName" name="username"/><br/><br/>
            密码：<input type="password" ref="userPassword" name="password"/><br/><br/>
            重复密码：<input type="password" ref="userRePassword" name="repassword"/><br/><br/>
            <input type="submit" onClick={this.register.bind(this)} value="注册" />
        </div>;

    }
}