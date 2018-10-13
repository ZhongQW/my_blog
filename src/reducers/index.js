/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 21:34
*/
import {combineReducers} from 'redux';
import login from './login';
import nav from './nav';
import info from './info';
import loginmanage from './loginmange';

export default combineReducers({
    login,
    nav,
    info,
    loginmanage
});