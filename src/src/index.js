import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';

import reducer from './reducers/index';
import './public/index.css';

import middleRegister from './middlewares/register';
import register from './containers/register';

const createMiddlewareStore = applyMiddleware(middleRegister)(createStore);
const store = createMiddlewareStore(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={register}/>
        </Router>
    </Provider>, document.getElementById('root'));
