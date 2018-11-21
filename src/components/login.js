/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/7
    Time: 17:56
*/
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';

import '../public/css/index.css';
import "../public/js/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css"
import Nav from "./nav";


export default class Login extends Component{
    login(){
        const name = this.refs.name.value;
        const password = this.refs.password.value;
        if(!name || !password){
            alert('The password or name is empty!');
            return;
        }
        this.props.onLogin({name, password});
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.loginSuccess === true){
            alert("login success");
            browserHistory.push('/login')
        }else if(nextProps.loginSuccess === false){
            alert("login failed");
        }
    }

    render(){
        return(
            <div className="login">
                <h1>登陆</h1>
                <div className="name_">
                    <i  className="fa fa-user" aria-hidden="true" />
                    <input type='text' ref="name" name="name" placeholder='用户名' />
                </div>
                <div className='password_'>
                    <i className='fa fa-unlock-alt' aria-hidden="true" />
                    <input type='password' ref="password" name="password" placeholder='密码' />
                </div>
                <button id='login_btn' onClick={this.login.bind(this)} >登陆</button>
            </div>
        )
    }
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired
};