/* eslint-disable no-restricted-properties */
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import React from 'react';

import reducer from './reducers/index';

import middleLogin from './middlewares/login';
import middleNav from './middlewares/nav';
import middleInfo from './middlewares/info';
import middleLoginManage from './middlewares/loginmanage';
import middleArticle from './middlewares/article';
import middleDetailArticle from './middlewares/detail';
import middleAddArticle from './middlewares/addArticle';
import middleWords from './middlewares/words';

import login from './containers/login'; //登录
import nav from './containers/nav'; //导航
import home from './containers/home'; //主页面
import article from './containers/article'; //文章页面
import words from './containers/words'; //留言管理
import info from './containers/info'; //个人信息管理
import loginmanage from './containers/loginmanage'; //登录管理
import detail from './containers/detail'; //文章详情
import addArticle from './containers/addArticle'; //增加文章

const createMiddlewareStore = applyMiddleware(
    middleLogin, middleNav, middleInfo, middleLoginManage, middleArticle,
    middleDetailArticle,middleAddArticle,middleWords
)(createStore);
const store = createMiddlewareStore(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRoute component={login}/>
                <Route path="nav" components={nav}>
                    <IndexRoute components={home} />
                    <Route path="/article" components={article}/>
                    <Route path="/detail/:articleId" components={detail}/>
                    <Route path="/addArticle" components={addArticle}/>
                    <Route path="/words" components={words}/>
                    <Route path="/info" components={info}/>
                    <Router path="/loginmanage" components={loginmanage}/>
                </Route>
            </Route>
        </Router>
    </Provider>, document.getElementById('root'));