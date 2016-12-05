import ReactDOM from 'react-dom';
import React from 'react';
import jQuery from 'jquery';
import {hashHistory, Router, Route, Redirect} from 'react-router';
import Layout from './parts/layout'
import Test from './parts/test'

const app = (
    <Router history={hashHistory}>
        <Redirect from="/" to="/test"/>
        <Route path="/" component={Layout}>
            <Route path="test" component={Test}/>
    </Router>
)
jQuery(function () {
    ReactDOM.render(
        app,
        document.getElementById('main')
    );
});