/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 18:27
*/
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import '../public/css/nav.css';

export default class Nav extends Component{

    render() {
        const {onHome, onArticle, onWords, onInfo, onLoginManage, onLoginOut} = this.props;
        return (<div id="nav">
            <ul>
                <li onClick={onHome}>博客主页</li>
                <li onClick={onArticle}>文章管理</li>
                <li onClick={onWords}>留言管理</li>
                <li onClick={onInfo}>个人中心</li>
                <li onClick={onLoginManage}>登录管理</li>
                <li onClick={onLoginOut}>退出登录</li>
            </ul>
            {this.props.children}
        </div>)
    }
}

Nav.propTypes = {
    onHome: PropTypes.func.isRequired,
    onArticle: PropTypes.func.isRequired,
    onWords: PropTypes.func.isRequired,
    onInfo: PropTypes.func.isRequired,
    onLoginManage: PropTypes.func.isRequired,
    onLoginOut: PropTypes.func.isRequired
};