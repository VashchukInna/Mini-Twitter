import ReactDOM from 'react-dom';
import React from 'react';
import jQuery from 'jquery';
import {hashHistory, Router, Route, Redirect} from 'react-router';
import Layout from './parts/layout'
import TestPage from './parts/test'

const APP = (
    <Router history = {hashHistory}>
    <Redirect from = "/" to = "/test"/> 
    <Route path = "/" component = {Layout}>
    <Route path = "test" component = {TestPage}/>
    </Router>
)
jQuery(function () {
    ReactDOM.render(
        app,
        document.getElementById('main')
    );
});